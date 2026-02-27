# AJCE Website (Next.js)

Official frontend project for **Amal Jyothi College of Engineering (AJCE)** website.

This repository contains a modern Next.js app with public pages (academics, admissions, placements, events, news) and authenticated student dashboard sections.

## Tech Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Chakra UI
- Zustand (auth state)
- Axios (API client with fallback mock data)

## Quick Start

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment

```bash
copy .env.local.example .env.local
```

Set in `.env.local`:

- `NEXT_PUBLIC_API_URL` (example: `http://localhost:5000/api`)

### 3) Run development server

```bash
npm run dev
```

Open `http://localhost:3000`

### 4) Production build

```bash
npm run build
npm start
```

## Project Structure

```text
app/                 Next.js routes and layouts
components/          Reusable UI components
lib/                 API client, theme, state store, college data
prototype/           Static prototype files
```

## Main Routes

### Public

- `/` Home
- `/about`
- `/academics`
- `/academics-details`
- `/courses`
- `/admissions`
- `/placements`
- `/events`
- `/news`
- `/contact`
- `/apply`

### Auth + Student Area

- `/login`
- `/register`
- `/dashboard`
- `/dashboard/courses`
- `/dashboard/events`
- `/dashboard/placements`
- `/dashboard/forum`

## Scripts

```bash
npm run dev         # Start dev server
npm run build       # Create production build
npm start           # Start production server
npm run lint        # Lint codebase
npm run type-check  # TypeScript validation
```

## Data + API Notes

- API calls are centralized in `lib/api.ts`.
- If backend is unavailable, selected endpoints use mock fallback data (including placements) to keep UI functional for demos.
- Academic and institutional content is in `lib/collegeData.ts`.

## Additional Documentation

For deeper implementation details, see:

- `FRONTEND_README.md`
- `DOCUMENTATION_INDEX.md`
- `IMPLEMENTATION_SUMMARY.md`
- `PROJECT_COMPLETION_REPORT.md`
- `QUICK_REFERENCE.md`

## Contributing

1. Create a branch from `main`
2. Make focused changes
3. Run:

```bash
npm run type-check
npm run lint
```

4. Commit and open a pull request

## Status

Actively maintained frontend for AJCE web platform.
