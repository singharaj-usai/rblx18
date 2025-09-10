# RCCService Thumbnail Generation Setup

## Prerequisites

1. RCCService.exe (2016 version)
2. Content folder with required assets
3. Node.js and npm installed

## Environment Setup

1. Create `.env` file in project root:
```env
RCC_PATH=C:\path\to\RCCService.exe
CONTENT_PATH=C:\path\to\content
```

2. Ensure `gameserver.txt` is in the same directory as RCCService.exe

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm run start
```

## Testing Thumbnail Generation

Use Postman or curl to test the endpoint:

```bash
curl -X POST http://localhost:80/thumbnail/render \
  -H "Content-Type: application/json" \
  -d '{"placeId": 1818, "width": 420, "height": 420, "format": "PNG"}'
```

## Vercel Deployment

1. Set environment variables in Vercel dashboard:
   - RCC_PATH
   - CONTENT_PATH

2. Deploy to Vercel:
```bash
vercel --prod
```

## Troubleshooting

1. If RCCService fails to start:
   - Check if paths in .env are correct
   - Ensure RCCService.exe has necessary permissions
   - Verify content folder structure

2. If thumbnails are not generating:
   - Check RCCService console output for errors
   - Verify gameserver.txt script is correct
   - Ensure content assets are accessible

3. For deployment issues:
   - Check Vercel deployment logs
   - Verify environment variables are set correctly
   - Ensure all required files are included in deployment