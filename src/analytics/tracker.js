const CONSENT_KEY = 'hayagriva:consent:v1';
const ATTRIBUTION_KEY = 'hayagriva:attribution:v1';
const MAX_CONSENT_AGE = 180 * 24 * 60 * 60 * 1000;
const ATTRIBUTION_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'gbraid', 'wbraid'];
const EVENT_PARAMETERS = new Set(['placement', 'service', 'form_name', 'lead_id', 'lead_channel', 'video_title', 'video_provider', 'video_percent', 'percent_scrolled', 'page_title', 'page_referrer']);

export function createTracker(env = {}, browser) {
  const ga4 = /^G-[A-Z0-9]+$/.test(env.VITE_GA4_MEASUREMENT_ID || '') ? env.VITE_GA4_MEASUREMENT_ID : '';
  const ads = /^AW-\d+$/.test(env.VITE_GOOGLE_ADS_ID || '') ? env.VITE_GOOGLE_ADS_ID : '';
  const clarity = /^[a-z0-9]{5,}$/i.test(env.VITE_CLARITY_PROJECT_ID || '') ? env.VITE_CLARITY_PROJECT_ID : '';
  const labels = {
    form: env.VITE_GOOGLE_ADS_FORM_LABEL,
    whatsapp: env.VITE_GOOGLE_ADS_WHATSAPP_LABEL,
    call: env.VITE_GOOGLE_ADS_CALL_LABEL,
  };
  const configured = Boolean(ga4 || ads || clarity);
  let consent = { analytics: false, ads: false, decided: false };
  let initialized = false;
  let googleLoaded = false;
  let clarityLoaded = false;
  const destinations = new Set();
  let page = null;
  let previousLocation = '';
  let lastPage = '';
  let attribution = null;

  function readConsent() {
    try {
      const stored = JSON.parse(browser?.localStorage.getItem(CONSENT_KEY) || 'null');
      if (stored && Date.now() - stored.timestamp < MAX_CONSENT_AGE && stored.timestamp <= Date.now()) {
        consent = { analytics: stored.analytics === true, ads: stored.ads === true, decided: true };
      }
    } catch { /* Browsing and contacting us still work when storage is unavailable. */ }
    return { ...consent };
  }

  function appendScript(id, src) {
    if (browser.document.getElementById(id)) return;
    const script = browser.document.createElement('script');
    script.id = id;
    script.src = src;
    script.async = true;
    browser.document.head.appendChild(script);
  }

  function measurementUrl() {
    const url = new URL(`${browser.location.origin}${browser.location.pathname}`);
    const params = new URLSearchParams(browser.location.search);
    ATTRIBUTION_PARAMS.forEach((key) => {
      const value = params.get(key);
      if (value && /^[A-Za-z0-9 _.-]{1,200}$/.test(value)) url.searchParams.set(key, value);
    });
    return url.href;
  }

  function consentValues() {
    return {
      analytics_storage: consent.analytics ? 'granted' : 'denied',
      ad_storage: consent.ads ? 'granted' : 'denied',
      ad_user_data: consent.ads ? 'granted' : 'denied',
      ad_personalization: consent.ads ? 'granted' : 'denied',
    };
  }

  function loadTags() {
    if (!browser || !configured) return;
    const ids = [consent.analytics && ga4, consent.ads && ads].filter(Boolean);
    if (ids.length && !googleLoaded) {
      googleLoaded = true;
      browser.gtag('js', new Date());
      appendScript('hayagriva-google-tag', `https://www.googletagmanager.com/gtag/js?id=${ids[0]}`);
    }
    ids.forEach((id) => {
      if (destinations.has(id)) return;
      destinations.add(id);
      browser.gtag('config', id, {
        send_page_view: false,
        ...(id === ga4 ? { page_location: measurementUrl() } : {}),
        ...(env.VITE_ANALYTICS_DEBUG === 'true' ? { debug_mode: true } : {}),
      });
    });
    if (clarity && consent.analytics && !clarityLoaded) {
      clarityLoaded = true;
      browser.clarity = browser.clarity || function (...args) { (browser.clarity.q = browser.clarity.q || []).push(args); };
      browser.clarity('consentv2', {
        analytics_Storage: 'granted', ad_Storage: consent.ads ? 'granted' : 'denied',
      });
      appendScript('hayagriva-clarity-tag', `https://www.clarity.ms/tag/${clarity}`);
    }
  }

  function init() {
    if (!browser || initialized) return;
    initialized = true;
    readConsent();
    browser.dataLayer = browser.dataLayer || [];
    browser.gtag = browser.gtag || function (...args) { browser.dataLayer.push(args); };
    browser.gtag('consent', 'default', consentValues());
    browser.gtag('set', 'ads_data_redaction', true);
    loadTags();
  }

  function getAttribution() {
    if (!browser) return {};
    if (attribution) return { ...attribution };
    try {
      const stored = JSON.parse(browser.sessionStorage.getItem(ATTRIBUTION_KEY) || 'null');
      if (stored && typeof stored === 'object') attribution = stored;
    } catch { /* Storage is optional. */ }
    if (!attribution) {
      const params = new URLSearchParams(browser.location.search);
      attribution = { landing_page: browser.location.pathname };
      ATTRIBUTION_PARAMS.forEach((key) => {
        const value = params.get(key);
        if (value) attribution[key] = value.slice(0, 200);
      });
    }
    if (consent.analytics || consent.ads) {
      try { browser.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution)); } catch { /* Optional. */ }
    }
    return { ...attribution };
  }

  function trackEvent(name, parameters = {}) {
    init();
    if (!browser || !consent.analytics) return;
    const safeParameters = Object.fromEntries(Object.entries(parameters).filter(([key]) => EVENT_PARAMETERS.has(key)));
    if (ga4) browser.gtag('event', name, {
      ...safeParameters,
      page_location: measurementUrl(),
      page_path: browser.location.pathname,
      send_to: ga4,
      transport_type: 'beacon',
    });
    if (clarityLoaded) browser.clarity('event', name);
  }

  function trackPageView(path, title) {
    init();
    page = { path, title };
    getAttribution();
    if (!browser || !consent.analytics || !ga4) return;
    const location = `${browser.location.origin}${path}`;
    const key = `${location}|${title}`;
    if (key === lastPage) return;
    lastPage = key;
    trackEvent('page_view', {
      page_title: title,
      page_referrer: previousLocation || (() => {
        try { return new URL(browser.document.referrer).origin; } catch { return ''; }
      })(),
    });
    previousLocation = location;
  }

  function setConsent(next) {
    init();
    consent = { analytics: next.analytics === true, ads: next.ads === true, decided: true };
    try { browser?.localStorage.setItem(CONSENT_KEY, JSON.stringify({ ...consent, timestamp: Date.now() })); } catch { /* Optional. */ }
    if (!browser) return;
    browser.gtag('consent', 'update', consentValues());
    if (clarityLoaded) browser.clarity('consentv2', {
      analytics_Storage: consent.analytics ? 'granted' : 'denied',
      ad_Storage: consent.ads ? 'granted' : 'denied',
    });
    loadTags();
    getAttribution();
    if (!consent.analytics) lastPage = '';
    if (page) trackPageView(page.path, page.title);
    browser.dispatchEvent(new browser.Event('hayagriva:consent-changed'));
  }

  function trackLead(channel, parameters = {}) {
    const names = { form: 'generate_lead', whatsapp: 'whatsapp_click', call: 'phone_click' };
    if (!names[channel]) return;
    trackEvent(names[channel], { ...parameters, lead_channel: channel });
    const label = labels[channel];
    if (!browser || !consent.ads || !ads || !/^[A-Za-z0-9_-]+$/.test(label || '')) return;
    browser.gtag('event', 'conversion', {
      send_to: `${ads}/${label}`,
      ...(parameters.lead_id ? { transaction_id: parameters.lead_id } : {}),
      transport_type: 'beacon',
    });
  }

  return { configured, init, getConsent: readConsent, setConsent, getAttribution, trackEvent, trackPageView, trackLead };
}
