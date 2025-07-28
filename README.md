# Digital Agency CMS Website

![App Preview](https://imgix.cosmicjs.com/0e62fce0-6be0-11f0-a051-23c10f41277a-photo-1542838132-92c53300491e-1753727047204.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A professional digital agency website built with Next.js 15 and Cosmic CMS, showcasing services, team members, case studies, and client testimonials with dynamic content management.

## Features

- **Dynamic Content Management** - All content managed through Cosmic CMS staging environment
- **Services Showcase** - Comprehensive service listings with detailed descriptions and pricing
- **Team Member Profiles** - Professional team directory with skills and experience
- **Case Study Portfolio** - Detailed project showcases with results and team involvement
- **Client Testimonials** - Social proof with ratings and company information
- **Responsive Design** - Mobile-first approach for all devices
- **SEO Optimized** - Server-side rendering with proper meta tags
- **Performance Focused** - Optimized images and fast loading times

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=6887bad5ace967af4dfaaa90&clone_repository=6887ffb1ace967af4dfaaab2)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a digital agency company website with services, team members, testimonials, and case studies"

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket. Set apiEnvironment: staging in cosmic config"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **CMS**: Cosmic CMS (Staging Environment)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel-ready
- **Performance**: Image optimization with imgix

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the provided bucket access

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables by creating a `.env.local` file:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

// Get all services
const services = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])

// Get single service
const service = await cosmic.objects
  .findOne({ type: 'services', slug: 'web-development' })
  .depth(1)
```

### Fetching Team Members
```typescript
// Get team members by department
const developers = await cosmic.objects
  .find({ 
    type: 'team-members',
    'metadata.department': 'development'
  })
  .props(['id', 'title', 'slug', 'metadata'])
```

### Fetching Case Studies with Related Objects
```typescript
// Get case studies with team members and services
const caseStudies = await cosmic.objects
  .find({ type: 'case-studies' })
  .depth(2) // Include nested relationships
  .props(['id', 'title', 'slug', 'metadata'])
```

## Cosmic CMS Integration

This application connects to your Cosmic bucket using the staging environment configuration. The following object types are utilized:

- **Services** - Service offerings with descriptions, pricing, and features
- **Team Members** - Staff profiles with skills, experience, and contact info
- **Case Studies** - Project portfolios with challenges, solutions, and results
- **Testimonials** - Client feedback with ratings and company details

All content is fetched server-side for optimal performance and SEO, with relationships between objects handled through Cosmic's depth parameter.

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Build the application: `bun build`
2. Deploy the `out` folder to Netlify
3. Configure environment variables in Netlify dashboard

### Environment Variables for Production
Set these variables in your hosting platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`

<!-- README_END -->