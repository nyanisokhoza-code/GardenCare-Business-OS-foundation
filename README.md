# GardenCare Business OS

GitHub-ready foundation for a full GardenCare business platform.

## Included now

- Earth Tone dashboard
- GardenScan A + B + D measurement workflow
- Cross-check/confidence foundation
- Bag quantity calculation
- Cost-based pricing engine
- Supabase PostgreSQL schema
- Supabase Storage architecture
- Server-only AI provider adapter layer for OpenAI / Claude / Gemini
- Security and production roadmap
- Vercel/GitHub deployment structure

## Important

This is the **first production foundation**, not the finished platform. Real database persistence, authentication/RLS, media uploads, provider calls, financial integrations and role permissions are deliberately staged so we can implement and test each layer correctly rather than creating a fake localStorage demo.

## Source control

Use GitHub as the source of truth. Never commit `.env`, `.env.local`, API keys, bank credentials or provider secrets.


## v0.2 — real auth foundation

- Supabase browser/server clients using `@supabase/ssr`
- Cookie-based authentication
- Protected application routes
- Login/sign-out flow
- Role profile foundation
- TypeScript `@/*` path alias
- Server-only AI secret strategy
