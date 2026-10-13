export function normalizeEmail(value = '') {
  const email = String(value).trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return '';
  const [local, domain] = email.split('@');
  return `${/^(gmail|googlemail)\.com$/.test(domain) ? local.replace(/\./g, '') : local}@${domain}`;
}

export function normalizePhone(value = '') {
  const raw = String(value).trim();
  const digits = raw.replace(/\D/g, '');
  if (/^[6-9]\d{9}$/.test(digits)) return `+91${digits}`;
  if (/^0[6-9]\d{9}$/.test(digits)) return `+91${digits.slice(1)}`;
  if (/^91[6-9]\d{9}$/.test(digits)) return `+${digits}`;
  return raw.startsWith('+') && /^[1-9]\d{7,14}$/.test(digits) ? `+${digits}` : '';
}

// Only SHA-256 digests enter the Google tag queue. Nothing is saved in storage.
export async function hashCustomerData(customer, crypto) {
  const email = normalizeEmail(customer?.email);
  if (!email || !crypto?.subtle) return undefined;
  const hash = async (value) => Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value))))
    .map((byte) => byte.toString(16).padStart(2, '0')).join('');
  const phone = normalizePhone(customer?.phone);
  const [emailHash, phoneHash] = await Promise.all([hash(email), phone ? hash(phone) : undefined]);
  return { sha256_email_address: emailHash, ...(phoneHash ? { sha256_phone_number: phoneHash } : {}) };
}
