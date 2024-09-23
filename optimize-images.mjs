import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import path from 'path';
import fs from 'fs';

const publicImagesDir = path.join(process.cwd(), 'public');
const outputDir = path.join(process.cwd(), 'public');

const optimizeImages = async () => {
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = await imagemin([`${publicImagesDir}/*.{jpg,jpeg,png,webp}`], {
    destination: outputDir,
    plugins: [
      imageminMozjpeg({ quality: 75 }),
      imageminPngquant({
        quality: [0.6, 0.8]
      }),
      imageminWebp({ quality: 75 })
    ]
  });

  files.forEach(file => {
    console.log(`Optimized: ${file.sourcePath} -> ${file.destinationPath}`);
    console.log(`Size: ${file.data.length} bytes`);
  });
};

optimizeImages();
