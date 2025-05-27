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

### Core Features
- **Modern Tech Stack**: 
  - Next.js 15 with App Router
  - React 19 with Server Components
  - TypeScript for type safety
  - Tailwind CSS for styling
  - PostgreSQL for database

### Authentication & Security
- **Complete Authentication System**:
  - User registration and login
  - Role-based access control
  - JWT token authentication
  - Password reset functionality
  - Email verification
- **Access Control**:
  - Granular permissions system
  - Role-based access for admins and users
  - Protected routes and API endpoints

### Content Management
- **Advanced Layout Builder**:
  - Drag-and-drop interface
  - Customizable blocks
  - Responsive layouts
  - Real-time preview
- **Rich Text Editor**:
  - Powered by Lexical
  - Custom formatting options
  - Media embedding
  - Code block support
- **Media Management**:
  - Image optimization with Sharp
  - Cloud storage integration
  - Responsive image handling
  - Media library organization

### User Engagement
- **Commenting System**:
  - Nested comments
  - Admin moderation
  - Spam protection
  - Email notifications
- **SEO Optimization**:
  - Meta tags management
  - Sitemap generation
  - Robots.txt configuration
  - Open Graph support
- **Social Features**:
  - Social sharing
  - Social media integration
  - User profiles
  - Activity tracking

### Developer Experience
- **TypeScript Integration**:
  - Full type safety
  - Auto-generated types
  - Type checking in development
- **API Development**:
  - RESTful endpoints
  - GraphQL support
  - Custom API routes
  - Webhook integration
- **Development Tools**:
  - Hot reloading
  - Error boundaries
  - Development logging
  - Debug utilities

### Performance
- **Optimization Features**:
  - Server-side rendering
  - Static site generation
  - Image optimization
  - Code splitting
  - Route prefetching
- **Caching Strategy**:
  - Redis integration
  - Browser caching
  - API response caching
  - Static asset caching

## Project Structure

```
├── public/                    # Static files and assets
│   ├── images/               # Image assets
│   ├── fonts/                # Font files
│   └── favicon.ico           # Site favicon
│
├── src/                      # Source code
│   ├── access/              # Access control functions
│   │   ├── roles.ts        # Role definitions
│   │   └── permissions.ts  # Permission handlers
│   │
│   ├── app/                 # Next.js app directory
│   │   ├── (frontend)/     # Frontend routes
│   │   ├── (admin)/        # Admin panel routes
│   │   └── api/            # API routes
│   │
│   ├── blocks/             # Content blocks
│   │   ├── Hero/          # Hero section blocks
│   │   ├── Features/      # Feature blocks
│   │   └── Content/       # Content blocks
│   │
│   ├── collections/        # Payload collections
│   │   ├── Users/         # User collection
│   │   ├── Media/         # Media collection
│   │   └── Pages/         # Page collection
│   │
│   ├── components/         # React components
│   │   ├── ui/            # UI components
│   │   ├── forms/         # Form components
│   │   └── layout/        # Layout components
│   │
│   ├── endpoints/          # API endpoints
│   │   ├── auth/          # Authentication endpoints
│   │   └── api/           # Custom API endpoints
│   │
│   ├── fields/            # Custom field types
│   │   ├── RichText/      # Rich text fields
│   │   └── Media/         # Media fields
│   │
│   ├── Footer/            # Footer components
│   ├── Header/            # Header components
│   ├── heros/             # Hero section components
│   ├── hooks/             # Custom React hooks
│   ├── migrations/        # Database migrations
│   ├── plugins/           # Payload plugins
│   ├── providers/         # React context providers
│   ├── search/            # Search functionality
│   ├── utilities/         # Utility functions
│   ├── payload.config.ts  # Payload configuration
│   └── environment.d.ts   # TypeScript environment declarations
│
├── .env.example           # Environment variables example
├── .gitignore            # Git ignore file
├── docker-compose.yml    # Docker configuration
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── tailwind.config.mjs   # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js: ^18.20.2 or >=20.9.0
- PostgreSQL database
- Yarn package manager
- Git

### Local Development Setup

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd payload-3-boilerplate
   ```

2. **Environment Setup**:
   ```bash
   # Copy environment variables
   cp .env.example .env
   
   # Update the following variables in .env:
   - DATABASE_URI=postgres://username:password@localhost:5432/database_name
   - PAYLOAD_SECRET=your-secret-key
   - NEXT_PUBLIC_SERVER_URL=http://localhost:3000
   ```

3. **Install Dependencies**:
   ```bash
   yarn install
   ```

4. **Database Setup**:
   ```bash
   # Start PostgreSQL (if using Docker)
   docker-compose up -d
   
   # Or use your local PostgreSQL instance
   ```

5. **Run Development Server**:
   ```bash
   yarn dev
   ```

6. **Access the Application**:
   - Website: http://localhost:3000
   - Admin Panel: http://localhost:3000/admin

### Production Deployment

#### Railway Deployment (Recommended)

1. **One-Click Deploy**:
   - Click the "Deploy on Railway" button above
   - Connect your GitHub repository
   - Configure environment variables
   - Deploy

2. **Manual Railway Setup**:
   ```bash
   # Install Railway CLI
   npm i -g @railway/cli
   
   # Login to Railway
   railway login
   
   # Link your project
   railway link
   
   # Deploy
   railway up
   ```

#### Manual Deployment

1. **Build the Project**:
   ```bash
   yarn build
   ```

2. **Start Production Server**:
   ```bash
   yarn start
   ```

3. **Environment Variables**:
   - Set up all required environment variables in your hosting platform
   - Ensure database connection is properly configured
   - Set appropriate security keys and secrets

### Development Workflow

1. **Generate Types**:
   ```bash
   yarn generate:types
   ```

2. **Linting**:
   ```bash
   # Check for issues
   yarn lint
   
   # Fix issues automatically
   yarn lint:fix
   ```

3. **Database Migrations**:
   ```bash
   # Create migration
   yarn migration:create
   
   # Run migrations
   yarn migration:up
   ```

4. **Testing**:
   ```bash
   # Run tests
   yarn test
   
   # Run tests in watch mode
   yarn test:watch
   ```

## Useful Resources

- **[Official Documentation](https://funkyton.com/payload-cms/)**: Complete guide and instructions
- **[Payload CMS Docs](https://payloadcms.com/docs)**: Official Payload documentation
- **[Next.js Documentation](https://nextjs.org/docs)**: Next.js features and API
- **[TypeScript Documentation](https://www.typescriptlang.org/docs/)**: TypeScript reference
- **[Tailwind CSS Docs](https://tailwindcss.com/docs)**: Tailwind CSS documentation
- **[PostgreSQL Docs](https://www.postgresql.org/docs/)**: PostgreSQL documentation

## License

This project is licensed under the MIT License - see the LICENSE file for details.

<p align="center">
  <a href="https://funkyton.com/">
    A template by,
    <br><br>
    <img alt="FUNKYTON logo" src="https://res-5.cloudinary.com/hczpmiapo/image/upload/q_auto/v1/ghost-blog-images/funkyton-logo.png" width=200>
  </a>
</p>
