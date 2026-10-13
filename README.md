# Hayagriva Associates website

React/Vite website deployed to Vercel. The campaign landing page is `/land-surveying`, with services, on-demand videos, Google Maps review excerpts, a project inquiry form, and WhatsApp/telephone links. Feedback uses the same verified reviewer names throughout the site. On mobile, compact cards loop automatically without a visible scrollbar; visitors can pause them, and reduced-motion preferences disable the animation.

## Run and validate

```sh
npm ci
npm run dev
npm test
npm run build
npm run check:site
npm run preview
```

The build renders HTML for all 28 public routes, including page-specific metadata, plus a noindex 404 document. `vercel.json` enables clean URLs. Unknown production routes return 404 rather than the homepage. The sitemap and robots.txt are generated from `src/seo/routes.json` and use `https://www.hayagrivaassociates.com` by default. Set `VITE_SITE_URL` when changing the domain. `npm run check:site` verifies rendered headings, metadata, sitemap coverage, anchors and local link/media targets.

## Business tracking accounts

Configured on 13 October 2026 under `associateshayagriva@gmail.com`:

| Platform | Identifier / action |
| --- | --- |
| [GA4](https://analytics.google.com/analytics/web/#/a411745375p558662545/admin) | Account `411745375`, property `558662545`, stream `16119688257`, measurement `G-S9QQT7D17T` |
| [Microsoft Clarity](https://clarity.microsoft.com/projects/view/yx2pp3zxlq/settings) | Project `yx2pp3zxlq` |
| [Google Ads conversions](https://ads.google.com/aw/conversions?ocid=8582370926) | Google tag `AW-18492952702` |
| Form inquiry | `vi2lCN_tupsdEP6gkPJE`, primary, count one, no monetary value |
| WhatsApp click | `KHzzCOLtupsdEP6gkPJE`, secondary, count one, no monetary value |
| Phone click | `61aHCOXtupsdEP6gkPJE`, secondary, count one, no monetary value |

These are public tag identifiers, stored in `src/config/tracking.js`. All can be overridden with the matching `VITE_*` variables in `.env.example`. Empty ID overrides disable that provider. Vite variables are embedded at build time: rebuild/redeploy after changing them. Never place passwords or private tokens in `VITE_*` variables.

The GA4 property uses India reporting time and INR. Enhanced measurement is off because this app sends its own page views and interaction events. `generate_lead`, `whatsapp_click` and `phone_click` are registered as key events; click key events count once per session. The event-scoped custom dimensions are Lead channel (`lead_channel`), Requested service (`service`) and CTA placement (`placement`).

Clarity cookies are off by default in its project settings; the site passes Consent V2 signals when a visitor chooses analytics/advertising cookies. Balanced masking is enabled and the complete inquiry form is explicitly marked with `data-clarity-mask="true"`. Google Ads enhanced conversions are not enabled. Form field values are excluded from analytics event parameters.

## Events and lead attribution

| Event | Trigger |
| --- | --- |
| `page_view` | First page and completed route changes; duplicate mounts suppressed |
| `whatsapp_click` / `phone_click` | Actual click on a WhatsApp/telephone link anywhere on the site |
| `email_click` | Email link click |
| `lead_form_start` | First interaction with a form |
| `lead_form_submit` | A valid submission starts |
| `generate_lead` | Form provider returns HTTP success and JSON `{ "ok": true }` |
| `lead_form_error` | Provider rejection, timeout or network error |
| `video_start`, `video_progress`, `video_complete` | On-demand video playback, 25/50/75% milestones and completion |
| `scroll` | Visitor reaches 90% of a page |

WhatsApp and telephone events measure contact intent; a web link cannot verify that a message was sent, a call connected, or a customer was qualified. Confirmed inquiry submissions carry a unique lead ID plus first-visit UTM/GCLID/GBRAID/WBRAID attribution to the form provider. Session attribution storage is optional and works without browser storage. GA4 page URLs retain valid campaign parameters and exclude unrelated query parameters.

Optional analytics scripts load only after the visitor chooses the corresponding cookies. Essential-only visitors can still use every contact method. Cookie choices can be changed from the footer or `/privacy`. Events from disabled categories are not sent by this app; loaded tags receive updated consent signals.

## Inquiry delivery

The existing form provider is `https://formspree.io/f/mnnlrpva`. Override `VITE_CONTACT_ENDPOINT` to change it. The provider must confirm acceptance with JSON `{ "ok": true }`; a generic HTML fallback or HTTP error cannot create a lead event. Browser tests of provider failure and success used a local mock. With explicit approval, one clearly labelled Website Setup Test was then submitted on 13 October 2026 using the business contact details; the real Formspree endpoint confirmed acceptance. Inbox delivery has not been independently verified.

The optional Express SMTP backend is available with `npm run server`; it serves the built pages on port 4000 and exposes `/api/contact`. It requires real SMTP credentials in the process environment. The frontend does not use it by default. Vercel serves the static frontend and uses Formspree for inquiries.

## SEO audit and verification

The public site audit on 13 October 2026 found an `example.com` sitemap and robots directive, placeholder business schema, client-rendered content, and HTTP 404 responses for every tested deep page URL. The live homepage's mobile Lighthouse baseline was performance 82, accessibility 100, best practices 100 and SEO 100, with LCP 4.0 seconds. A basic Lighthouse SEO score did not catch the wrong sitemap or deployment routing.

The revised landing page's local mobile audit scored performance 94, accessibility 100, best practices 100 and SEO 100 (LCP 3.0 seconds, zero blocking time and zero layout shift). Lab measurements are run-specific and do not establish search rankings or field Core Web Vitals. The build check passed for 28 pages and 1,067 local links/media references. Twelve behavior tests cover consent, destinations, duplicate page views, attribution, input validation and failed inquiry responses.

Heavy background videos now load on demand, page content is available in the initial HTML, and render-blocking remote fonts have been removed. Canonical URLs, social metadata and business details use the real site/business information. Google Maps review excerpts and the 4.9/5 from 30 reviews figure are a dated snapshot checked on 13 October 2026, with source links, rather than a live API feed or review-rich-result schema.

Implementation references: [GA4 SPA measurement](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications), [Google Ads website conversions](https://support.google.com/google-ads/answer/16560108), [Clarity Consent V2](https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-consent-api-v2).

## Mobile layout

The land surveying page uses WhatsApp green, call/inquiry blue and quote amber. Its bottom contact bar offers call, WhatsApp and quote actions. Mobile section gutters are reduced by about 90%, with compact images, cards and headings. Shared feedback scrolls automatically without a visible scrollbar. The From Question to Clarity accordion advances every 6.5 seconds while visible, pauses for interaction, and supports manual expansion, collapse and pause. Reduced-motion preferences disable automatic movement.
