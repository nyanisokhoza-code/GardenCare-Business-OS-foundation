# GardenCare Business OS — Local GUI v0.5

Open `index.html` directly in a modern browser. No Supabase project, API key, Node.js server or internet connection is required for the local GUI.

## Smart Job
Use **Start New Job**. Enter the customer and property once, capture multiple measurement sources, confirm the working area, calculate materials with wastage and reserve, calculate internal pricing, then automatically create linked quote/job/invoice records.

## Customer privacy
The local prototype separates customer-facing information from internal pricing in the workflow. Production must enforce this separation with authenticated roles and database/API permissions, not only UI hiding.

## Measurement
The GUI accepts camera photos, multiple images, video, manual/AR results, map results and AI estimates. It calculates a consensus from numeric sources. Real AR/vision APIs are intentionally deferred until secure production integrations are added.

## Data
Local records are stored in browser localStorage. Use Owner/Developer → Export backup to save a JSON backup.

## Production later
The preserved Next.js/Supabase files are the production foundation. Later connect database, object storage, authentication, Vercel, GitHub CI/CD and server-side OpenAI/Claude/Gemini adapters.
