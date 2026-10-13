import test from 'node:test';
import assert from 'node:assert/strict';
import { webcrypto, createHash } from 'node:crypto';
import { createTracker } from '../src/analytics/tracker.js';
import { normalizeEmail, normalizePhone } from '../src/analytics/enhancedConversions.js';

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

test('legacy cookie choices cannot authorize newly introduced enhanced matching',()=>{
 const f=fixture({VITE_GOOGLE_ADS_ENHANCED_CONVERSIONS:'true'});
 f.browser.localStorage.setItem('hayagriva:consent:v1',JSON.stringify({analytics:true,ads:true,timestamp:Date.now()}));
 f.tracker.init();assert.equal(f.scripts.length,0);assert.deepEqual(f.tracker.getConsent(),{analytics:false,ads:false,decided:false});
 f.tracker.setConsent({analytics:true,ads:true});assert.equal(f.tracker.getConsent().ads,true);
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

test('enhanced conversions normalize and hash identifiers only for consented accepted forms', async () => {
 const f=fixture({VITE_GOOGLE_ADS_ENHANCED_CONVERSIONS:'true'});f.browser.crypto=webcrypto;
 f.tracker.setConsent({analytics:true,ads:true});
 await f.tracker.trackLead('form',{lead_id:'accepted-123'},{email:' Ravi.Teja@Gmail.com ',phone:'099661 39588',name:'Private Name'});
 const userData=f.browser.dataLayer.find(e=>e[0]==='set' && e[1]==='user_data' && e[2]);
 assert.deepEqual(userData[2],{
   sha256_email_address:createHash('sha256').update('raviteja@gmail.com').digest('hex'),
   sha256_phone_number:createHash('sha256').update('+919966139588').digest('hex'),
 });
 assert.deepEqual(Array.from(f.browser.dataLayer.at(-1)),['set','user_data',null]);
 assert.equal(f.events().find(e=>e[1]==='generate_lead')[2].user_data,undefined);
 assert.equal(JSON.stringify(f.browser.dataLayer).includes('Ravi.Teja'),false);
 assert.equal(JSON.stringify(f.browser.dataLayer).includes('Private Name'),false);
 const count=f.browser.dataLayer.filter(e=>e[1]==='user_data').length;
 await f.tracker.trackLead('whatsapp',{}, {email:'private@example.test'});
 assert.equal(f.browser.dataLayer.filter(e=>e[1]==='user_data').length,count);
 assert.equal(normalizeEmail(' A.B@example.com '),'a.b@example.com');
 assert.equal(normalizePhone('+44 7911 123456'),'+447911123456');
 assert.equal(normalizePhone('1234'),'');
});

test('disabled enhanced conversions and analytics-only consent never hash contact details', async () => {
 for (const settings of [{flag:'false',ads:true},{flag:'true',ads:false}]) {
   const f=fixture({VITE_GOOGLE_ADS_ENHANCED_CONVERSIONS:settings.flag});
   f.browser.crypto={subtle:{digest(){throw Error('Must not hash');}}};
   f.tracker.setConsent({analytics:true,ads:settings.ads});
   await f.tracker.trackLead('form',{}, {email:'private@example.test'});
   assert.equal(f.browser.dataLayer.some(e=>e[1]==='user_data'),false);
 }
});

test('revocation during hashing suppresses pending Ads conversion, including after re-consent', async () => {
 const f=fixture({VITE_GOOGLE_ADS_ENHANCED_CONVERSIONS:'true'});
 let finish;
 f.browser.crypto={subtle:{digest:()=>new Promise(resolve=>{finish=resolve;})}};
 f.tracker.setConsent({analytics:true,ads:true});
 const pending=f.tracker.trackLead('form',{}, {email:'private@example.test'});
 f.tracker.setConsent({analytics:true,ads:false});f.tracker.setConsent({analytics:true,ads:true});
 finish(new Uint8Array(32).buffer);await pending;
 assert.equal(f.events().some(e=>e[1]==='conversion'),false);
 assert.equal(f.browser.dataLayer.some(e=>e[1]==='user_data'),false);
});

test('unavailable hashing retains ordinary accepted-form conversion measurement', async () => {
 const f=fixture({VITE_GOOGLE_ADS_ENHANCED_CONVERSIONS:'true'});f.tracker.setConsent({ads:true});
 await f.tracker.trackLead('form',{lead_id:'accepted'},{email:'private@example.test'});
 assert.equal(f.events()[0][2].transaction_id,'accepted');
 assert.equal(f.browser.dataLayer.some(e=>e[1]==='user_data'),false);
});

test('website call configuration is consent gated and restarted after revocation',()=>{
 const f=fixture({VITE_GOOGLE_ADS_WEBSITE_CALL_LABEL:'website_call_label'});
 const configs=()=>f.browser.dataLayer.filter(e=>e[0]==='config' && e[1]==='AW-123456789/website_call_label');
 f.tracker.setConsent({analytics:true});assert.equal(configs().length,0);
 f.tracker.setConsent({analytics:true,ads:true});assert.equal(configs().length,1);
 f.tracker.setConsent({analytics:true,ads:true});assert.equal(configs().length,1);
 f.tracker.setConsent({analytics:true,ads:false});f.tracker.setConsent({analytics:true,ads:true});assert.equal(configs().length,2);
});
