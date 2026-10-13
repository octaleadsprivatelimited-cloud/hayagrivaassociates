import test from 'node:test';
import assert from 'node:assert/strict';
import { createTracker } from '../src/analytics/tracker.js';

const env = { VITE_GA4_MEASUREMENT_ID:'G-TEST12345', VITE_GOOGLE_ADS_ID:'AW-123456789', VITE_CLARITY_PROJECT_ID:'testclarity', VITE_GOOGLE_ADS_FORM_LABEL:'form_label', VITE_GOOGLE_ADS_WHATSAPP_LABEL:'wa_label', VITE_GOOGLE_ADS_CALL_LABEL:'call_label' };
function fixture(overrides = {}) {
 const scripts=[];
 const storage=()=>{const map=new Map(); return {getItem:k=>map.get(k)||null,setItem:(k,v)=>map.set(k,v),removeItem:k=>map.delete(k)};};
 const browser={location:{origin:'https://example.test',pathname:'/land-surveying',search:'?utm_source=google&utm_campaign=survey&gclid=abc123&email=private@example.test'},localStorage:storage(),sessionStorage:storage(),Event:class {},dispatchEvent(){},document:{referrer:'https://google.com/search?q=private',head:{appendChild:s=>scripts.push(s)},createElement:()=>({}),getElementById:id=>scripts.find(s=>s.id===id)}};
 const tracker=createTracker({...env,...overrides},browser);
 const events=()=>browser.dataLayer.filter(([command])=>command==='event');
 return {browser,tracker,scripts,events};
}

test('no optional script, event or attribution storage before consent',()=>{
 const f=fixture(); f.tracker.init(); f.tracker.trackPageView('/land-surveying','Survey'); f.tracker.trackLead('whatsapp');
 assert.equal(f.scripts.length,0);assert.equal(f.events().length,0);assert.equal(f.browser.sessionStorage.getItem('hayagriva:attribution:v1'),null);
 assert.equal(f.browser.dataLayer[0][2].ad_user_data,'denied');
});

test('analytics consent loads GA4 and Clarity once and excludes Ads',()=>{
 const f=fixture();f.tracker.trackPageView('/land-surveying','Survey');f.tracker.setConsent({analytics:true,ads:false});f.tracker.init();f.tracker.setConsent({analytics:true,ads:false});
 assert.equal(f.scripts.length,2); assert.equal(f.events().filter(e=>e[1]==='page_view').length,1);
 assert.equal(f.browser.dataLayer.some(e=>e[0]==='config' && e[1]===env.VITE_GOOGLE_ADS_ID),false);
 assert.deepEqual(f.browser.clarity.q[0],['consentv2',{analytics_Storage:'granted',ad_Storage:'denied'}]);
});

test('Ads-only consent sends only the correct optional conversion',()=>{
 const f=fixture();f.tracker.setConsent({ads:true});f.tracker.trackLead('whatsapp',{placement:'hero'});
 assert.equal(f.scripts.length,1);assert.match(f.scripts[0].src,/AW-123456789/);
 assert.deepEqual(f.events().map(e=>e[1]),['conversion']);assert.equal(f.events()[0][2].send_to,'AW-123456789/wa_label');
});

test('page views deduplicate StrictMode, update routes and retain campaign attribution',()=>{
 const f=fixture();f.tracker.setConsent({analytics:true});f.tracker.trackPageView('/land-surveying','Survey');f.tracker.trackPageView('/land-surveying','Survey');
 f.browser.location.pathname='/contact';f.browser.location.search='';f.tracker.trackPageView('/contact','Contact');
 const views=f.events().filter(e=>e[1]==='page_view');assert.equal(views.length,2);
 assert.match(views[0][2].page_location,/utm_source=google/);assert.equal(views[0][2].page_location.includes('private'),false);
 assert.equal(views[1][2].page_referrer,'https://example.test/land-surveying');assert.equal(views[1][2].page_path,'/contact');
 assert.equal(f.tracker.getAttribution().utm_source,'google');assert.equal(f.tracker.getAttribution().landing_page,'/land-surveying');
});

test('form confirmation generates the correct conversion, with no personal field values',()=>{
 const f=fixture();f.tracker.setConsent({analytics:true,ads:true});f.tracker.trackEvent('lead_form_error',{form_name:'contact'});
 assert.equal(f.events().some(e=>e[1]==='conversion'),false);
 f.tracker.trackLead('form',{lead_id:'lead-test-uuid',service:'DGPS Land Survey',email:'private@example.test',phone:'0000000000',message:'Private message'});
 const lead=f.events().find(e=>e[1]==='generate_lead');assert.equal(lead[2].lead_channel,'form');assert.equal(lead[2].email,undefined);assert.equal(lead[2].phone,undefined);assert.equal(lead[2].message,undefined);
 const conversion=f.events().find(e=>e[1]==='conversion');assert.equal(conversion[2].send_to,'AW-123456789/form_label');assert.equal(conversion[2].transaction_id,'lead-test-uuid');
});

test('revoking consent prevents subsequent custom events and conversions',()=>{
 const f=fixture();f.tracker.setConsent({analytics:true,ads:true});f.tracker.setConsent({analytics:false,ads:false});const count=f.events().length;
 f.tracker.trackLead('form',{lead_id:'revoked'});f.tracker.trackPageView('/contact','Contact');assert.equal(f.events().length,count);
 assert.deepEqual(f.browser.clarity.q.at(-1),['consentv2',{analytics_Storage:'denied',ad_Storage:'denied'}]);
});

test('missing and invalid account identifiers or labels cannot load tracking or send Ads conversions',()=>{
 const f=fixture({VITE_GA4_MEASUREMENT_ID:'broken',VITE_GOOGLE_ADS_ID:'<script>',VITE_CLARITY_PROJECT_ID:'!'});assert.equal(f.tracker.configured,false);f.tracker.setConsent({analytics:true,ads:true});assert.equal(f.scripts.length,0);
 const g=fixture({VITE_GOOGLE_ADS_CALL_LABEL:''});g.tracker.setConsent({analytics:true,ads:true});g.tracker.trackLead('call');assert.equal(g.events().some(e=>e[1]==='conversion'),false);
});

test('blocked browser storage does not break consent, tracking or attribution',()=>{
 const f=fixture();f.browser.localStorage={getItem(){throw Error('blocked')},setItem(){throw Error('blocked')}};f.browser.sessionStorage=f.browser.localStorage;
 assert.doesNotThrow(()=>{f.tracker.init();f.tracker.setConsent({analytics:true});f.tracker.trackLead('call');f.tracker.getAttribution();});
 assert.equal(f.events().filter(e=>e[1]==='phone_click').length,1);
});

test('Clarity-only installations receive custom events without needing a GA4 property',()=>{
 const f=fixture({VITE_GA4_MEASUREMENT_ID:'',VITE_GOOGLE_ADS_ID:''});f.tracker.setConsent({analytics:true});f.tracker.trackLead('whatsapp');assert.equal(f.scripts.length,1);assert.deepEqual(f.browser.clarity.q.at(-1),['event','whatsapp_click']);
});
