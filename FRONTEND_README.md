# Frontend Setup & Architecture

## Overview
This is the Next.js 14 + React 18 + TypeScript frontend for the Amal Jyothi College of Engineering website, built with Chakra UI for component styling and Zustand for state management.

## Quick Start

### 1. Install Dependencies
```bash
cd client
npm install
```

### 2. Environment Setup
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and set:
- `NEXT_PUBLIC_API_URL` - Backend API URL (default: http://localhost:5000/api)

### 3. Start Development Server
```bash
npm run dev
```

Navigate to `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
npm start
```

## Project Structure

```
client/
├── app/                          # Next.js app directory
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout with metadata
│   ├── providers.tsx            # Chakra + Auth setup
│   ├── login/page.tsx           # Login page
│   ├── register/page.tsx        # Registration page
│   ├── courses/page.tsx         # Public courses listing
│   ├── admissions/page.tsx      # Admissions info page
│   ├── placements/page.tsx      # Public placements page
│   └── dashboard/               # Protected dashboard routes
│       ├── layout.tsx           # Dashboard layout with sidebar
│       ├── page.tsx             # Main dashboard
│       ├── courses/page.tsx     # Student's courses
│       ├── events/page.tsx      # Campus events
│       ├── placements/page.tsx  # Placement stats
│       └── forum/page.tsx       # Discussion forum
│
├── components/                   # Reusable React components
│   ├── layouts/
│   │   └── AppLayout.tsx        # Main app layout wrapper
│   ├── Header.tsx               # Sticky nav header
│   ├── Footer.tsx               # Footer
│   ├── CourseCard.tsx           # Course display card
│   ├── EventCard.tsx            # Event display card
│   ├── NewsCard.tsx             # News/article card
│   ├── ForumPostCard.tsx        # Forum post card
│   ├── PlacementCard.tsx        # Placement record card
│   ├── StatWidget.tsx           # Statistics widget
│   ├── DashboardNav.tsx         # Sidebar navigation
│   └── Pagination.tsx           # Pagination control
│
├── lib/                          # Utilities and config
│   ├── theme.ts                 # Chakra UI theme extension
│   ├── api.ts                   # API client with interceptors
│   └── store.ts                 # Zustand auth store
│
├── prototype/                    # Static HTML prototypes (reference only)
│   ├── index.html               # Home page mockup
│   ├── dashboard.html           # Dashboard mockup
│   └── styles.css               # Prototype styles
│
├── public/                       # Static assets
│
├── package.json                  # Dependencies & scripts
├── tsconfig.json                # TypeScript config
├── next.config.js               # Next.js config
├── .env.local.example           # Environment template
└── README.md                     # This file
```

## Key Technologies

| Layer | Technologies |
|-------|--------------|
| **Frontend Framework** | Next.js 14, React 18, TypeScript |
| **Styling** | Chakra UI 2.8, Emotion |
| **State Management** | Zustand |
| **HTTP Client** | Axios with interceptors |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |

## Features Implemented

### Authentication
✅ User registration with email & password  
✅ Email validation & password strength checking  
✅ JWT token storage & persistence  
✅ Automatic session restoration on app load  
✅ Login/logout with role-based access  
✅ Protected dashboard routes  

### Public Pages
✅ **Home** - Hero, highlights, latest news, events, featured courses  
✅ **Courses** - Searchable course catalog with department filtering  
✅ **Admissions** - Application process, eligibility, required documents  
✅ **Placements** - Placement statistics, top companies, recent placements  

### Student Dashboard (Protected)
✅ **Dashboard** - Stats widgets, announcements, course list, upcoming events  
✅ **My Courses** - Student's enrolled courses with details  
✅ **Events** - Campus events with RSVP counts  
✅ **Placements** - Placement records and statistics  
✅ **Forum** - Discussion board with post creation  

### Shared Components
✅ **AppLayout** - Consistent header, sidebar (optional), footer  
✅ **Header** - Logo, navigation, responsive menu, user authentication UI  
✅ **Footer** - Links, contact info, copyright  
✅ **Cards** - CourseCard, EventCard, NewsCard, PlacementCard, ForumPostCard  
✅ **Pagination** - Smart pagination with ... for large datasets  
✅ **StatWidget** - KPI display with trends  

## API Integration

All API calls are handled through the singleton `apiClient` in `lib/api.ts`:

```typescript
import { apiClient } from '@/lib/api'

// Get courses
const response = await apiClient.getCourses()

// Get news with pagination
const news = await apiClient.getNews(page, limit)

// Create forum post (requires auth)
await apiClient.createForumPost(title, body)
```

### Available Endpoints

```
GET  /api/courses              - All courses
GET  /api/courses/:id          - Course details
GET  /api/events               - All events
GET  /api/news                 - News articles (paginated)
GET  /api/departments          - Departments list
GET  /api/placements           - Placement records
POST /api/forum                - Create forum post
GET  /api/forum/:id            - Forum post details
POST /api/forum/:id/replies    - Add comment to post
POST /api/auth/register        - User registration
POST /api/auth/login           - User login
```

## State Management

Zustand auth store in `lib/store.ts`:

```typescript
import { useAuthStore } from '@/lib/store'

// In component
const { user, token, login, logout } = useAuthStore()

// Register
await useAuthStore.getState().register(email, password, name, role)

// Login
await useAuthStore.getState().login(email, password)

// Logout
useAuthStore.getState().logout()
```

## Design System

### Colors
- **Brand Primary**: #0B5FFF (Blue)
- **Accent**: #00BFA6 (Teal/Green)
- **Neutral**: Grays from 50-900

### Typography
- **Font Family**: Inter (system fallback)
- **Base Size**: 14px
- **Headings**: 700 weight

### Components
- Button (primary, outline, ghost variants)
- Card (with subtle shadow)
- Input (with focus states)
- Select/Dropdown
- Modal/Dialog

See `lib/theme.ts` for full theme configuration.

## Authentication Flow

1. **Register** → `/register` → Creates account → Auto-login → Redirect to `/dashboard`
2. **Login** → `/login` → Validates credentials → Stores JWT → Redirect to `/dashboard`
3. **Session Restore** → App loads → Check localStorage → Hydrate auth state
4. **Protected Routes** → Dashboard routes check `useAuthStore` → Redirect to `/login` if unauthenticated
5. **Logout** → Clear token → Clear user state → Redirect to `/`

## Available Scripts

```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
# Follow prompts, set environment variables in Vercel dashboard
```

### Environment Variables for Production
```
NEXT_PUBLIC_API_URL = https://api.yourdomain.com
```

## Performance Optimizations

✅ Image optimization with Next.js Image component  
✅ Automatic code splitting & lazy loading  
✅ CSS-in-JS with Emotion (bundle size efficient)  
✅ Token-based auth (no cookie overhead)  
✅ Responsive design (mobile/tablet/desktop)  

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Common Issues & Solutions

### 1. API Calls Return 401
**Issue**: Session expired  
**Solution**: Check localStorage for token, login again

### 2. Blank Dashboard
**Issue**: Protected route accessed without auth  
**Solution**: Redirect to login is automatic, check browser console

### 3. Styles Not Loading
**Issue**: Theme not applied  
**Solution**: Ensure `Providers` wraps children in layout.tsx

### 4. TypeScript Errors
**Solution**: Run `npm run type-check` to see all errors, fix type annotations

## Next Steps

### Phase 2 (Week 4-7)
- [ ] Course detail pages with syllabus upload
- [ ] Event registration & RSVP
- [ ] News article detail pages
- [ ] File upload for course materials
- [ ] Search across all resources
- [ ] User profile customization
- [ ] Email notifications

### Phase 3 (Week 7-10)
- [ ] Real-time notifications (WebSocket)
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Admin panel (CMS)
- [ ] Payments integration for admissions
- [ ] Document verification system
- [ ] API rate limiting & caching

## Contributing

1. Create feature branch: `git checkout -b feature/my-feature`
2. Make changes and test locally
3. Push and create pull request
4. Ensure all tests pass and code is formatted

## Support

For issues or questions:
- Check existing GitHub issues
- Review API documentation in `SERVER_SETUP.md`
- Contact development team

---

**Last Updated**: 2025  
**Version**: 1.0.0  
**Status**: Frontend Scaffolding Complete ✅
