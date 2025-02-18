# GitHub User Search Application

A React and Express application for searching GitHub users and viewing their repositories.

## Project Structure

### Client-side Files

#### Pages
- `client/src/pages/home.tsx`: Main search page with search bar
- `client/src/pages/user.tsx`: User profile page showing user details and repositories
- `client/src/pages/not-found.tsx`: 404 page for invalid routes

#### Components
- `client/src/components/search-bar.tsx`: Search input component
- `client/src/components/user-card.tsx`: Component for displaying user profile information
- `client/src/components/repository-list.tsx`: Component for displaying user repositories

#### Core Files
- `client/src/App.tsx`: Main application component with routing
- `client/src/main.tsx`: Application entry point
- `client/src/lib/queryClient.ts`: API request handling and caching setup

### Server-side Files
- `server/index.ts`: Express server setup
- `server/routes.ts`: API endpoint definitions
- `server/storage.ts`: GitHub API integration and caching layer

### Shared Files
- `shared/schema.ts`: TypeScript types and Zod schemas for GitHub data

### Configuration Files
- `theme.json`: Application theme configuration
- `setup.sh`: Setup script for installing dependencies and starting the app
- `tailwind.config.ts`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `vite.config.ts`: Vite bundler configuration

## Features
- Search for GitHub users by username
- View user profile information including:
  - Avatar
  - Name
  - Bio
  - Public repository count
  - Follower/Following counts
- Display user's latest repositories with:
  - Repository name and description
  - Star and fork counts
  - Primary language
  - Last update time

## Setup

1. Make sure you have Node.js installed
2. Run the setup script:
```bash
chmod +x setup.sh
./setup.sh
```
3. Visit http://localhost:5000 in your browser

## Technology Stack
- Frontend: React with TypeScript
- Styling: Tailwind CSS with shadcn/ui components
- Backend: Express.js
- API Integration: GitHub REST API
- State Management: TanStack Query
- Routing: Wouter
