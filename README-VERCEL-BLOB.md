# Implementing Vercel Blob Storage for Media Files

This guide explains how we've implemented Vercel Blob Storage for handling media files in this project.

## What We've Done

1. **Installed the official Vercel Blob storage adapter for Payload CMS**:

   ```bash
   yarn add @payloadcms/storage-vercel-blob
   ```

2. **Updated the Payload configuration** in `src/payload.config.ts` to use Vercel Blob storage:

   ```typescript
   import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

   // In the plugins array:
   plugins: [
     ...plugins,
     vercelBlobStorage({
       enabled: true,
       collections: {
         media: {
           prefix: 'media',
         },
       },
       clientUploads: true,
       token: process.env.NEW_BLOB_READ_WRITE_TOKEN,
       addRandomSuffix: true,
     }),
   ],
   ```

## How It Works

1. When you upload a media file through the Payload CMS admin panel, it will be stored in Vercel Blob storage instead of the local filesystem.
2. The `clientUploads: true` setting allows files to be uploaded directly from the client to Vercel Blob, bypassing Vercel's 4.5MB server upload limit.
3. The `addRandomSuffix: true` option adds a random suffix to filenames to prevent collisions.
4. The `prefix: 'media'` option organizes all files in a "media" folder within your Blob storage.

## Required Environment Variables

For this to work in production, you need to set up the following environment variables in your Vercel project:

1. `NEW_BLOB_READ_WRITE_TOKEN` - Automatically added by Vercel when you set up Blob storage
2. `NEXT_PUBLIC_SERVER_URL` - Your website's public URL (e.g., https://js-sbu.vercel.app)
3. `PAYLOAD_PUBLIC_SERVER_URL` - Same as above
4. `NEXT_PUBLIC_PAYLOAD_URL` - Same as above
5. `PAYLOAD_SECRET` - Secret key for encrypting sessions and tokens
6. `DATABASE_URI` - Your production database connection string

## Setting Up Vercel Blob Storage

See the `VERCEL-SETUP.md` file for detailed instructions on how to set up Vercel Blob storage for your project.

## Migrating Existing Media

If you already have media files in your project, you'll need to re-upload them through the Payload CMS admin panel after setting up Vercel Blob storage.

## Troubleshooting

If images are not displaying correctly:

1. Check that the Vercel Blob storage is properly set up and the `NEW_BLOB_READ_WRITE_TOKEN` is correctly set.
2. Verify that all environment variables are correctly configured.
3. Try uploading a new test image to see if it works with the new configuration.
4. Check the Vercel deployment logs for any errors related to Blob storage.
