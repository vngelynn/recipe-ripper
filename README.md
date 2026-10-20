# gathered pantry

**A calmer way to collect recipes from around the web.**

Gathered Pantry is a personal full-stack web application designed to make saving and organizing online recipes simpler. Paste a recipe URL to extract its contents into a cleaner, more readable format, with the longer-term goal of building a personal recipe collection.

The project is actively in development, with a focus on practical full-stack engineering, reliable data extraction, and a thoughtful user experience.

## Current Features

- **Recipe URL extraction:** Submit a recipe URL through the app's extraction flow.
- **Structured recipe parsing:** Retrieve recipe data from Schema.org JSON-LD metadata using Axios and Cheerio.
- **Recipe preview UI:** Display extracted recipe data in a dedicated interface.
- **Authentication foundation:** Login and sign-up flows, including Google sign-in integration.
- **Database foundation:** PostgreSQL-backed data model development for users and saved recipes.

## Tech Stack

| Area | Technologies |
|---|---|
| Frontend | Next.js, React, TypeScript, Tailwind CSS |
| Backend | Next.js Route Handlers, Node.js |
| Recipe extraction | Axios, Cheerio, Schema.org JSON-LD |
| Database | PostgreSQL, Prisma tooling |
| Authentication | Auth.js, Google OAuth |
| Development | Git, npm |

## How It Works

1. A user submits a recipe URL.
2. The application sends the URL to a Next.js API route.
3. The server retrieves the webpage and searches for structured recipe metadata.
4. Extracted data is normalized and returned to the client.
5. The interface presents the available recipe information for review.

Recipe extraction depends on the source website's markup and structured data, so results can vary between websites.

## Getting Started

### Prerequisites

- Node.js (use the version specified by the project, if provided)
- npm
- PostgreSQL
- Environment variables configured for the services you enable

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure your local environment variables using the project's environment-variable template or setup instructions.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

*Note: Database and authentication configuration may be required depending on which features you run. Setup instructions will be expanded as those features are completed.*

## Project Status

Gathered Pantry is an evolving portfolio project. Features are developed incrementally, with an emphasis on correctness, maintainability, and a cohesive user experience.

