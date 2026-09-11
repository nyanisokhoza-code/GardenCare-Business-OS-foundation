# Local Setup

1. Install Node.js 20+.
2. Copy `.env.example` to `.env.local`.
3. Create a Supabase project.
4. Add the Supabase URL and publishable key to `.env.local`.
5. Run `supabase/schema.sql` in the Supabase SQL editor after reviewing it.
6. Install dependencies:
   `npm install`
7. Start:
   `npm run dev`
8. Open:
   `http://localhost:3000`

## AI keys

Add provider keys only to `.env.local` for local development and to Vercel Environment Variables for production.

Never commit `.env.local`.

## Deployment

Push the repository to GitHub, import it into Vercel, configure the same environment variables in Vercel, then deploy.

Do not put secret keys into `NEXT_PUBLIC_*` variables.

## Version compatibility

This foundation is pinned to Next.js 14.2.x, so authentication middleware uses `middleware.ts` and the synchronous `cookies()` API expected by that version.
