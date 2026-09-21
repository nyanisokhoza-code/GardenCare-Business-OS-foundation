# GardenCare v0.8.8 Test Report

## Static checks
- JavaScript extracted from `index.html`: `node --check` passed.
- Costing route is present in navigation and render map.
- Mobile CSS collapses costing cards and checklist to one column.

## Formula checks
- 100 km at 12 L/100 km = 12.00 L.
- At R30/L, 12.00 L = R360.00 fuel.
- Team is clamped to a maximum of 3 in costing calculations.
- Break-even = direct job cost + allocated monthly business cost.
- Target selling price uses gross margin: `break-even / (1 - margin%)`.

Example validation:
- Area 200 m², 40 m²/bag, 10% wastage, 1 reserve => 7 bags.
- 3 workers × 3 h × R100/h => R900 internal crew cost.
- 50 km one-way, return => 100 km.
- 12 L/100 km => 12 L; at R30/L => R360 fuel.
- Wear R0.75/km => R75 vehicle wear.
- R6,000 monthly overhead + R4,000 director monthly cost / 10 jobs => R1,000 allocation/job.
- With the example direct costs, break-even = R3,035 and 30% gross-margin target price = R4,335.71.

## Browser automation limitation
The environment blocks direct local `file://` navigation; full click-through still requires the user's Chrome test.
