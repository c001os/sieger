const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outputDirs = [
  'public/media/food',
  'public/media/food/specials',
  'public/media/drinks',
  'public/media/drinks/specials',
  'public/media/gallery',
  'public/media/interior',
  'public/media/starting11',
  'public/media/teams',
  'public/media/logos',
  'public/media/icons',
  'public/documents'
];

outputDirs.forEach(dir => fs.mkdirSync(dir, { recursive: true }));

function safeName(name) {
  return name.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
}

function processImages(inputDir, outputDir, width = 800) {
  if (!fs.existsSync(inputDir)) return;
  const files = fs.readdirSync(inputDir);
  for (const file of files) {
    const fullPath = path.join(inputDir, file);
    if (fs.statSync(fullPath).isDirectory()) continue;
    if (!/\.(jpg|jpeg|png)$/i.test(file)) continue;

    const baseName = path.basename(file, path.extname(file));
    const newName = safeName(baseName);
    const outputPath = path.join(outputDir, `${newName}.webp`);

    console.log(`Converting ${fullPath} to ${outputPath}`);
    try {
      execSync(`cwebp -resize ${width} 0 -q 80 "${fullPath}" -o "${outputPath}"`, { stdio: 'ignore' });
    } catch (e) {
      console.error(`Failed to convert ${fullPath}`);
    }
  }
}

// Food
processImages('lead/Képek/Étel', 'public/media/food', 800);
processImages('lead/Képek/Étel/Hét különlegességei', 'public/media/food/specials', 800);

// Drinks
processImages('lead/Képek/Ital', 'public/media/drinks', 1920);
processImages('lead/Képek/Ital/Ital specialitások', 'public/media/drinks/specials', 800);

// Interior & Gallery
processImages('lead/Képek/Beltér', 'public/media/interior', 1920);
processImages('lead/Képek/Galéria', 'public/media/gallery', 1920);

// Starting 11
processImages('lead/Kezdő 11/Képek', 'public/media/starting11', 800);
processImages('lead/Kezdő 11/Csapatok', 'public/media/teams', 400);

// Copy Logos and Icons
function copyFiles(inputDir, outputDir, extRegex) {
  if (!fs.existsSync(inputDir)) return;
  const files = fs.readdirSync(inputDir);
  for (const file of files) {
    if (extRegex.test(file)) {
      const newName = safeName(path.basename(file, path.extname(file))) + path.extname(file).toLowerCase();
      fs.copyFileSync(path.join(inputDir, file), path.join(outputDir, newName));
      console.log(`Copied ${file} to ${newName}`);
    }
  }
}

copyFiles('lead/Logo', 'public/media/logos', /\.(png|svg)$/i);
copyFiles('lead/Ikonok', 'public/media/icons', /\.(png|svg)$/i);
copyFiles('lead/Étlap', 'public/documents', /\.pdf$/i);

console.log('Asset processing complete.');
