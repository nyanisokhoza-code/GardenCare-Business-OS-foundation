# GardenCare Business OS v0.8.6 — Test Report

## Static / syntax checks
- Single-file `index.html` JavaScript parsed successfully with Node syntax check.
- Version label: 0.8.6.

## Labour logic checks
- 50 m² → 1 worker.
- 51 m² → 2 workers.
- 120 m² → 2 workers.
- 121 m² → 3 workers.
- 200 m² → 3 workers.
- 1500 m² → 3 workers (current crew cap).
- New Job area input now triggers worker auto-follow until manual override.
- “Use recommended workers” restores automatic mode.

## Customer edit checks
- Save path persists the edited customer record.
- Edit path updates linked quote customer name.
- Edit path updates linked job customer name/address.
- Edit path updates linked invoice name/phone/email/address.
- Save path calls `closeModal()` before refreshing the view.

## Regression retained
- Fuel formula remains total km × L/100 km ÷ 100 × R/L.
- Quote full recalculation and final-agreed-price workflow retained.
- Payment status workflow retained.
- Long drawer scrolling retained.
