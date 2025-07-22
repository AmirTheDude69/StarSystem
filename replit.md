# Replit.md

## Overview

This is a full-stack TypeScript application built with React frontend and Express backend, featuring a cosmic-themed user interface. The application appears to be a roadmap or portfolio showcase for "Mirage Tech" with an interactive space-themed design including animated planets orbiting around a central star.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Clean, minimalist cosmic interfaces without clutter. Prefers spacious, spread-out layouts over compact designs.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **UI Library**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom cosmic theme variables
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with custom configuration

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES Modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development**: Hot reload with tsx

### Project Structure
```
├── client/           # Frontend React application
├── server/           # Backend Express application
├── shared/           # Shared types and schemas
└── migrations/       # Database migration files
```

## Key Components

### Frontend Components
- **StarField**: Animated background with twinkling stars
- **CentralStar**: Main focal point representing "Mirage Tech"
- **OrbitingPlanet**: Interactive planets representing different services
- **CosmicGlow**: Mouse-following glow effect
- **UI Components**: Complete shadcn/ui component library

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Routes**: Express route handlers (currently minimal)
- **Vite Integration**: Development server with HMR support

### Database Schema
- **Users Table**: Basic user management with username/password
- **Validation**: Zod schemas for type-safe data validation

## Data Flow

1. **Frontend State**: React Query manages server state and caching
2. **API Communication**: RESTful API calls with fetch and proper error handling
3. **Database Operations**: Drizzle ORM with PostgreSQL for persistence
4. **Type Safety**: Full TypeScript coverage from database to UI

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **wouter**: Lightweight routing

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Uses Vite dev server with Express backend
- **Production**: Serves static files from Express with built assets
- **Database**: Requires `DATABASE_URL` environment variable

### Scripts
- `dev`: Development server with hot reload
- `build`: Production build for both frontend and backend
- `start`: Production server startup
- `check`: TypeScript type checking
- `db:push`: Database schema synchronization

## Notable Architectural Decisions

### Database Strategy
- **Choice**: PostgreSQL with Drizzle ORM
- **Rationale**: Type safety, excellent TypeScript integration, and serverless compatibility
- **Alternative**: Could use Prisma, but Drizzle offers lighter weight and better performance

### Frontend State Management
- **Choice**: React Query for server state, local state for UI
- **Rationale**: Eliminates need for complex state management like Redux for server data
- **Benefits**: Built-in caching, background updates, and error handling

### Styling Approach
- **Choice**: Tailwind CSS with shadcn/ui components
- **Rationale**: Rapid development with consistent design system
- **Custom Theme**: Cosmic color palette with CSS variables for easy theming

### Animation Strategy
- **Choice**: Framer Motion for complex animations
- **Rationale**: Declarative animations with React integration
- **Performance**: Optimized for 60fps animations with proper cleanup

### Development Experience
- **Choice**: Vite for frontend, tsx for backend development
- **Rationale**: Fast hot reload and excellent TypeScript support
- **Integration**: Custom Vite setup for full-stack development in single command