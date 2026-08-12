# Landing-page SEO and conversion measurement

## What is tracked

The landing page pushes a `lead_action` object to `dataLayer` and emits a matching GA4 event for every revenue-intent action:

| Event | Meaning | Useful dimensions |
|---|---|---|
| `phone_click` | Visitor clicked a telephone link | `placement`, `page_path` |
| `whatsapp_click` | Visitor opened the prefilled WhatsApp conversation | `placement`, `page_path` |
| `form_submit_success` | Formspree accepted the lead | `appliance_type`, `placement`, `page_path` |
| `form_submit_error` | Lead form could not be delivered | `placement`, `page_path` |

Placements distinguish the hero, header, process section, pre-FAQ CTA, contact panel, footer, and mobile sticky bar. This makes it possible to identify which landing-page element produces leads instead of reporting only page views.

## GA4 setup after deployment

1. In GA4 Admin → Events, confirm the four events arrive in DebugView/Realtime.
2. Mark `phone_click`, `whatsapp_click`, and `form_submit_success` as key events.
3. Do not count `form_submit_error` as a conversion; alert when it is greater than zero.
4. Use `form_submit_success` as the strongest web lead. Treat phone and WhatsApp clicks as assisted leads until call/CRM outcomes are available.
5. Import the three key events into Google Ads only if bidding should optimize for them. Avoid importing both a GA4 and duplicate Ads conversion for the same form submission.

## Proof protocol

- Primary commercial KPI: qualified leads per 100 organic landing-page sessions.
- Secondary KPIs: organic phone clicks, WhatsApp clicks, accepted forms, GSC CTR, and median position for the homepage.
- Baseline: 28 complete days before deployment.
- Evaluation: days 8–35 after deployment; exclude deployment day, the next seven learning/indexing days, internal/test traffic, and GSC's latest incomplete days.
- Compare Czech organic traffic only, split by mobile and desktop. Keep paid, direct, branded, and non-branded traffic separate.
- A commercial win requires both a higher qualified-lead rate and no material loss of qualified organic impressions. Raw impressions alone are not success.
- For CTR, require at least 100 impressions per query group and a lift of at least 1 percentage point. Extend the window when volume is lower.
- For ranking, compare median daily position and require at least a three-position improvement; average position alone is too sensitive to query-mix changes.

## Rollback and triage

Investigate when homepage impressions fall more than 25% over 14 days versus the day-of-week-matched 28-day baseline, with at least 100 baseline impressions and a ranking decline of at least three positions.

Triage order: indexability/canonical → rendered title and H1 → query mix → device/country mix → Google-selected landing URL → SERP layout. Roll back the changed title/content only when relevant impressions and clicks both deteriorate; do not roll back because irrelevant impressions disappeared.
