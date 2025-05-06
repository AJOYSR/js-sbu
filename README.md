# Payload CMS V3 Website Template

<p align="center">
  <a href="https://funkyton.com/payload-cms/">
    <img alt="Payload CMS logo" src="https://res.cloudinary.com/hczpmiapo/image/upload/v1732576652/Static%20assets/Logos/payload_V3_mhv6wc.png" width=100>
  </a>
  <a href="https://railway.app/template/L8TUlT?referralCode=-Yg50p">
    <img alt="Railway logo" src="https://railway.app/brand/logo-light.svg" width=100>
  </a>
</p>

<h2 align="center">
  A powerful, flexible, and production-ready Payload CMS V3 website builder with PostgreSQL database.
  <br>
  <a href="https://railway.app/template/L8TUlT?referralCode=-Yg50p">One-click deploy on Railway!</a>
</h2>

## About

This boilerplate is a pre-configured, ready-to-deploy solution for Payload CMS as a website builder. It includes a fully-working backend, enterprise-grade admin panel, and a beautifully designed, production-ready website. This template is optimized for seamless deployment on [Railway](https://railway.app?referralCode=-Yg50p), and uses PostgreSQL for both local development and production environments.

## Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Authentication System**: Complete user authentication with roles and permissions
- **Access Control**: Role-based access control for admins and users
- **Premium Content**: Gated content accessible only to authenticated users
- **Content Management**:
  - Layout Builder with flexible blocks
  - Rich text editor powered by Lexical
  - Media library with image optimization
  - Collections for structured content
- **User Engagement**:
  - Commenting system with admin approval
  - SEO optimization tools built-in
  - Social sharing capabilities
- **Developer Experience**:
  - TypeScript for type safety
  - API endpoints for custom logic
  - Draft Preview for content before publishing
  - Hot reloading during development
- **Performance**:
  - Server-side rendering
  - Static site generation capabilities
  - Image optimization with Sharp
- **Production-Ready**:
  - URL redirects management
  - PostgreSQL database support
  - Railway deployment configuration

## Project Structure

```
├── public/              # Static files
├── src/                 # Source code
│   ├── access/          # Access control functions
│   ├── app/             # Next.js app directory
│   ├── blocks/          # Content blocks for layout builder
│   ├── collections/     # Payload collections (data models)
│   ├── components/      # React components
│   ├── endpoints/       # API endpoints
│   ├── fields/          # Custom field types
│   ├── Footer/          # Footer components
│   ├── Header/          # Header components
│   ├── heros/           # Hero section components
│   ├── hooks/           # Custom React hooks
│   ├── migrations/      # Database migrations
│   ├── plugins/         # Payload plugins
│   ├── providers/       # React context providers
│   ├── search/          # Search functionality
│   ├── utilities/       # Utility functions
│   ├── payload.config.ts # Payload configuration
│   └── environment.d.ts  # TypeScript environment declarations
├── .next/               # Next.js build output
├── node_modules/        # Dependencies
├── docker-compose.yml   # Docker configuration
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies and scripts
├── tailwind.config.mjs  # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js: ^18.20.2 or >=20.9.0
- PostgreSQL database
- Yarn package manager

### Railway Deployment (Recommended)

Use the one-click deploy template:

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/L8TUlT?referralCode=-Yg50p)

### Local Setup

1. Clone the project:

   ```bash
   git clone <repository-url>
   cd payload-3-boilerplate
   ```

2. Copy `.env.example` to `.env` and fill in your PostgreSQL database connection details and other environment variables.

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Run in development mode:

   ```bash
   yarn dev
   ```

5. Access the site at http://localhost:3000 and the admin panel at http://localhost:3000/admin

### Production Deployment

1. Build the project:

   ```bash
   yarn build
   ```

2. Start the production server:

   ```bash
   yarn start
   ```

3. For a production-like environment locally:
   ```bash
   yarn dev:prod
   ```

### Working with the Codebase

- Generate TypeScript types from your collections:

  ```bash
  yarn generate:types
  ```

- Run linting:

  ```bash
  yarn lint
  ```

- Fix linting issues:

  ```bash
  yarn lint:fix
  ```

- Rebuild dependencies (if needed):
  ```bash
  yarn reinstall
  ```

## Useful Resources

- **[Official Documentation](https://funkyton.com/payload-cms/)**: Step-by-step guide and instructions
- **[Payload CMS Docs](https://payloadcms.com/docs)**: Official Payload documentation
- **[Next.js Documentation](https://nextjs.org/docs)**: Learn about Next.js features
- **[TypeScript Documentation](https://www.typescriptlang.org/docs/)**: TypeScript language reference

## License

This project is licensed under the MIT License - see the LICENSE file for details.

<p align="center">
  <a href="https://funkyton.com/">
    A template by,
    <br><br>
    <img alt="FUNKYTON logo" src="https://res-5.cloudinary.com/hczpmiapo/image/upload/q_auto/v1/ghost-blog-images/funkyton-logo.png" width=200>
  </a>
</p>
