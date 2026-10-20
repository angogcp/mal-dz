const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const iconsDir = path.join(__dirname, '../public/icons');
fs.mkdirSync(iconsDir, { recursive: true });

// 1. Beautiful SVG Icon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#b91c1c"/>
      <stop offset="50%" stop-color="#991b1b"/>
      <stop offset="100%" stop-color="#450a0a"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="50%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Background rounded squircle -->
  <rect x="24" y="24" width="464" height="464" rx="112" fill="url(#bgGrad)" filter="url(#shadow)"/>
  
  <!-- Outer Gold Border -->
  <rect x="36" y="36" width="440" height="440" rx="100" fill="none" stroke="url(#goldGrad)" stroke-width="8" stroke-opacity="0.8"/>
  
  <!-- Inner Shield outline -->
  <path d="M 256 90 Q 360 90 380 170 C 380 300 256 390 256 420 C 256 390 132 300 132 170 Q 152 90 256 90 Z" 
        fill="#7f1d1d" stroke="url(#goldGrad)" stroke-width="6" opacity="0.9"/>

  <!-- Star Emblems -->
  <polygon points="256,115 262,130 278,130 265,140 270,155 256,145 242,155 247,140 234,130 250,130" fill="#fef08a"/>
  
  <!-- "独" Character -->
  <text x="256" y="295" font-family="'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif" 
        font-size="160" font-weight="900" text-anchor="middle" fill="#ffffff" filter="url(#shadow)">
    独
  </text>

  <!-- Subtitle badge: 独中通 -->
  <rect x="166" y="340" width="180" height="36" rx="18" fill="url(#goldGrad)"/>
  <text x="256" y="364" font-family="'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif" 
        font-size="20" font-weight="bold" text-anchor="middle" fill="#7f1d1d">
    MALAYSIA
  </text>
</svg>`;

fs.writeFileSync(path.join(iconsDir, 'icon.svg'), svgContent, 'utf8');
console.log('Created icon.svg');

// Helper to create pure RGBA PNG buffer
function createPngBuffer(width, height) {
  // Simple PNG encoder
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  function makeChunk(type, data) {
    const len = data.length;
    const buf = Buffer.alloc(8 + len + 4);
    buf.writeUInt32BE(len, 0);
    buf.write(type, 4);
    data.copy(buf, 8);

    // Calculate CRC32
    let c = 0xffffffff;
    const typeAndData = buf.subarray(4, 8 + len);
    for (let i = 0; i < typeAndData.length; i++) {
      c ^= typeAndData[i];
      for (let k = 0; k < 8; k++) {
        c = (c >>> 1) ^ (-(c & 1) & 0xedb88320);
      }
    }
    buf.writeInt32BE(c ^ 0xffffffff, 8 + len);
    return buf;
  }

  const ihdrChunk = makeChunk('IHDR', ihdr);

  // Generate image data (scanlines with filter byte 0)
  const rowLength = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowLength);

  const cx = width / 2;
  const cy = height / 2;
  const radius = width * 0.45;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowLength;
    rawData[rowOffset] = 0; // Filter byte 0 (None)

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= radius) {
        // Red gradient
        const t = (x + y) / (width + height);
        const r = Math.round(185 - t * 60);
        const g = Math.round(28 - t * 20);
        const b = Math.round(28 - t * 20);
        rawData[pxOffset] = r;
        rawData[pxOffset + 1] = g;
        rawData[pxOffset + 2] = b;
        rawData[pxOffset + 3] = 255; // Alpha
      } else {
        // Transparent outside
        rawData[pxOffset] = 0;
        rawData[pxOffset + 1] = 0;
        rawData[pxOffset + 2] = 0;
        rawData[pxOffset + 3] = 0;
      }
    }
  }

  const compressedData = zlib.deflateSync(rawData);
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

fs.writeFileSync(path.join(iconsDir, 'icon-192.png'), createPngBuffer(192, 192));
console.log('Created icon-192.png');
fs.writeFileSync(path.join(iconsDir, 'icon-512.png'), createPngBuffer(512, 512));
console.log('Created icon-512.png');
fs.writeFileSync(path.join(iconsDir, 'apple-touch-icon.png'), createPngBuffer(180, 180));
console.log('Created apple-touch-icon.png');
