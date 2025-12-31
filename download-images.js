import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filename);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✅ Downloaded: ${filename}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url} - Status: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
};

const images = [
  {
    url: 'https://officeprivacy.com/cdn/shop/files/iStock-1358416956_2.jpg?v=1663695564&width=1500',
    filename: 'public/banner-1.jpg',
    name: 'RPA Automation'
  },
  {
    url: 'https://img.freepik.com/premium-photo/laptop-conference-table_700248-13199.jpg',
    filename: 'public/banner-2.jpg',
    name: 'Business Technology'
  },
  {
    url: 'https://wallpaperaccess.com/full/9262561.jpg',
    filename: 'public/banner-3.jpg',
    name: 'Digital Transformation'
  }
];

async function downloadAll() {
  try {
    console.log('🔄 Downloading robotic/automation images...\n');
    for (const img of images) {
      await downloadImage(img.url, img.filename);
    }
    console.log('\n✅ All images downloaded successfully!');
  } catch (error) {
    console.error('❌ Error downloading images:', error.message);
  }
}

downloadAll();
