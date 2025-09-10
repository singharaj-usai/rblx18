import { spawn } from 'child_process';
import path from 'path';

interface ThumbnailOptions {
  placeId: number;
  width: number;
  height: number;
  format: string;
}

export class ThumbnailGenerator {
  private rccPath: string;
  private contentPath: string;

  constructor() {
    // Configure paths for RCCService and content
    this.rccPath = process.env.RCC_PATH || path.join(process.cwd(), 'RCCService.exe');
    this.contentPath = process.env.CONTENT_PATH || path.join(process.cwd(), 'content');
  }

  public async generateThumbnail(options: ThumbnailOptions): Promise<string> {
    const { placeId, width, height, format } = options;

    return new Promise((resolve, reject) => {
      // Prepare RCCService command with 2016 parameters
      const rcc = spawn(this.rccPath, [
        '-content:' + this.contentPath,
        '-placeid:' + placeId,
        '-script:gameserver.txt',
        '-verbose',
        '-console'
      ]);

      let output = '';
      let errorOutput = '';

      rcc.stdout.on('data', (data) => {
        const chunk = data.toString();
        output += chunk;

        // Look for base64 thumbnail data in output
        if (chunk.includes('data:image/png;base64,')) {
          const base64Data = chunk.split('data:image/png;base64,')[1].trim();
          resolve(base64Data);
          rcc.kill();
        }
      });

      rcc.stderr.on('data', (data) => {
        errorOutput += data.toString();
      });

      rcc.on('error', (error) => {
        reject(new Error(`Failed to start RCCService: ${error.message}`));
      });

      rcc.on('close', (code) => {
        if (code !== 0 && !output.includes('data:image/png;base64,')) {
          reject(new Error(`RCCService exited with code ${code}\nError: ${errorOutput}`));
        }
      });
    });
  }
}

export const thumbnailGenerator = new ThumbnailGenerator();