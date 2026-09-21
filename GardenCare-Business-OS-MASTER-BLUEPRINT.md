# GardenCare Business OS — Master Blueprint

**Status:** Master working specification  
**Purpose:** Single source of truth for GardenCare requirements, completed work, gaps, fixes and future architecture.  
**Design:** Modern Nature + AI Copilot + mobile/field-first.  
**Current architecture:** Local-first prototype, designed for later database, storage, authentication and API integration.

---

## 1. Core Vision

GardenCare must operate like a teammate, not a collection of disconnected pages.

The primary workflow is:

**Start New Job → Customer → Property → Garden Capture → Measurement → Materials → Labour → Travel → Pricing → Quote → Acceptance → Job → Before/During/After → Clean-up → Completion → Invoice → Payment → Profitability → History**

Information should be entered once and reused throughout the workflow.

---

## 2. Design Direction

### Selected design
**Modern Nature + AI Copilot**

The interface should be:
- premium
- modern
- natural
- professional
- senior-friendly
- mobile-first
- clean and easy to understand

### Visual language
- forest green
- olive/natural green
- warm beige/sand
- natural brown
- cream/white
- subtle amber/gold
- garden imagery
- rounded cards
- subtle shadows
- clear typography
- large touch controls

Avoid bland/old-school admin styling.

---

## 3. Mobile-First

Must work on:
- smartphone
- tablet
- laptop
- desktop

Mobile requirements:
- large buttons
- readable text
- large inputs
- no intentional page-wide horizontal overflow
- scrollable tables inside their containers
- easy camera/video capture
- proper mobile navigation

---

## 4. Mobile Drawer

Required:
- ☰ opens
- X closes
- tap outside closes immediately
- phone Back closes drawer first
- Escape closes on desktop
- selecting a menu item closes drawer
- Back must not unexpectedly exit the application while the drawer is open

**Status:** Navigation reliability foundation added; actual rendered UI still needs browser testing.

---

## 5. Contextual `ⓘ` Help

Every major section and appropriate field needs an `ⓘ` explanation covering:
- what it does
- what to enter
- why it is required
- what the system calculates
- what a result means

Applies to:
- Dashboard
- Customers
- Properties
- Smart Job
- GardenScan
- Materials
- Labour
- Travel
- Pricing
- Quotes
- Jobs
- Invoices
- Employees
- Recruitment
- Training
- Financials
- Settings

**Status:** Partial; needs a reusable help component and complete coverage.

---

# 6. ⚡ ONE-CLICK SMART JOB

This is the central feature.

```text
START NEW JOB
   ↓
CUSTOMER
   ↓
PROPERTY
   ↓
GARDEN CAPTURE
   ├─ Photos
   ├─ Multiple photos
   ├─ Video
   ├─ AR/phone measurement
   ├─ GPS
   ├─ Map/satellite boundary
   ├─ Manual measurement
   ├─ Existing media
   └─ AI vision
   ↓
CONFIRM M²
   ↓
MATERIALS
   ↓
LABOUR
   ↓
TRAVEL / DIESEL
   ↓
PRICING
   ↓
QUOTE
   ↓
CUSTOMER ACCEPTS
   ↓
JOB
   ↓
BEFORE → DURING → AFTER
   ↓
CLEAN-UP
   ↓
COMPLETE
   ↓
INVOICE
   ↓
PAYMENT
   ↓
FINANCIALS / PROFITABILITY
```

**Status:** Operational engine foundations exist, but the current GUI still needs to be fully connected into one seamless workspace.

---

# 7. Central Job Workspace

Each job should contain:

```text
Job
├── Customer
├── Property
├── Service
├── Measurements
├── Measurement Evidence
├── Photos
├── Video
├── Materials
├── Labour
├── Travel
├── Equipment
├── Consumables
├── Overheads
├── Internal Cost
├── Pricing
├── Quote
├── Variations
├── Customer Approval
├── Schedule
├── Before Evidence
├── During Evidence
├── After Evidence
├── Completion Checklist
├── Invoice
├── Payments
├── Profitability
└── Activity Timeline
```

This model should eventually become the database/API model.

---

# 8. Customer Management

Required:
- create customer
- view customer
- **edit customer**
- phone
- email
- preferred contact method
- property relationship
- access information
- notes
- service history
- quote history
- invoice/payment history

### Customer portal

Customer can submit:
- name
- contact details
- address
- requested service
- garden description
- photos
- video
- access information
- preferred appointment information

### Customer must never see
- markup
- profit
- supplier cost
- labour cost
- equipment cost
- overhead
- internal pricing rules
- internal financials
- employee financial information

**Status:** Customer/edit foundation exists; actual GUI and persistence need verification.

---

# 9. Properties

Customer and property must be separate records.

A customer can have multiple properties.

Property stores:
- address
- GPS/location
- access
- garden measurements
- photos
- jobs
- quotes
- invoices
- service history
- notes

**Status:** Required; needs complete connection.

---

# 10. GardenScan / Measurement

Required evidence sources:
1. Camera
2. Multiple photos
3. Walkaround video
4. AR/phone measurement where supported
5. GPS
6. Map/satellite boundary
7. Manual dimensions
8. Existing media
9. AI vision

A normal photograph alone cannot reliably determine real-world m².

The system should combine evidence and show:
- estimate
- source measurements
- disagreement
- confidence
- recommendation

Human confirms the final measurement before it becomes official for quoting.

**Status:** Existing foundation has manual dimensions, optional AR/AI inputs and basic confidence; real camera/video/AR/GPS/map/AI processing remains.

---

# 11. Materials

Calculation:

```text
Area ÷ Coverage = Raw bags
Raw bags + Wastage = Adjusted
Adjusted → Round up
Rounded + Reserve = TAKE TO SITE
```

Example:

```text
100 m²
40 m²/bag
Raw = 2.5
10% wastage
Rounded = 3
Reserve = 1
Take to site = 4
```

Settings must control:
- bag cost
- coverage
- wastage
- reserve
- product
- application rules

**Status:** Recommendation engine foundation exists; full GUI integration remains.

---

# 12. Labour

User must be able to choose:
- number of workers
- hours
- labour rate

System recommends workforce based on:
- m²
- service type
- workload
- condition
- equipment

Example configurable rules:

```text
0–50 m²       → 1 worker
51–120 m²     → 2 workers
121–250 m²    → 3 workers
251–400 m²    → 4 workers
```

User can override the recommendation.

Settings must control the thresholds/rules.

**Status:** Recommendation engine foundation exists; visible controls need verification.

---

# 13. Diesel / Travel

User must be able to enter:
- distance in km
- diesel price/L
- vehicle km/L
- return trip yes/no
- additional/multiple trips

Example:

```text
40 km one-way
Return = yes
12 km/L
R30/L

40 × 2 ÷ 12 × R30
= R200
```

Future:
- address/GPS automatic distance
- manual override

**Status:** Calculation foundation exists; full UI connection must be tested.

---

# 14. Equipment / Consumables / Overhead

Pricing must account for:
- equipment hire
- equipment usage
- consumables
- waste/disposal
- overhead
- vehicle operating cost

Vehicle cost should eventually support an operating-cost-per-km, not fuel only.

**Status:** Partial.

---

# 15. Pricing Engine

Required outputs:

### Minimum Price
Lowest safe selling price.

### Recommended Price
Normal profitable price.

### Premium Price
For larger/more demanding jobs.

Do not silently cap a price at a market ceiling if doing so creates a loss.

Inputs:
- material
- markup
- labour
- travel
- equipment
- consumables
- overhead
- target margin
- service type
- complexity

Monthly maintenance must be cost-driven. R2,300 is a market reference, not an automatic price.

**Status:** Basic foundation exists; minimum/recommended/premium logic still needs completion.

---

# 16. Quotes

Statuses:

```text
DRAFT
SENT
VIEWED
ACCEPTED
DECLINED
EXPIRED
CANCELLED
```

Accepted quote should automatically create a job.

### Edit Quote
Must allow:
- customer/property
- service
- area
- materials
- labour
- travel
- equipment
- call-out
- discount
- selling price
- notes
- terms
- expiry
- recalculate

Editing selling price must not destroy underlying cost records.

**Status:** v0.8.2 local GUI now includes full quote recalculation for area/materials/labour/travel/equipment/pricing; Windows/Chrome user acceptance testing remains.

---

# 17. Call-Out / Assessment

Dedicated call-out workflow:
- fee
- distance
- assessment purpose
- refundable/not
- credit to final job or not

Default call-out fee must be configurable in Settings.

### WhatsApp message

System generates a copyable customer message such as:

> Hi [Customer Name], thank you for contacting GardenCare. We can arrange a site visit to assess the garden and determine the work required.
>
> Call-out & assessment: R350
>
> This includes the site assessment and preparation of the appropriate quotation.
>
> Please let us know which day/time would be convenient for you.

**Status:** Message/calculation foundation exists; dedicated UI needs verification.

---

# 18. Job Variations

If extra work is discovered:

```text
Original Quote
   ↓
Variation
   ↓
Customer Approval
   ↓
Updated Job/Invoice
```

Employee should be able to:
- photograph issue
- describe issue
- submit additional work
- request approval

Customer approves/rejects.

**Status:** Foundation exists; customer approval UI remains.

---

# 19. Before / During / After

### Before
- overview photo
- lawn photos
- problem areas
- damage
- access
- optional walkaround video

### During
- materials delivered
- work started
- progress photos
- additional issues

### After
- final photos
- clean-up
- tools removed
- equipment removed
- waste removed
- customer inspection
- sign-off

---

# 20. Clean-Up

Completion checks:
- lawn cleaned
- paths cleaned
- excess material removed
- tools removed
- equipment removed
- waste removed
- property/gate secured

Job should not normally be marked complete until required checks are done.

Authorised override:
**Complete with Exceptions**

**Status:** Foundation; full UI remains.

---

# 21. Invoice

Flow:

```text
Accepted Quote
   ↓
Job
   ↓
Completed
   ↓
Invoice
```

Invoice pulls:
- customer
- property
- service
- materials
- labour
- approved variations
- call-out
- discounts
- tax/VAT configuration
- total

Statuses:
- unpaid
- partially paid
- paid
- overdue

**Status:** Not fully connected.

---

# 22. Payments

Required:
- amount due
- amount paid
- balance
- date
- method
- reference
- partial payment
- proof of payment

Payment updates financials.

**Status:** Not fully connected.

---

# 23. Internal Profitability

Internal only.

```text
Selling price
- Material cost
- Labour
- Diesel
- Equipment
- Other costs
= True cost
= Gross profit
= Margin
```

Customers and normal employees must not see this.

**Status:** Planned/not fully implemented.

---

# 24. Customer / Property History

Customer:
- properties
- jobs
- quotes
- invoices
- payments
- outstanding
- revenue
- last service
- activity

Property:
- measurements
- photos
- jobs
- services
- quotes
- invoices
- access
- history

**Status:** Required; not fully connected.

---

# 25. Employee Field View

Employees should see only what they need:

```text
JOB
Customer
Address

BEFORE
☐ Photos
☐ Site condition

WORK
☐ Materials delivered
☐ Approved work

AFTER
☐ Photos
☐ Clean-up
☐ Customer inspection

COMPLETE JOB
```

They must not see:
- profit
- markup
- supplier cost
- salaries
- bank information
- internal financials

**Status:** Planned.

---

# 26. Recruitment / Training

Beginner course:
1. Introduction to Garden Care
2. Lawn Basics
3. Lawn Maintenance
4. Weed Identification & Management
5. Garden Maintenance
6. Tools & Equipment
7. Health & Safety
8. Professional Conduct
9. Customer Service
10. Quality Standards

Workflow:

```text
Applicant
→ Free Course
→ Questionnaire
→ Score
→ Pass/Fail
→ Practical Assessment
→ Human Hiring Decision
→ Employee
→ Skills
→ Certificate
→ Job Assignment
```

Passing the questionnaire alone must not qualify a candidate.

**Status:** Foundation.

---

# 27. Client Education Rule

Client-facing material must NOT teach residents detailed DIY garden care.

Client content should sell/explain:
- problem
- professional solution
- service value
- result
- booking

Detailed training belongs to staff.

---

# 28. Marketing Package

Planned:
- 4–6 page service brochure
- A5 flyer
- pull-up banner
- WhatsApp flyer
- before/after case study
- Garden Assessment Card
- social media templates
- QR codes

QR destinations can include:
- WhatsApp enquiry
- website/quote
- booking
- assessment

**Status:** Planned/partial.

---

# 29. AI

AI must be useful, not decorative.

### AI Recruitment Assistant
Analyse results; human decides hiring.

### AI Garden Assessment
Analyse visible lawn issues from photos/video; preliminary until human confirmation.

### AI Pricing Assistant
Warn about low quotes and explain cost drivers.

### AI Business Manager
Analyse revenue, costs, jobs, workforce and business health.

### AI Workforce Planning
Estimate capacity/hiring needs.

### AI Customer Assistant
Collect enquiries/photos/location; never invent prices.

### AI Quotation/Report Writer

### AI Financial Monitoring

### AI Employee Knowledge Assistant

Providers planned:
- OpenAI
- Anthropic Claude
- Google Gemini

API keys must remain server-side.

**Status:** Foundation only; live providers not connected.

---

# 30. Financial Business OS

Eventually track:
- revenue
- expenses
- employee payments
- suppliers
- equipment
- transport
- invoices
- payments
- bank transactions
- profitability

SMS may be a notification source, but should not be the accounting source of truth.

Preferred:

```text
Bank/transaction source
→ ingestion
→ matching/reconciliation
→ financial ledger
→ dashboard
```

**Status:** Planned.

---

# 31. Workforce Intelligence

Eventually calculate:
- workload
- employee capacity
- job demand
- hours
- staffing needs
- hiring recommendations

Human remains the decision maker.

**Status:** Planned.

---

# 32. Weather

Eventually:
- forecast
- rain alerts
- treatment warnings
- scheduling warnings
- suggested alternative dates

System should recommend, not silently reschedule.

**Status:** Planned.

---

# 33. Inventory / Stock

Track:
- lawn dressing
- bags
- fertilizer
- weed products
- PPE
- gloves
- fuel
- consumables

Low stock warning.

Purchase list.

Supplier management.

**Status:** Planned.

---

# 34. Recurring Maintenance

Support:
- weekly
- fortnightly
- monthly
- custom

Automatically create upcoming jobs.

**Status:** Planned.

---

# 35. Global Search

Search:
- customers
- properties
- jobs
- quotes
- invoices
- employees

**Status:** Foundation/planned UI.

---

# 36. Notifications / Action Centre

Examples:

```text
🔴 Invoice overdue
🟠 Quote awaiting response
🟠 Measurement needs confirmation
🟢 New customer enquiry
🟢 Employee completed assessment
```

**Status:** Foundation/planned UI.

---

# 37. Smart Job Drafts

Required:
- auto-save
- last saved indicator
- Save & Continue Later
- draft recovery
- accidental-exit protection

Example:

```text
John Smith — Garden Assessment
80% complete

[Continue Job]
[Discard Draft]
```

**Status:** Foundation; full UI needs verification.

---

# 38. Activity Timeline

Example:

```text
14:05 Assessment started
14:07 Customer created
14:10 Photos uploaded
14:12 Measurement completed
14:13 101 m² confirmed
14:14 4 bags recommended
14:16 Quote generated
14:18 Quote sent
```

Later:
- accepted
- job created
- completed
- invoice generated
- payment received

**Status:** Foundation.

---

# 39. Settings — IMPORTANT BUSINESS CONTROLS

Important changes must be editable in Settings, not buried in code.

### Materials
- bag cost
- coverage
- wastage %
- reserve bags
- product/application rules

### Labour
- hourly rate
- worker recommendation thresholds
- default hours

### Travel
- diesel price/L
- vehicle km/L
- return trip default
- operating cost/km

### Equipment
- hire cost
- usage cost

### Pricing
- material markup
- target margin
- minimum price
- premium rules
- monthly market reference

### Call-Out
- default fee
- refundable rule
- credit-to-job rule

### Training
- pass percentage
- attempts
- modules
- questions
- practical requirements

### Business
- business information
- currency
- branding
- version

### Integrations
- AI providers
- storage
- database
- messaging

### System
- feature flags
- roles
- permissions
- audit logs

**Status:** Settings foundation exists; complete UI, permissions and audit logging remain.

---

# 40. Audit Logs

Important changes should record:

```text
Setting
Old value
New value
Changed by
Date/time
Reason
```

Example:

```text
Material markup
30% → 35%
Changed by Owner
```

**Status:** Missing/not fully implemented.

---

# 41. Roles / Permissions

Proposed:

### Developer/Admin
Full configuration.

### Owner
Business-wide access.

### Manager
Operations/pricing.

### Recruiter
Applicants/training.

### Employee
Assigned jobs/training.

### Customer
Own information only.

Sensitive financial/business information must ultimately be protected by authenticated backend/database permissions, not just hidden from the UI.

**Status:** Not production implemented.

---

# 42. Security

Never expose:
- API keys
- bank credentials
- supplier secrets
- internal profit
- employee sensitive information

Production:

```text
Browser
→ authenticated API
→ permission checks
→ database/storage
→ AI providers
```

**Status:** Production security not implemented yet.

---

# 43. Database / Storage

Current:
- localStorage
- local-first
- no Supabase dependency required for GUI

Future:
- database
- online media storage
- authentication
- secure APIs
- synchronization
- backups

Frontend should use service/repository adapters so the backend can replace localStorage without rebuilding the UI.

**Status:** Future integration.

---

# 44. Offline-First

Eventually:

```text
Capture
→ local save
→ no internet
→ continue working
→ internet returns
→ sync
→ synced
```

Indicators:
- Saved locally
- Syncing
- Synced

**Status:** Planned.

---

# 45. Business Services

## Once-Off Lawn Restoration
- assessment
- weed removal
- preparation
- lawn dressing/top dressing
- manure/compost
- problem areas
- finishing
- clean-up

## Monthly Maintenance
- grass cutting
- edging
- weed removal
- basic trimming/pruning
- garden-bed maintenance
- clean-up

Potential packages:
- Essential
- Standard
- Premium

Pricing must be cost-driven.

---

# 46. Current Business Inputs

Known planning values:
- Garden Master lawn dressing: approximately R50/bag procurement cost
- 30 dm³ bag
- Diesel planning figure: approximately R30/L
- supplier approximately 20 minutes / 20 km away
- no own machine/equipment yet; hire must be considered
- monthly market reference approximately R2,300

Markup example:
- R50 cost + 30% markup = R65 selling price

Margin example:
- R50 cost at 30% gross margin = approximately R71.43 selling price

These are configurable business inputs, not universal pricing rules.

---

# 47. Markup vs Margin

### Markup
`Cost × (1 + markup)`

### Gross Margin
`Cost ÷ (1 - margin)`

The Settings UI must label these clearly.

---

# 48. Build History

### v0.4
Functional local GUI foundation:
- dashboard
- GardenScan
- m²
- bags
- wastage
- restoration pricing
- monthly maintenance pricing
- travel/fuel
- labour
- equipment
- markup
- customers
- quotes
- jobs
- employees
- recruitment
- training
- expenses
- reports
- AI foundation
- developer settings
- localStorage
- JSON export/reset

### v0.4.1
Responsive/mobile:
- drawer
- responsive layouts
- touch controls
- phone-friendly forms
- table containment

### v0.6
Modern Nature redesign:
- nature visual language
- premium cards
- AI Copilot direction
- modern navigation
- Smart Job direction

### v0.7
Smart Job Operations foundations:
- diesel calculation
- labour recommendation
- materials recommendation
- reserve bags
- job IDs/storage
- activity
- variations
- completion checklist
- call-out WhatsApp generator
- Settings foundations
- navigation reliability foundation


### v0.8.2
Full quote recalculation:
- Edit Quote mirrors the Smart Job cost model
- m² changes recalculate bag quantity and material cost
- workers/hours/rate recalculate labour
- km/trips/return/fuel inputs recalculate travel
- equipment/consumables/disposal recalculate internal cost
- overhead/markup recalculate recommended selling price
- manual selling-price override remains possible
- saving synchronizes the linked non-completed job


### v0.8.3
Scrollable edit/preview panel reliability:
- Edit Quote, Edit Invoice, Invoice Preview and other long side panels have independent vertical scrolling
- desktop mouse-wheel / trackpad scrolling supported inside panels
- mobile touch/momentum scrolling supported
- modal header remains visible; footer no longer overlays body content
- invoice preview supports contained horizontal table scrolling on narrow phones

---

# 49. Explicitly Requested Fixes and Current Status

| Request | Current status |
|---|---|
| Back closes mobile menu | Patch/foundation added; test required |
| Tap outside closes menu | Patch/foundation added; test required |
| Diesel distance input | Engine added; GUI verification required |
| Choose number of labourers | Engine added; GUI verification required |
| m² labour recommendation | Foundation added |
| Material recommendation | Foundation added |
| Safety reserve bags | Foundation added |
| Edit quote | Foundation; GUI verification required |
| Quote completion/status | Foundation |
| Before pictures | Foundation; capture UI needs completion |
| After pictures | Foundation; capture UI needs completion |
| Clean-up checklist | Foundation |
| Job completion | Foundation |
| Call-out fee | Foundation |
| WhatsApp call-out message | Foundation |
| Edit existing customer | Requested; GUI/persistence must be verified |
| One-click workflow | Central design/foundation; needs full end-to-end connection |
| Customer self-service link | Planned |
| Customer/internal data separation | Design requirement; production permissions still required |
| All pages have `ⓘ` | Partial; needs completion |
| Save & Continue Later | Foundation; UI needs completion |
| Activity timeline | Foundation |
| Notifications | Foundation/planned UI |
| Global search | Foundation/planned UI |

---

# 50. Important Missing / Next Backlog

## Highest priority
1. Fully connect Smart Job into one workspace.
2. Test/fix mobile drawer in actual browser.
3. Complete customer edit UI.
4. Complete quote edit UI.
5. Connect diesel distance controls.
6. Connect labour selector/recommendation.
7. Connect material recommendation.
8. Complete camera/video capture.
9. Complete before/during/after checklist UI.
10. Generate invoice from completed job.
11. Record payments.
12. Customer/property history.
13. Customer/internal permissions.

## Next
14. Measurement consensus.
15. AR/GPS/map integrations.
16. AI vision.
17. Customer variation approval.
18. Call-out UI.
19. Search.
20. Notifications.
21. Draft recovery.
22. Activity timeline UI.
23. Inventory.
24. Suppliers.
25. Recurring jobs.
26. Weather.
27. Profitability.
28. Financial ledger.
29. Reports/business intelligence.

## Production
30. Database.
31. Authentication.
32. RBAC.
33. Secure API.
34. Online storage.
35. Offline sync.
36. AI provider connections.
37. Audit logs.
38. Backups.
39. Automated notifications.
40. Bank/transaction integration.

---

# 51. Build Rules

1. Do not restart the architecture unnecessarily.
2. Do not replace the project with a tiny HTML mockup.
3. Preserve existing functionality.
4. Put functionality into the central Smart Job model.
5. Important business values belong in Settings.
6. Customers never see internal costs/profits/markups.
7. Employees only see information required for their role.
8. Never put API keys in frontend files.
9. AI measurements require human confirmation.
10. AI cannot make final hiring/payment decisions without authorised human approval.
11. Mobile-first.
12. Save work locally immediately.
13. Use `ⓘ` explanations.
14. Small changes = small patches.
15. Major milestones = complete ZIP.
16. Test actual UI behaviour before marking features complete.
17. Connect database/storage after the local-first workflow is stable.
18. Update this blueprint after major changes.

---

# 52. Definition of Done

A feature is not complete because a button exists.

It is complete when:

```text
UI
↓
Input
↓
Validation
↓
Calculation / Business Logic
↓
Persistent Save
↓
Connected Record
↓
Next Workflow Step
↓
Correct Permission
↓
Mobile Tested
```

Example: Edit Customer is only complete when the existing record loads, can be changed, validates, saves, updates related Smart Job data, respects permissions, persists correctly and works on mobile.

---

# 53. Target Architecture

```text
                    GARDENCARE BUSINESS OS
                              |
       ┌──────────────────────┼──────────────────────┐
       |                      |                      |
   OPERATIONS             GARDEN INTELLIGENCE    WORKFORCE
       |                      |                      |
 Customers                 GardenScan            Recruitment
 Properties                Camera                Training
 Leads                     Video                 Assessments
 Smart Jobs                AR                    Employees
 Quotes                    GPS                   Skills
 Invoices                  Maps                  Performance
 Payments                  AI
 Variations                Materials
                           Measurements
       |
       ├── BUSINESS / FINANCIALS
       |   Pricing
       |   Expenses
       |   Suppliers
       |   Equipment
       |   Payroll
       |   Transactions
       |   Reconciliation
       |   Profitability
       |
       ├── INTELLIGENCE
       |   AI Assistant
       |   Business AI
       |   Workforce AI
       |   Financial AI
       |   Customer AI
       |
       ├── COMMUNICATION
       |   WhatsApp
       |   Notifications
       |   Customer Portal
       |   Reminders
       |
       └── ADMIN / DEVELOPER
           Settings
           Roles
           Permissions
           Audit Logs
           Integrations
           Feature Flags
           Versioning
```

---

# 54. Recommended Build Order

## Phase 1 — Smart Job Core
Customer → Property → Measurement → Materials → Labour → Travel → Pricing → Quote

## Phase 2 — Job Execution
Acceptance → Schedule → Before/During/After → Variations → Clean-up → Completion

## Phase 3 — Money
Invoice → Payment → Ledger → Profitability

## Phase 4 — Customer
Customer portal → history → property history → WhatsApp

## Phase 5 — Garden Intelligence
Camera → video → AR → GPS → map → AI → measurement consensus

## Phase 6 — Workforce
Recruitment → training → assessment → employee field app → capacity

## Phase 7 — Business Intelligence
Reports → inventory → suppliers → recurring jobs → weather → hiring intelligence

## Phase 8 — Production
Database → storage → authentication → RBAC → secure APIs → AI providers → offline sync → audit → financial integrations

---

# 55. Immediate Next Build

The next build should make this entire sequence work as one operational flow:

```text
New Job
↓
Customer / Edit Customer
↓
Property
↓
Garden Capture
↓
Confirm m²
↓
Recommended Materials
↓
Recommended Labour
↓
Choose Labour
↓
Enter Distance
↓
Diesel Calculation
↓
Equipment / Consumables
↓
Minimum / Recommended / Premium Pricing
↓
Generate Quote
↓
Edit Quote
↓
Send / WhatsApp
↓
Accept
↓
Create Job
↓
Before Checklist + Photos
↓
During Checklist
↓
Variations
↓
After Photos
↓
Clean-up
↓
Customer Sign-off
↓
Complete
↓
Invoice
↓
Payment
↓
Profitability
```

**This document is the GardenCare master blueprint and should be updated whenever a major requirement is added, changed, fixed or completed.**

---

# 56. v0.8 Fast Local GUI + Invoicing Milestone — 17 September 2026

A new local-first UI build was created to address lag, unresponsive controls and difficult invoice editing.

## Runtime/UI change

- the active local GUI is now a self-contained `index.html`
- the main application shell is built once
- only the active workspace is rerendered during navigation
- event handling is delegated instead of repeatedly attaching large sets of listeners after every render
- invoice totals update locally instead of forcing a whole-application redraw while typing
- selected GardenScan files are previewed without storing large image/video payloads in localStorage
- previous `gardencare_os_v06` records are migrated when v0.8 first runs

## Invoicing now available in the local GUI

- create invoice directly or from a job
- edit customer, address, invoice dates, service and status
- editable invoice rows
- numeric row calculation: quantity × unit price
- `TBD (to be discussed)` rows excluded from total
- `—` rows excluded from total
- discounts and optional VAT
- preview client-facing invoice
- download A4 PDF without external libraries
- Print / Save as PDF
- mobile Web Share file support where the browser permits it
- copy client message
- WhatsApp/email shortcuts
- record full or partial payments
- balance/status calculation
- bank and payment details configurable in Settings

## Verified invoice case

- 68 bags × R70.00 = R4,760.00
- Labour = TBD (to be discussed)
- Travel = —
- Equipment / tools = —
- Garden restoration service = —
- Bank = ABSA
- Account = 9383 1400 33

## Remaining production boundary

v0.8 improves and connects the local-first operational GUI. It does not change the blueprint requirement for later authenticated database/storage, secure API integrations, server-side permissions, audit logs, backups and accounting/bank integration.

---

## v0.8.1 Implementation Update — Visible Smart Job Cost Calculators

The Start New Job workspace now exposes and live-calculates the pricing inputs required by Sections 11–15 of this blueprint:
- materials: area, coverage, wastage, reserve bags, bag cost
- labour: workers, hours, hourly rate
- travel/fuel: petrol/diesel selection, one-way km, trip count, return trip, fuel price/L, km/L, optional vehicle cost/km
- equipment / consumables / waste-disposal
- overhead and markup

The interface displays bags to site, material cost, labour cost, total travel km, fuel litres, fuel cost, travel cost, true cost, markup and recommended selling price, updating automatically as fields change. Job and quote records retain the estimate breakdown.

**Status:** Implemented in local-first v0.8.1; full end-to-end browser/device acceptance testing remains required before production deployment.



## v0.8.4 — Quote recalculation reliability
- Fixed stale/manual selling-price state preventing expected live quote updates.
- Edit Quote now opens with calculated selling price following the live recommendation.
- Area changes refresh bags/materials and workforce recommendation.
- Worker count remains manually overridable, with a reset-to-recommended action.
- Travel/fuel inputs remain directly editable and feed pricing immediately.


## v0.8.6 implementation note — labour/customer editing
- New Job labour recommendation now follows confirmed area live, with the current operational crew capped at 3.
- Planning defaults: 0–50 m² = 1 worker, 51–120 m² = 2 workers, 121+ m² = 3 workers. User can override and restore the recommendation.
- Customer edits now save, close the drawer, and synchronize linked quote/job/invoice customer details.


## v0.8.7 implementation note — public flyer + QR marketing
- Added a standalone mobile-first `flyer.html` landing page for potential clients.
- Page presents once-off lawn restoration and monthly garden maintenance using the approved flyer wording.
- Added direct WhatsApp, Call and request-a-quote actions.
- Added reusable QR code pointing to the stable public GitHub Pages flyer URL.
- Added a branded printable QR card.
- Added `Marketing / QR` inside GardenCare for preview, download and copy/share actions.
- The QR page is designed so artwork/content can be updated later without changing the printed QR destination.
- Public hosting remains required for customers to use the QR from their phones.


---

# v0.8.8 — Technical Costing / Break-even Addendum

GardenCare now includes an internal Costing / Break-even workspace. It separates direct job costs from customer-facing prices and supports a maximum three-person crew, internal worker hourly cost, director/owner time, fuel in L/100 km, vehicle wear/maintenance per km, equipment, consumables, disposal, other direct costs, monthly fixed overhead, monthly director/owner cost, expected jobs per month, break-even per job and target gross-margin price.

The break-even formula is:

`Direct job cost + ((monthly fixed overhead + monthly director/owner cost) / expected jobs per month)`

The target selling price uses gross margin:

`Break-even / (1 - target margin)`

A GardenCare restoration protocol checklist and configurable signature-product categories are included as internal operating controls. Customer-facing documents must continue to hide these internal cost assumptions.
