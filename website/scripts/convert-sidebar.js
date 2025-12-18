const fs = require('fs');
const p = 'docs/api/sidebar.ts';
if (!fs.existsSync(p)) {
  console.error('source not found', p);
  process.exit(2);
}
let s = fs.readFileSync(p, 'utf8');
// remove Type-only import line
s = s.replace(/import type[\s\S]*?;\n/, '');
// replace typed const with plain const
s = s.replace(/const sidebar: [^=]*= /, 'const sidebar = ');
// replace export default with module.exports
s = s.replace(/export default sidebar.apisidebar;\s*$/, 'module.exports = sidebar.apisidebar;\n');
fs.writeFileSync('docs/api/sidebar.cjs', s);
console.log('wrote docs/api/sidebar.cjs');
