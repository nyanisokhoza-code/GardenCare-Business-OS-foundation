# GardenCare Business OS v0.8.5 — Test Report

## Static / syntax
- Self-contained `index.html` JavaScript extracted and checked with `node --check`: PASS.
- Version marker: 0.8.5.

## Fuel maths verification
Using the requested interpretation:
- total distance = 100 km
- consumption = 12 L/100 km
- fuel price = R30/L
- litres = 100 × 12 ÷ 100 = 12 L
- fuel cost = 12 × R30 = R360
Result: PASS.

A 50 km one-way return trip produces 100 km total distance and therefore the same R360 fuel figure at 12 L/100 km and R30/L.

## Quote workflow verification
Static contract checks confirm:
- Break-even / True cost selectable card exists.
- Recommended price selectable card exists.
- Final agreed price selectable card exists.
- Selecting a card calls the shared quote persistence routine.
- Price history records previous price, new price, date/time and pricing basis.
- Linked non-completed job receives the saved customer price while retaining recalculated operational inputs.

## Payment workflow verification
Static contract checks confirm:
- Record payment appears on invoices with an outstanding balance.
- Mark paid appears on invoices with an outstanding balance.
- Mark paid writes the remaining balance to the payment ledger and sets the invoice to Paid.
- Partial payment recalculates invoice status automatically.
- Entered payments are capped to the remaining balance.

## Browser note
The final behavioural check should still be performed in the user's Chrome environment because this is a local `file://` application and no full browser automation runtime is available in this environment.
