# Medicare Agency Finder

A Next.js application for finding Medicare-enrolled Home Health Care Agencies across the United States.

## Features

- 🗺️ **Interactive US Map** - Click on any state to view agencies
- 📊 **Comprehensive Data** - Agency information including services, ratings, and contact details
- 🔄 **Automated Updates** - Data syncs weekly from CMS.gov
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- ⚡ **Fast & Modern** - Built with Next.js 15 and TailwindCSS

## Data Source

All data is sourced from the Centers for Medicare & Medicaid Services (CMS):
https://data.cms.gov/provider-data/dataset/6jpm-sxkc

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- (Optional) A database for storing agency data

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/medicare-agency-finder.git
cd medicare-agency-finder
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables (optional)
```bash
cp .env.example .env.local
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/medicare-agency-finder)

### Automated Data Sync

The application includes a cron job configured in `vercel.json` that runs weekly (every Sunday at midnight) to fetch the latest data from CMS.gov.

To protect your sync endpoint, set the `CRON_SECRET` environment variable in Vercel:
```
CRON_SECRET=your-secret-token-here
```

### Manual Data Sync

You can manually trigger a data sync by calling:
```bash
curl -X GET https://your-domain.com/api/sync \
  -H "Authorization: Bearer your-secret-token-here"
```

## Project Structure

```
medicare-agency-finder/
├── app/
│   ├── api/
│   │   └── sync/          # Data synchronization endpoint
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── USMap.tsx         # Interactive US map
│   └── AgencyTable.tsx   # Agency data table
├── types/
│   └── agency.ts         # TypeScript types
└── public/               # Static assets
```

## Customization

### Adding a Database

Currently, the app uses mock data. To use a real database:

1. Choose a database (Vercel Postgres, Supabase, PlanetScale, etc.)
2. Update the `/app/api/sync/route.ts` to store data
3. Create an API route to fetch agencies by state
4. Update `app/page.tsx` to fetch from your API

### Modifying the Table Columns

Edit `/components/AgencyTable.tsx` to add/remove columns based on your needs.

### Changing Sync Frequency

Modify the cron schedule in `vercel.json`. Examples:
- Daily: `"0 0 * * *"`
- Weekly: `"0 0 * * 0"` (current)
- Monthly: `"0 0 1 * *"`

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Deployment**: Vercel
- **Data Source**: CMS.gov API

## License

MIT License - feel free to use this project for your own purposes.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Support

For questions or issues, please open a GitHub issue.
