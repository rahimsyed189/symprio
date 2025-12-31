import fs from 'fs';
import { createCanvas } from 'canvas';

// Create banner 1 - Blue gradient
const c1 = createCanvas(1920, 600);
const ctx1 = c1.getContext('2d');
const gradient1 = ctx1.createLinearGradient(0, 0, 0, 600);
gradient1.addColorStop(0, '#1E3A8A');
gradient1.addColorStop(1, '#3B82F6');
ctx1.fillStyle = gradient1;
ctx1.fillRect(0, 0, 1920, 600);
fs.writeFileSync('public/banner-1.jpg', c1.toBuffer('image/jpeg'));

// Create banner 2 - Purple to Blue gradient
const c2 = createCanvas(1920, 600);
const ctx2 = c2.getContext('2d');
const gradient2 = ctx2.createLinearGradient(0, 0, 0, 600);
gradient2.addColorStop(0, '#8B5CF6');
gradient2.addColorStop(1, '#3B82F6');
ctx2.fillStyle = gradient2;
ctx2.fillRect(0, 0, 1920, 600);
fs.writeFileSync('public/banner-2.jpg', c2.toBuffer('image/jpeg'));

// Create banner 3 - Cyan to Dark Blue gradient
const c3 = createCanvas(1920, 600);
const ctx3 = c3.getContext('2d');
const gradient3 = ctx3.createLinearGradient(0, 0, 0, 600);
gradient3.addColorStop(0, '#00D4FF');
gradient3.addColorStop(1, '#1E3A8A');
ctx3.fillStyle = gradient3;
ctx3.fillRect(0, 0, 1920, 600);
fs.writeFileSync('public/banner-3.jpg', c3.toBuffer('image/jpeg'));

console.log('✅ Banners created successfully!');
console.log('  - banner-1.jpg (Blue gradient)');
console.log('  - banner-2.jpg (Purple to Blue)');
console.log('  - banner-3.jpg (Cyan to Dark Blue)');
