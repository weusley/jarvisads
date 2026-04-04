# JARVIS ADS — Setup Guide

## Stack
- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Supabase (Auth + DB + Edge Functions + Realtime)
- **Payments**: Stripe
- **Deploy**: Vercel (frontend) + Supabase (backend)

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.example .env
```
Fill in your `.env`:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
VITE_APP_URL=https://jarvisads.com
```

### 3. Set up Supabase
1. Create project at https://supabase.com
2. Go to SQL Editor
3. Run `supabase/migrations/001_initial_schema.sql`
4. Enable Realtime for: `chat_messages`, `projects`, `campaigns`

### 4. Deploy Edge Functions
```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link project
supabase link --project-ref your-project-ref

# Deploy all functions
supabase functions deploy chat-with-ai
supabase functions deploy stripe-webhook
supabase functions deploy jarvis-intelligence-orchestrator
supabase functions deploy analyze-product
supabase functions deploy publish-facebook-ads
supabase functions deploy publish-google-ads
supabase functions deploy generate-copy
supabase functions deploy generate-images
supabase functions deploy generate-video
supabase functions deploy generate-voiceover
supabase functions deploy fetch-competitor-ads
supabase functions deploy affiliate-track
```

### 5. Set Edge Function Secrets
```bash
supabase secrets set STRIPE_SECRET_KEY=sk_live_xxx
supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_xxx
supabase secrets set STRIPE_STARTER_PRICE_ID=price_xxx
supabase secrets set STRIPE_PRO_PRICE_ID=price_xxx
supabase secrets set STRIPE_AGENCY_PRICE_ID=price_xxx
```

### 6. Set up Stripe
1. Create products and prices in Stripe Dashboard
2. Add webhook endpoint: `https://your-project.supabase.co/functions/v1/stripe-webhook`
3. Subscribe to events:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`

### 7. Configure Admin APIs
1. Create your admin account (first signup)
2. In Supabase SQL Editor, set your user as admin:
```sql
UPDATE users SET role = 'admin' WHERE email = 'your@email.com';
```
3. Login and go to `/admin/intelligence-apis`
4. Add all internal API keys (SEMrush, SimilarWeb, ElevenLabs, etc.)

### 8. Run development server
```bash
npm run dev
```

### 9. Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```
Set environment variables in Vercel Dashboard (same as .env).

---

## 📁 Project Structure
```
jarvis-ads/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── JarvisOrb.tsx      # Animated orb + wordmark
│   │   ├── JarvisChat.tsx     # Floating chat panel
│   │   ├── LanguageSwitcher.tsx
│   │   └── ProtectedRoute.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx    # Auth state management
│   ├── layouts/
│   │   ├── UserLayout.tsx     # Dashboard layout
│   │   └── AdminLayout.tsx    # Admin layout
│   ├── lib/
│   │   ├── supabase.ts        # Supabase client + types
│   │   └── utils.ts           # Helpers + plan config
│   ├── locales/               # i18n translations
│   │   ├── pt-BR.json
│   │   ├── en.json
│   │   └── es.json
│   └── pages/
│       ├── Landing.tsx        # Public landing page
│       ├── Login.tsx
│       ├── Signup.tsx
│       ├── dashboard/         # User pages
│       └── admin/             # Admin pages
├── supabase/
│   ├── migrations/
│   │   └── 001_initial_schema.sql
│   └── functions/             # Edge functions
│       ├── chat-with-ai/
│       ├── stripe-webhook/
│       └── jarvis-intelligence-orchestrator/
└── vercel.json
```

---

## 🔑 Internal APIs Setup (Admin)
These are configured in `/admin/intelligence-apis` — users never see them.

| API | Get key at |
|-----|------------|
| Anthropic (Claude) | console.anthropic.com |
| OpenAI | platform.openai.com |
| Perplexity | perplexity.ai/settings/api |
| SEMrush | semrush.com/api |
| SimilarWeb | developer.similarweb.com |
| SpyFu | api.spyfu.com |
| ElevenLabs | elevenlabs.io |
| Leonardo.ai | leonardo.ai/api |
| Stability AI | stability.ai |
| Remove.bg | remove.bg/api |
| Bannerbear | bannerbear.com |
| Luma AI | lumalabs.ai |
| RunwayML | runwayml.com |
| HeyGen | heygen.com |
| Murf AI | murf.ai |

---

## 🔗 User APIs (configured by each user)
Users configure these in `/dashboard/api-keys`:
- Meta / Facebook Ads API Token + Ad Account ID
- Google Ads (via OAuth)
- Google Analytics 4 (via OAuth, optional)
- Google Search Console (via OAuth, optional)

---

## 📦 Parts Roadmap

| Part | Status | Contents |
|------|--------|----------|
| Part 1 (this) | ✅ | Setup, Auth, Landing, Layouts, DB Schema, Chat, Edge Functions |
| Part 2 | Next | API Keys page, Workflow Steps 1-2 |
| Part 3 | Next | Workflow Steps 3-4 (Strategy + Creatives) |
| Part 4 | Next | Workflow Steps 5-6 (Review + Publishing) |
| Part 5 | Next | Analytics Dashboard, Campaigns page |
| Part 6 | Next | Affiliate Program, Admin Users/Revenue |
| Part 7 | Next | All remaining Admin pages |
