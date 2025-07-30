# TinaCMS Integration Guide

This document explains how to set up and use TinaCMS with your Astro church starter project.

## What's Been Configured

### 1. TinaCMS Configuration
- **File**: `tina/config.ts`
- **Purpose**: Defines the schema for all content collections
- **Collections Configured**:
  - Staff (name, title, image, email, phone, bio, order, draft)
  - Events (title, date, endDate, time, location, image, summary, tags, registration info, draft)
  - Sermons (title, slug, date, speaker, series, scripture, audio/video URLs, image, summary, tags, draft)
  - Ministries (name, logo, summary, coordinator, contact, schedule, order, draft)
  - Blog (title, slug, pubDate, description, author, image, tags, draft)
  - Site Information (title for content blocks)

### 2. Package.json Scripts
- `npm run dev`: Runs TinaCMS dev server alongside Astro dev server
- `npm run build`: Builds TinaCMS admin interface and then builds Astro
- `npm run tina:dev`: Runs only TinaCMS dev server
- `npm run tina:build`: Builds only TinaCMS admin interface

### 3. Admin Interface
- **File**: `src/pages/admin.astro`
- **URL**: `/admin` (when running locally: `http://localhost:4321/admin`)
- **Purpose**: Provides the TinaCMS editing interface

### 4. Environment Configuration
- **File**: `.env.example` (template for environment variables)
- **Required Variables**:
  - `NEXT_PUBLIC_TINA_CLIENT_ID`: Your TinaCMS client ID
  - `TINA_TOKEN`: Your TinaCMS token

### 5. Git Configuration
- **File**: `.gitignore` updated to exclude:
  - `.tina/__generated__/`
  - `public/admin/`
  - `tina/__generated__/`
  - `.env.local`

## Setup Instructions

### 1. Get TinaCMS Credentials
1. Go to [tina.io](https://tina.io)
2. Create an account and new project
3. Get your `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN`

### 2. Configure Environment Variables
1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Edit `.env.local` and add your TinaCMS credentials:
   ```
   NEXT_PUBLIC_TINA_CLIENT_ID=your_actual_client_id
   TINA_TOKEN=your_actual_token
   GITHUB_BRANCH=main
   ```

### 3. Build TinaCMS Admin Interface
```bash
npm run tina:build
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Access Admin Interface
- Open your browser to `http://localhost:4321/admin`
- You should see the TinaCMS editing interface

## Content Management

### Editing Content
1. Navigate to `/admin` in your browser
2. Select the content type you want to edit (Staff, Events, Sermons, etc.)
3. Choose an existing item to edit or create a new one
4. Make your changes in the visual editor
5. Save your changes

### Content Structure
All content is stored in the `src/content/` directory:
- `src/content/staff/` - Staff member profiles
- `src/content/events/` - Church events
- `src/content/sermons/` - Sermon content
- `src/content/ministries/` - Ministry information
- `src/content/blog/` - Blog posts
- `src/content/siteInfo/` - General site information

### Media Management
- Images are stored in `public/uploads/`
- TinaCMS provides a media manager for uploading and organizing images
- Images are automatically optimized for web use

## Schema Mapping

The TinaCMS schema has been carefully mapped to match your existing Astro Content Collections:

| Astro Collection | TinaCMS Collection | Key Fields |
|------------------|-------------------|------------|
| `staff` | Staff | name, title, image, email, phone, bio |
| `events` | Events | title, date, location, image, summary |
| `sermons` | Sermons | title, date, speaker, audioUrl, videoUrl |
| `ministries` | Ministries | name, logo, summary, coordinator |
| `blog` | Blog | title, pubDate, description, author, image |
| `siteInfo` | Site Information | title |

## Troubleshooting

### Common Issues

1. **Admin page shows 404**
   - Make sure you've run `npm run tina:build`
   - Check that the admin files are generated in `public/admin/`

2. **Authentication errors**
   - Verify your `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN` are correct
   - Make sure `.env.local` is in the root directory

3. **Content not saving**
   - Check your TinaCMS project permissions
   - Verify the branch name matches your repository

4. **Build errors**
   - Ensure all required fields in the schema have values
   - Check for TypeScript errors in the configuration

### PowerShell Execution Policy (Windows)
If you encounter PowerShell execution policy errors when running npm commands:

1. **Option 1**: Use Command Prompt instead of PowerShell
2. **Option 2**: Set execution policy (as Administrator):
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. **Option 3**: Use the full path to node:
   ```cmd
   node_modules\.bin\tinacms build
   ```

## Production Deployment

### Environment Variables
Make sure to set these environment variables in your hosting platform:
- `NEXT_PUBLIC_TINA_CLIENT_ID`
- `TINA_TOKEN`
- `GITHUB_BRANCH` (optional, defaults to main)

### Build Process
The build process will:
1. Generate TinaCMS admin interface
2. Build the Astro site
3. Include the admin interface at `/admin`

## Benefits of This Integration

1. **Visual Editing**: Content editors can see changes in real-time
2. **Type Safety**: Schema validation ensures data consistency
3. **Media Management**: Built-in image upload and optimization
4. **Git-based**: All changes are committed to your repository
5. **No Database**: Content stored as markdown files
6. **SEO Friendly**: Static site generation with dynamic content management

## Next Steps

1. Set up your TinaCMS account and get credentials
2. Configure environment variables
3. Build and test the admin interface
4. Train content editors on using the TinaCMS interface
5. Set up production deployment with environment variables

For more information, visit the [TinaCMS documentation](https://tina.io/docs/).