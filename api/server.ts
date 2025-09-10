import express from 'express';
import path from 'path';
import { Buffer } from 'buffer';
import { thumbnailGenerator } from './services/thumbnailGenerator';

const app = express();
const port = process.env.PORT || 80;

// RCCService Settings endpoint
app.get('/Setting/QuietGet/RCCService:accessKey', (req, res) => {
  const settings = {
    DFIntTaskSchedulerTargetFps: "60",
    FFlagHandleAltEnterFullscreen: "False",
    DFIntS2PhysicsSenderRate: "250",
    FFlagDebugDisableOTAMaterialTexture: "True",
    FFlagFixGraphicsQuality: "True",
    FFlagDisableNewIGMinDUA: "True",
    DFFlagDebugPauseVoxelizer: "True",
    FFlagEnableQuickGameLaunch: "False",
    FFlagPreloadAllFonts: "True"
  };
  res.type('application/json').send(JSON.stringify(settings));
});

// Version Compatibility endpoints
app.get('/GetAllowedSecurityVersions', (req, res) => {
  const versions = [
    "0.1.2",
    "0.1.3",
    "0.1.4",
    "0.2.0",
    "0.2.1",
    "0.3.0"
  ];
  res.type('application/json').send(JSON.stringify(versions));
});

app.get('/GetAllowedMD5Hashes', (req, res) => {
  const hashes = [
    "d41d8cd98f00b204e9800998ecf8427e",
    "e10adc3949ba59abbe56e057f20f883e",
    "098f6bcd4621d373cade4e832627b4f6",
    "21232f297a57a5a743894a0e4a801fc3"
  ];
  res.type('application/json').send(JSON.stringify(hashes));
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Thumbnail rendering endpoint
app.post('/thumbnail/render', async (req, res) => {
  try {
    const { placeId = 1818, width = 420, height = 420, format = 'PNG' } = req.body;
    
    // Generate thumbnail using RCCService
    const thumbnailData = await thumbnailGenerator.generateThumbnail({
      placeId,
      width,
      height,
      format
    });
    
    // Convert base64 to buffer
    const imageBuffer = Buffer.from(thumbnailData, 'base64');
    
    // Set appropriate headers
    res.set({
      'Content-Type': 'image/png',
      'Content-Length': imageBuffer.length,
      'Cache-Control': 'public, max-age=3600'
    });

    return res.send(imageBuffer);
  } catch (error) {
    console.error('Thumbnail generation error:', error);
    return res.status(500).json({ error: 'Failed to generate thumbnail' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});