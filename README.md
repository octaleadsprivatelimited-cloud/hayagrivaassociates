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
| Actual website calls | `dU9uCL3PwJsdEP6gkPJE`, primary, count one, 60 seconds, no monetary value |

These are public tag identifiers, stored in `src/config/tracking.js`. All can be overridden with the matching `VITE_*` variables in `.env.example`. Empty ID overrides disable that provider. Vite variables are embedded at build time: rebuild/redeploy after changing them. Never place passwords or private tokens in `VITE_*` variables.

The GA4 property uses India reporting time and INR. Enhanced measurement is off because this app sends its own page views and interaction events. `generate_lead`, `whatsapp_click` and `phone_click` are registered as key events; click key events count once per session. The event-scoped custom dimensions are Lead channel (`lead_channel`), Requested service (`service`) and CTA placement (`placement`).

Clarity cookies are off by default in its project settings; the site passes Consent V2 signals when a visitor chooses analytics/advertising cookies. Balanced masking is enabled and the complete inquiry form is explicitly marked with `data-clarity-mask="true"`. Google Ads enhanced conversions use explicit in-page code after the business accepted the customer data terms. Automatic field detection is disabled. After Formspree accepts an inquiry, the site sends normalized SHA-256 email/phone digests only with advertising consent, then clears the Google tag user-data setting. The cookie-choice version was updated so earlier consent does not automatically authorize the newly introduced matching; the banner describes hashed contact data before visitors choose. Raw form values are excluded from analytics events. Hashing failure never changes an accepted inquiry into a form error.

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

WhatsApp and telephone click events measure contact intent; a web link cannot verify that a message was sent or a customer was qualified. Actual website calls use a separate Google forwarding-number conversion with a 60-second threshold. Only consented, eligible ad visits receive a forwarding number; all other visits keep the business number. The callback changes both displayed phone text and telephone links, preserves icons and call labels, updates new SPA content and restores the original business number when Ads consent is revoked. WhatsApp and the secondary business phone are excluded from replacement. Confirmed inquiry submissions carry a unique lead ID plus first-visit UTM/GCLID/GBRAID/WBRAID attribution to the form provider. Session attribution storage is optional and works without browser storage. GA4 page URLs retain valid campaign parameters and exclude unrelated query parameters.

Optional analytics scripts load only after the visitor chooses the corresponding cookies. Essential-only visitors can still use every contact method. Cookie choices can be changed from the footer or `/privacy`. Events from disabled categories are not sent by this app; loaded tags receive updated consent signals.

## Inquiry delivery

The existing form provider is `https://formspree.io/f/mnnlrpva`. Override `VITE_CONTACT_ENDPOINT` to change it. The provider must confirm acceptance with JSON `{ "ok": true }`; a generic HTML fallback or HTTP error cannot create a lead event. Browser tests of provider failure and success used a local mock. With explicit approval, one clearly labelled Website Setup Test was then submitted on 13 October 2026 using the business contact details; the real Formspree endpoint confirmed acceptance. Inbox delivery has not been independently verified.

The optional Express SMTP backend is available with `npm run server`; it serves the built pages on port 4000 and exposes `/api/contact`. It requires real SMTP credentials in the process environment. The frontend does not use it by default. Vercel serves the static frontend and uses Formspree for inquiries.

## SEO audit and verification

The public site audit on 13 October 2026 found an `example.com` sitemap and robots directive, placeholder business schema, client-rendered content, and HTTP 404 responses for every tested deep page URL. The live homepage's mobile Lighthouse baseline was performance 82, accessibility 100, best practices 100 and SEO 100, with LCP 4.0 seconds. A basic Lighthouse SEO score did not catch the wrong sitemap or deployment routing.

Before the final compact-layout changes, the revised landing page's local mobile audit scored performance 94, accessibility 100, best practices 100 and SEO 100. After publication, the final production landing page scored performance 88, accessibility 100, best practices 100 and SEO 100 (FCP 1.8 seconds, LCP 2.7 seconds, total blocking time 300 milliseconds, zero layout shift). Lab measurements are run-specific and do not establish search rankings or field Core Web Vitals. The build check passed for 28 pages and 1,067 local links/media references. Twenty-one behavior tests cover consent, destinations, duplicate page views, attribution, input validation, failed inquiry responses, hashed conversions, consent revocation during hashing and forwarding-number replacement across page changes.

Heavy background videos now load on demand, page content is available in the initial HTML, and render-blocking remote fonts have been removed. Canonical URLs, social metadata and business details use the real site/business information. Google Maps review excerpts and the 4.9/5 from 30 reviews figure are a dated snapshot checked on 13 October 2026, with source links, rather than a live API feed or review-rich-result schema.

Implementation references: [GA4 SPA measurement](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications), [Google Ads website conversions](https://support.google.com/google-ads/answer/16560108), [Clarity Consent V2](https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-consent-api-v2).

## Mobile layout

The land surveying page uses WhatsApp green, call/inquiry blue and quote amber. Its bottom contact bar offers call, WhatsApp and quote actions. Mobile section gutters are reduced by about 90%, with compact images, cards and headings. Shared feedback scrolls automatically without a visible scrollbar. The From Question to Clarity accordion advances every 6.5 seconds while visible, pauses for interaction, and supports manual expansion, collapse and pause. Reduced-motion preferences disable automatic movement.

Production verification on 13 October 2026 confirmed HTTP 200, initial page content, titles and correct canonical URLs for all 28 public routes; sitemap and robots no longer reference a placeholder domain. An unknown route returns HTTP 404. All 36 image, video, CSS and JavaScript assets referenced by the production HTML returned HTTP 200. GA4 Realtime received page views. Google Tag Assistant connected to both G-S9QQT7D17T and AW-18492952702 and showed the WhatsApp event and Google Ads conversion hit after an actual link click. Clarity showed live users; its processed dashboard was still pending. The inquiry provider accepted the one approved setup test; email delivery and a processed form conversion were not independently confirmed.

## Campaign measurement setup

GA4 property `558662545` is linked to Google Ads customer `206-145-8223` for reporting, with personalized advertising and Ads-user Analytics editing disabled. Google Ads auto-tagging and call reporting are enabled. `Calls from ads` is the default call conversion action and uses a 60-second threshold. Confirmed forms and connected calls are primary bidding goals; WhatsApp/phone clicks stay secondary and the Contacts category is excluded from account-default goals. Do not import the same form event from GA4 as another primary conversion.

The verified Search Console property is `https://www.hayagrivaassociates.com/`. Its sitemap was resubmitted on 13 October 2026 and reported Success with 28 discovered pages. The Search Console property is also linked to the matching GA4 website stream for organic search reporting. Organization disclosure, direct funding source and the no-EU-political-ads confirmation were submitted with the business owner’s approval. Google still processes fresh tag diagnostics and conversion reports. Real call attribution requires eligible ad traffic and a qualifying call; setup tests do not prove paid lead delivery.

Qualified or won lead tracking requires actual business/CRM outcomes. Inquiry IDs and campaign attribution are already attached to form records, but this site does not invent sales outcomes or automatically import offline conversions.

Additional references: [website call forwarding](https://support.google.com/google-ads/answer/6095883), [enhanced conversions with Google tag](https://support.google.com/google-ads/answer/13258081), [GA4–Ads reporting link](https://support.google.com/analytics/answer/9379420).

The additional owner-approved Ads Tracking Setup Test was accepted by the live form provider. Tag Assistant showed `generate_lead`, the direct form conversion label, its unique transaction ID, and non-empty email/phone hashes in the Ads hit. The following tag message cleared `user_data` to null. The website call configuration used the expected conversion label, business phone, callback and timeout. These checks confirm live tag transmission; processed Ads attribution, connected calls and inbox delivery remain separate checks.

All three responsive search ads use the campaign landing page. Six service/contact sitelinks, four factual callouts and a service-catalog snippet were added for review. Following the owner's latest instruction, the Organization account type is retained; no Individual switch or billing transfer was submitted. Google Payments shows Hayagriva Associates as an Organization with its organization name verified on 13 October 2026. The advertiser-verification page lists the Dun & Bradstreet information as provided. A later same-day Google Ads policy check reported no account issues and no ad issues; the earlier Dun & Bradstreet/affiliation recommendation was no longer displayed.

Google Ads customer `206-145-8223` is already linked to Octaleads MCC `506-089-4911`, with a link date of 7 October 2026 and Owner set to No. No duplicate manager link or ownership change was made.

On 13 October 2026, Campaign #1 was changed from Maximize conversions to Maximize clicks as a startup strategy while the new conversion actions await attributed traffic. The existing average daily budget remains ₹27.86, and the saved maximum CPC bid limit is ₹27.86. The campaign's conversion-tracking-incomplete warning cleared after the change; Google reports Enabled and Eligible (Learning), with Bid strategy learning. The account-default form and connected-call goals remain selected. Review actual lead quality and cost before returning to conversion-based bidding; do not promote contact clicks or import duplicate form conversions to manufacture conversion history.

A further consented live click check confirmed GA4 page-view and WhatsApp event hits, plus the expected Google Ads labels for WhatsApp (`KHzzCOLtupsdEP6gkPJE`) and phone clicks (`61aHCOXtupsdEP6gkPJE`). GA4 Realtime independently received two page views, one `phone_click` and one `whatsapp_click`; both contact events appeared as key events. All five enabled form/call/contact conversion actions subsequently showed Awaiting conversions, with no Unverified, Misconfigured or Tag inactive action in the table. Google's status explanation allows up to 48 hours for newly created actions. Connected-call attribution still needs an eligible ad visit and a qualifying call of at least 60 seconds. Campaign delivery must be assessed separately: today's dashboard still showed zero impressions/clicks at the last check, and setup tests do not establish paid traffic, completed WhatsApp conversations or attributed leads.
