export function validateInquiry(form) {
  if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.service) return 'Please fill in all required fields.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return 'Please enter a valid email.';
  const digits = form.phone.replace(/\D/g, '');
  if (!/^[0-9+\-()\s]+$/.test(form.phone) || digits.length < 7 || digits.length > 15) return 'Please enter a valid phone number.';
  return null;
}

export async function submitInquiry(endpoint, payload, fetcher = fetch) {
  const response = await fetcher(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(20000),
  });
  const result = await response.json();
  if (!response.ok || result.ok !== true) throw new Error('The inquiry was not confirmed by the form provider.');
  return result;
}
