# Overview

This is a modern full-stack web application for "PrivateBrowser" - a privacy-focused browser marketing website. The project uses a React frontend with TypeScript, Express.js backend, and PostgreSQL database with Drizzle ORM. The application features a sleek landing page with sections for hero content, about information, screenshots gallery, and download options, all styled with a modern gradient design using Tailwind CSS and shadcn/ui components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development/bundling
- **Routing**: Wouter for client-side routing (lightweight React Router alternative)
- **Styling**: Tailwind CSS with shadcn/ui component library using the "new-york" style variant
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives
- **Design System**: Custom CSS variables for theming with support for light/dark modes

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Development**: Hot module replacement via Vite integration in development mode
- **API Structure**: RESTful API with `/api` prefix for all endpoints
- **Session Management**: PostgreSQL session store using connect-pg-simple
- **Error Handling**: Centralized error handling middleware with structured error responses

## Database Design
- **Primary Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations stored in `/migrations` directory
- **Validation**: Zod schemas for runtime type validation integrated with Drizzle

## Development Environment
- **Build System**: Vite for frontend bundling and development server
- **TypeScript**: Strict TypeScript configuration with path mapping for clean imports
- **Hot Reload**: Development setup with HMR for both frontend and backend changes
- **Code Organization**: Monorepo structure with shared types and utilities

## Authentication & Security
- **User Management**: Basic user schema with username/password authentication
- **Session Storage**: PostgreSQL-backed sessions for persistent login state
- **CORS**: Configured for cross-origin requests with credentials support
- **Input Validation**: Zod schemas for request/response validation

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver for database connectivity
- **drizzle-orm & drizzle-kit**: Modern TypeScript ORM with code generation and migrations
- **@tanstack/react-query**: Server state management and caching for React applications
- **wouter**: Lightweight routing library for React applications

## UI & Styling Dependencies
- **@radix-ui/***: Comprehensive collection of accessible UI primitives for React
- **tailwindcss**: Utility-first CSS framework for styling
- **class-variance-authority**: Utility for creating component variants with TypeScript support
- **lucide-react**: Icon library providing consistent iconography
- **date-fns**: Date manipulation and formatting utilities

## Development Dependencies
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution engine for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling

## Form & Validation Dependencies
- **react-hook-form**: Performant form library for React
- **@hookform/resolvers**: Integration layer between react-hook-form and validation libraries
- **zod**: Schema validation library for TypeScript

## Database & Session Dependencies
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation schemas