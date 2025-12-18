# Deployment Guide

This project is built with **Next.js 14**, making it compatible with all modern frontend hosting platforms.

## Recommended: Vercel (Zero Config)

The creators of Next.js offer the best support.

1. **Push to GitHub**: ensure your code is in a repository.
2. **Import to Vercel**:
    - Go to <https://vercel.com/new>
    - Select your repository.
    - Framework Preset: `Next.js` (default).
3. **Environment Variables**:
    - If you are using real Stripe keys, add them in the "Environment Variables" section:
      - `STRIPE_SECRET_KEY`
      - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
      - `ADMIN_PASSWORD` (if you changed the auth logic)
4. **Deploy**: Click "Deploy".

## Alternative: Netlify

1. **Import from Git**.
2. **Build Command**: `npm run build`.
3. **Publish Directory**: `.next` (Netlify usually detects this via the Next.js plugin).

## Manual / Docker

You can build a standalone container:

1. Update `next.config.mjs` with `output: "standalone"`.
2. Run `npm run build`.
3. Run `node .next/standalone/server.js`.
