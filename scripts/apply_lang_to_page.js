const fs = require('fs');
const path = require('path');

const pageFile = path.join(__dirname, '../src/app/page.tsx');
let content = fs.readFileSync(pageFile, 'utf8');

// Replace compareList.map in comparator table
content = content.replace(/compareList\.map\(\(sch\)/g, 'activeCompareList.map((sch)');

// Replace activeModalSchool inside modal (lines after {/* MODAL: SCHOOL DETAIL VIEW */})
const modalMarker = '{/* MODAL: SCHOOL DETAIL VIEW */}';
const parts = content.split(modalMarker);
if (parts.length === 2) {
  let modalPart = parts[1];
  // Replace activeModalSchool. with modalSchool.
  modalPart = modalPart.replace(/activeModalSchool\./g, 'modalSchool.');
  content = parts[0] + modalMarker + modalPart;
}

// In the Share modal call:
content = content.replace(
  '<ShareComparisonModal\n        isOpen={isShareOpen}\n        onClose={() => setIsShareOpen(false)}\n        schools={compareList}\n      />',
  '<ShareComparisonModal\n        isOpen={isShareOpen}\n        onClose={() => setIsShareOpen(false)}\n        schools={activeCompareList}\n      />'
);

fs.writeFileSync(pageFile, content, 'utf8');
console.log('Successfully applied activeCompareList and modalSchool to page.tsx!');
