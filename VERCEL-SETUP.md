# Setting Up Vercel Environment Variables

To properly display images in your production environment, you need to set up Vercel Blob Storage and configure the necessary environment variables.

## 1. Add Vercel Blob Storage to Your Project

1. Go to your Vercel project dashboard
2. Click on "Storage" in the left sidebar
3. Select "Blob" and click "Create"
4. Follow the prompts to set up Blob storage

Once created, Vercel will automatically add the `BLOB_READ_WRITE_TOKEN` to your environment variables.

## 2. Required Environment Variables

Add these environment variables in your Vercel project settings:

| Variable                    | Description                                                | Example Value                                 |
| --------------------------- | ---------------------------------------------------------- | --------------------------------------------- |
| `DATABASE_URI`              | Your production database connection string                 | `postgres://user:password@host:port/database` |
| `PAYLOAD_SECRET`            | Secret key for encrypting sessions and tokens              | `your-secure-random-string`                   |
| `NEXT_PUBLIC_SERVER_URL`    | The public URL of your website                             | `https://js-sbu.vercel.app`                   |
| `PAYLOAD_PUBLIC_SERVER_URL` | Used by Payload CMS for media URLs                         | `https://js-sbu.vercel.app`                   |
| `NEXT_PUBLIC_PAYLOAD_URL`   | Used by the frontend for Payload requests                  | `https://js-sbu.vercel.app`                   |
| `BLOB_READ_WRITE_TOKEN`     | Automatically added by Vercel when you set up Blob storage | -                                             |

## 3. How to Add Environment Variables

1. Go to your Vercel project dashboard
2. Click on "Settings" in the top navigation
3. Select "Environment Variables" from the left sidebar
4. Add each variable with its corresponding value
5. Make sure to select the appropriate environments (Production, Preview, Development)
6. Click "Save" to apply the changes

## 4. Redeploy Your Application

After setting up all environment variables, redeploy your application to apply the changes:

1. Go to your Vercel project dashboard
2. Click on "Deployments" in the left sidebar
3. Click "Redeploy" on your latest deployment or push a new commit to trigger a new deployment

## Troubleshooting

If images still don't appear after setting up Blob storage:

1. Check that your Media collection is properly configured to use Vercel Blob storage
2. Verify that all environment variables are correctly set
3. Check the Vercel deployment logs for any errors related to Blob storage
4. Try uploading a new image to see if it works with the new configuration
