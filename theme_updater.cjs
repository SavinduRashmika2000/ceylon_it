const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

const replacements = {
  'bg-slate-800': 'bg-surface',
  'bg-slate-900': 'bg-surface-dark',
  'bg-slate-900/50': 'bg-surface-dark/50',
  'border-slate-800': 'border-border-color',
  'border-slate-700': 'border-border-color-hover',
  'text-white': 'text-text-main', // Replace 'text-text-light' to avoid confusion if used differently
  'text-slate-300': 'text-text-muted',
  'text-slate-400': 'text-text-muted-dark',
  'bg-black': 'bg-bg-dark', // Usually black is the background layer
};

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace text-text-light with text-text-main first for consistency
  content = content.replace(/\btext-text-light\b/g, 'text-text-main');

  for (const [oldClass, newClass] of Object.entries(replacements)) {
    // using regex to match whole words/classes only
    // Need to handle cases with / carefully (e.g. bg-slate-900/50)
    const escapedOld = oldClass.replace(/\//g, '\\/');
    const regex = new RegExp(`\\b${escapedOld}\\b`, 'g');
    content = content.replace(regex, newClass);
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
