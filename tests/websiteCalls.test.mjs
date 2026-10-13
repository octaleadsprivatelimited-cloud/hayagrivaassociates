import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { createWebsiteCalls } from '../src/analytics/websiteCalls.js';

function fixture() {
  const dom = new JSDOM(`<a id="number" href="tel:+919966139588"><svg><path /></svg><span>Call +91 9966139588</span></a>
    <a id="label" href="tel:9966139588"><svg></svg>Call us</a>
    <a id="secondary" href="tel:+919177887049">+91 91778 87049</a>
    <a id="whatsapp" href="https://wa.me/919966139588">WhatsApp +91 99661 39588</a>
    <p id="plain">Call +91 9966139588 or +91 91778 87049</p>`, { url: 'https://example.test' });
  const configs = [];
  dom.window.gtag = (...args) => configs.push(args);
  const calls = createWebsiteCalls(dom.window, 'AW-123/call-label');
  return { dom, calls, configs, document: dom.window.document };
}

test('forwarding updates phone text and call buttons, preserving icons, labels and WhatsApp', () => {
  const f = fixture(); f.calls.start(); f.calls.start();
  assert.equal(f.configs.length, 1);
  const svg = f.document.querySelector('#number svg');
  f.configs[0][2].phone_conversion_callback('+91 80000 12345', '+918000012345');
  assert.equal(f.document.querySelector('#number').href, 'tel:+918000012345');
  assert.equal(f.document.querySelector('#number span').textContent, 'Call +91 80000 12345');
  assert.equal(f.document.querySelector('#number svg'), svg);
  assert.equal(f.document.querySelector('#label').textContent, 'Call us');
  assert.equal(f.document.querySelector('#label').href, 'tel:+918000012345');
  assert.equal(f.document.querySelector('#secondary').href, 'tel:+919177887049');
  assert.equal(f.document.querySelector('#whatsapp').href, 'https://wa.me/919966139588');
  assert.equal(f.document.querySelector('#whatsapp').textContent, 'WhatsApp +91 99661 39588');
  assert.equal(f.document.querySelector('#plain').textContent, 'Call +91 80000 12345 or +91 91778 87049');
  f.calls.stop(); f.dom.window.close();
});

test('SPA content is updated and revocation restores originals, rejecting stale callbacks', async () => {
  const f = fixture(); f.calls.start();
  const callback = f.configs[0][2].phone_conversion_callback;
  callback('+91 80000 12345', '918000012345');
  const link = f.document.createElement('a'); link.href = 'tel:+919966139588'; link.textContent = '+91 99661 39588';
  f.document.body.appendChild(link);
  await new Promise(resolve => setTimeout(resolve, 0));
  assert.equal(link.href, 'tel:+918000012345');
  f.calls.stop();
  assert.equal(link.href, 'tel:+919966139588');
  assert.equal(link.textContent, '+91 99661 39588');
  assert.equal(f.document.querySelector('#number span').textContent, 'Call +91 9966139588');
  callback('+91 81111 12345', '918111112345');
  assert.equal(link.href, 'tel:+919966139588');
  f.dom.window.close();
});

test('invalid forwarding responses never change a phone destination', () => {
  const f = fixture(); f.calls.start();
  f.configs[0][2].phone_conversion_callback('<script>bad</script>', 'invalid');
  assert.equal(f.document.querySelector('#number').href, 'tel:+919966139588');
  f.calls.stop(); f.dom.window.close();
});
