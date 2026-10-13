import test from 'node:test';
import assert from 'node:assert/strict';
import {validateInquiry,submitInquiry} from '../src/lib/inquiries.js';
const form={name:'Test Inquiry',email:'qa@example.test',phone:'+91 00000 00000',service:'DGPS Land Survey',message:'Test only'};
test('inquiry validation rejects whitespace-only names, malformed emails and phone punctuation',()=>{
 assert.equal(validateInquiry(form),null);
 assert.match(validateInquiry({...form,name:' '}),/required/);
 assert.match(validateInquiry({...form,email:'two words@example.test'}),/email/);
 assert.match(validateInquiry({...form,phone:'-------'}),/phone/);
 assert.match(validateInquiry({...form,phone:'1234567890123456'}),/phone/);
});
test('confirmed form provider response preserves lead attribution in the request',async()=>{
 let submitted;
 const payload={...form,lead_id:'qa-lead',landing_page:'/land-surveying',utm_source:'google',gclid:'test-id'};
 await submitInquiry('/api/contact',payload,async(url,options)=>{submitted={url,options};return {ok:true,json:async()=>({ok:true})}});
 assert.equal(submitted.options.method,'POST');assert.equal(submitted.options.headers.Accept,'application/json');assert.deepEqual(JSON.parse(submitted.options.body),payload);
});
test('HTTP errors, unconfirmed responses, HTML fallbacks and network failures cannot be treated as accepted leads',async()=>{
 for (const response of [{ok:false,json:async()=>({ok:true})},{ok:true,json:async()=>({error:'not accepted'})},{ok:true,json:async()=>{throw Error('HTML fallback')}}]) {
  await assert.rejects(submitInquiry('/api/contact',form,async()=>response));
 }
 await assert.rejects(submitInquiry('/api/contact',form,async()=>{throw Error('offline')}));
});
