const fs = require('fs');
const content = fs.readFileSync('src/data/schoolsData.ts', 'utf8');

// Parse school blocks
const lines = content.split('\n');
const schools = [];
let currentSchool = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const idMatch = line.match(/school_id:\s*["']([^"']+)["']/);
  if (idMatch) {
    if (currentSchool) {
      schools.push(currentSchool);
    }
    currentSchool = {
      id: idMatch[1],
      name_zh: '',
      state: '',
      hasIntake: false,
      startLine: i
    };
  }
  if (currentSchool) {
    const zhMatch = line.match(/name_zh:\s*["']([^"']+)["']/);
    if (zhMatch && !currentSchool.name_zh) {
      currentSchool.name_zh = zhMatch[1];
    }
    const stateMatch = line.match(/state:\s*["']([^"']+)["']/);
    if (stateMatch && !currentSchool.state) {
      currentSchool.state = stateMatch[1];
    }
    if (line.includes('admission_intake:')) {
      currentSchool.hasIntake = true;
    }
  }
}
if (currentSchool) schools.push(currentSchool);

console.log('Total schools in file:', schools.length);
const withIntake = schools.filter(s => s.hasIntake);
const withoutIntake = schools.filter(s => !s.hasIntake);

console.log('With intake:', withIntake.length);
console.log('Without intake:', withoutIntake.length);
console.log('\nSchools with intake:');
withIntake.forEach(s => console.log(`- [${s.state}] ${s.name_zh} (${s.id})`));

console.log('\nSchools WITHOUT intake:');
withoutIntake.forEach(s => console.log(`- [${s.state}] ${s.name_zh} (${s.id})`));
