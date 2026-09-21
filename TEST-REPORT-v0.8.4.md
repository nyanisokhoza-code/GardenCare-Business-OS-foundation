# GardenCare Business OS v0.8.4 — Quote Recalculation Test

## Root cause
The quote editor inferred a manual selling-price override from a difference between a stored quote total and a newly calculated total. Old/stale quote data could therefore open with manual override active even when the user had not intentionally overridden the price. In addition, area changes updated the worker recommendation hint but did not automatically replace the existing worker count.

## Fix
- Quote editor starts in live-price mode.
- Manual price mode is entered only when the user edits Selling Price.
- Area changes auto-apply the configured worker recommendation until Workers is manually edited.
- “Use recommended workers” and “Use recommended price” reset manual overrides.

## Static / syntax verification
- JavaScript extracted from index.html and checked with `node --check`: PASS.
- Event wiring verified for quote input/change handlers: PASS.
- Worker recommendation reset action present: PASS.
- Scroll fix inherited from v0.8.3: preserved.

## Calculation spot checks
Using the configured defaults (R50 internal bag cost, R180/hour labour, R30/L fuel, 12 km/L, R150 equipment, 5% overhead, 30% markup):
- 1500 m², 40 m²/bag, 10% wastage, 1 reserve, 5 workers × 3 hours → 43 bags and R6,825.00 recommended selling price.
- 16 m², 4 m²/bag, 10% wastage, 1 reserve, auto 1 worker × 3 hours → 6 bags, R300 material cost, R1,039.50 true cost and R1,351.35 recommended selling price.
- Add 20 km one way with return, R30/L and 12 km/L → 40 km, 3.33 L, R100 travel, R1,144.50 true cost and R1,487.85 recommended selling price.

Full Chromium interaction could not be executed in this environment because local browser navigation is blocked by the container organization policy; the JavaScript syntax and calculation/event logic were verified directly.
