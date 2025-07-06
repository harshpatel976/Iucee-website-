const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  backupDir: 'original_images_backup',
  optimizedDir: 'optimized',
  publicDir: 'public',
  preferWebP: true // Set to false if you prefer JPG
};

// Create backup directory
const createBackup = () => {
  const backupPath = path.join(__dirname, config.backupDir);
  if (!fs.existsSync(backupPath)) {
    fs.mkdirSync(backupPath, { recursive: true });
    console.log(`📁 Created backup directory: ${backupPath}`);
  }
  return backupPath;
};

// Copy directory recursively
const copyDirectory = (src, dest) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const items = fs.readdirSync(src);
  
  for (const item of items) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);
    
    if (stat.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

// Replace images in a directory
const replaceImagesInDirectory = (originalDir, optimizedDir, backupDir) => {
  if (!fs.existsSync(originalDir) || !fs.existsSync(optimizedDir)) {
    return;
  }
  
  const items = fs.readdirSync(optimizedDir);
  
  for (const item of items) {
    const optimizedPath = path.join(optimizedDir, item);
    const stat = fs.statSync(optimizedPath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      const subOriginalDir = path.join(originalDir, item);
      const subOptimizedDir = path.join(optimizedDir, item);
      const subBackupDir = path.join(backupDir, item);
      
      replaceImagesInDirectory(subOriginalDir, subOptimizedDir, subBackupDir);
    } else {
      // Process individual files
      const ext = path.extname(item).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        const nameWithoutExt = path.parse(item).name;
        const originalExt = path.extname(fs.readdirSync(originalDir).find(f => 
          f.toLowerCase().startsWith(nameWithoutExt.toLowerCase()) && 
          ['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(f).toLowerCase())
        ) || '');
        
        if (originalExt) {
          const originalFileName = nameWithoutExt + originalExt;
          const originalPath = path.join(originalDir, originalFileName);
          const backupPath = path.join(backupDir, originalFileName);
          
          // Choose which optimized version to use
          let optimizedFile = item;
          if (config.preferWebP && ext === '.jpg') {
            const webpFile = nameWithoutExt + '.webp';
            const webpPath = path.join(optimizedDir, webpFile);
            if (fs.existsSync(webpPath)) {
              optimizedFile = webpFile;
            }
          }
          
          const optimizedPath = path.join(optimizedDir, optimizedFile);
          
          try {
            // Backup original
            if (fs.existsSync(originalPath)) {
              fs.copyFileSync(originalPath, backupPath);
              console.log(`💾 Backed up: ${originalFileName}`);
            }
            
            // Replace with optimized version
            fs.copyFileSync(optimizedPath, originalPath);
            console.log(`✅ Replaced: ${originalFileName} -> ${optimizedFile}`);
            
          } catch (error) {
            console.error(`❌ Error processing ${originalFileName}:`, error.message);
          }
        }
      }
    }
  }
};

// Main execution
const main = () => {
  console.log('🔄 Starting image replacement process...\n');
  
  const backupDir = createBackup();
  const optimizedDir = path.join(__dirname, config.optimizedDir);
  const publicDir = path.join(__dirname, config.publicDir);
  
  if (!fs.existsSync(optimizedDir)) {
    console.error('❌ Optimized images directory not found. Run "npm run optimize-images" first.');
    return;
  }
  
  // Process each directory
  const directories = ['events', 'achievements', 'Coremember', 'Projects'];
  
  for (const dir of directories) {
    const originalPath = path.join(publicDir, dir);
    const optimizedPath = path.join(optimizedDir, dir);
    const backupPath = path.join(backupDir, dir);
    
    if (fs.existsSync(originalPath) && fs.existsSync(optimizedPath)) {
      console.log(`\n📁 Processing ${dir}...`);
      
      // Backup original directory
      copyDirectory(originalPath, backupPath);
      console.log(`💾 Backed up ${dir} directory`);
      
      // Replace images
      replaceImagesInDirectory(originalPath, optimizedPath, backupPath);
    }
  }
  
  console.log('\n✅ Image replacement complete!');
  console.log(`📁 Original images backed up to: ${backupDir}`);
  console.log(`🎯 Optimized images now in use`);
  console.log(`\n💡 Next steps:`);
  console.log('1. Test your website to ensure everything works correctly');
  console.log('2. Check that images load faster');
  console.log('3. If satisfied, you can delete the backup directory');
  console.log('4. If issues arise, restore from backup: cp -r original_images_backup/* public/');
};

// Run the script
if (require.main === module) {
  main();
}

module.exports = { replaceImagesInDirectory, createBackup }; 