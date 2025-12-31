import fs from 'fs';
import http from 'http';
import https from 'https';
import path from 'path';

const downloadImages = async () => {
  const images = [
    {
      url: 'https://www.symprio.com/wp-content/uploads/2024/06/vilhelm.png',
      filename: 'vilhelm.png'
    },
    {
      url: 'https://www.symprio.com/wp-content/uploads/2024/06/Prabin-removebg-preview.png',
      filename: 'prabin.png'
    },
    {
      url: 'https://www.symprio.com/wp-content/uploads/2024/06/vivek.png',
      filename: 'vivek.png'
    },
    {
      url: 'https://www.symprio.com/wp-content/uploads/2025/07/Dushy.jpg',
      filename: 'dushyanth.jpg'
    }
  ];

  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  for (const image of images) {
    const filepath = path.join(publicDir, image.filename);

    await new Promise((resolve, reject) => {
      const protocol = image.url.startsWith('https') ? https : http;
      const file = fs.createWriteStream(filepath);

      protocol
        .get(image.url, { 
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
        }, (response) => {
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`✅ Downloaded: ${image.filename}`);
            resolve();
          });
        })
        .on('error', (err) => {
          fs.unlink(filepath, () => {});
          console.error(`❌ Failed to download ${image.filename}: ${err.message}`);
          reject(err);
        });
    }).catch(err => console.error(err));
  }

  console.log('✅ All team member images downloaded!');
};

downloadImages();
