# GardenCare Business OS — Architecture

## Production target

- **Frontend + server routes:** Next.js on Vercel
- **Database:** Supabase PostgreSQL
- **Authentication:** Supabase Auth
- **Media:** Supabase Storage (photos/videos)
- **AI:** server-side adapters for OpenAI, Anthropic Claude and Google Gemini
- **Source control:** GitHub
- **Secrets:** Vercel environment variables / provider secret stores
- **SMS/bank notifications:** integration adapter; SMS is not the accounting source of truth

## GardenScan

The production workflow is:

Capture media → AI vision analysis → known measurement → phone AR → optional GPS boundary → cross-check → confidence score → human confirmation → material calculation → pricing engine → quote.

A normal image does not contain reliable real-world scale. The production system therefore requires at least two independent evidence sources for high-confidence quoting.

## Security

Never place OpenAI, Anthropic, Gemini, Supabase secret keys, bank credentials or SMS-provider secrets in browser code or GitHub.

Use public Supabase configuration only where appropriate, enforce Row Level Security, and keep elevated secrets in server-side functions.

## AI safety

AI can recommend:
- preliminary garden assessment
- measurement interpretation
- material quantity estimate
- quote wording
- candidate/training insights
- business analytics

AI cannot silently:
- approve a hire
- change pricing rules
- change financial records
- make payments
- mark a job complete
- override a human-confirmed measurement
