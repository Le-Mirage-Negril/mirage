This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Le Mirage Hotel Codebase

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### TODO:

- hosting
- designated github

## GammaCMS Integration

This project supports two content sources controlled by `CMS_SOURCE`:

- `CMS_SOURCE=local` uses static data from `src/lib/data.ts` (default fallback)
- `CMS_SOURCE=gamma` pulls rooms/home/weddings content from GammaCMS public API

### Required Environment Variables

```bash
CMS_SOURCE=gamma
GAMMACMS_API_URL=https://api.gammacms.com/api/public/v1
GAMMACMS_API_KEY=your_public_api_key
GAMMACMS_ORGANIZATION_ID=6dcc48d7-04b7-47b2-b6f1-a57274c6e60f
GAMMACMS_SITE_DOMAIN=miragenegril.com
CMS_REVALIDATE_SECONDS=300
```

### Optional: Webhook Revalidation

To invalidate cache immediately on CMS publish events:

```bash
GAMMACMS_WEBHOOK_SECRET=your_secret
```

Send `POST /api/revalidate` with:

- Header: `x-revalidate-secret: <GAMMACMS_WEBHOOK_SECRET>`
- Optional JSON body:
  - `{ \"slug\": \"home\" }`
  - `{ \"path\": \"/rooms\" }`
  - `{ \"paths\": [\"/\", \"/weddings\"] }`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
