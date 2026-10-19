const fs = require('fs');
const md = fs.readFileSync('malaysia_63_duzhong_directory.md', 'utf8');
const ts = fs.readFileSync('src/data/schoolsData.ts', 'utf8');

// match all `code-id` in markdown table
const mdMatches = [...md.matchAll(/\|\s*\d+\s*\|\s*`([^`]+)`\s*\|\s*([^|]+)\s*\|/g)];
const mdList = mdMatches.map(m => ({ id: m[1].trim(), name_zh: m[2].trim() }));

const tsMatches = [...ts.matchAll(/school_id:\s*["']([^"']+)["']/g)];
const tsIds = tsMatches.map(m => m[1]);

console.log('Total in MD:', mdList.length);
console.log('Total in TS:', tsIds.length);

const missingInTs = mdList.filter(item => !tsIds.includes(item.id));
console.log('Missing in TS count:', missingInTs.length);
console.log('Missing list:', JSON.stringify(missingInTs, null, 2));
