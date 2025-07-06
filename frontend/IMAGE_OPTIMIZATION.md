# Image Optimization Guide

This guide will help you optimize images for faster loading times on your website.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Image Optimization
```bash
npm run optimize-images
```

This will:
- Compress all images in the `public` folder
- Convert images to WebP format (with JPG fallback)
- Resize images to optimal dimensions (max 1200x800)
- Create optimized versions in the `optimized` folder

## 📁 What Gets Optimized

The script processes images in these directories:
- `public/events/` - Event photos
- `public/achievements/` - Achievement images
- `public/Coremember/` - Core member photos
- `public/Projects/` - Project images

## 🔧 Configuration

You can modify the optimization settings in `optimize-images.js`:

```javascript
const config = {
  quality: 80,           // Image quality (0-100)
  maxWidth: 1200,        // Maximum width
  maxHeight: 800,        // Maximum height
  formats: ['webp', 'jpg'], // Output formats
  outputDir: 'optimized'     // Output directory
};
```

## 📊 Expected Results

Based on your current images:
- **Event photos**: 6-9MB → ~200-500KB (90%+ reduction)
- **Achievement images**: 100KB-1MB → ~50-200KB (70-80% reduction)
- **Overall**: 50-90% file size reduction

## 🔄 After Optimization

### 1. Review Optimized Images
Check the `optimized` folder to ensure quality is acceptable.

### 2. Replace Original Images
```bash
# Backup original images
cp -r public/events public/events_backup
cp -r public/achievements public/achievements_backup

# Replace with optimized versions
cp -r optimized/events public/events
cp -r optimized/achievements public/achievements
```

### 3. Update Image References (Optional)
The LazyImage component automatically detects WebP versions. If you want to explicitly use WebP:

```javascript
// Before
<img src="/events/Events1/photo1.JPG" alt="Event" />

// After (optional - LazyImage handles this automatically)
<LazyImage src="/events/Events1/photo1.jpg" alt="Event" />
```

## 🎯 Performance Benefits

### Before Optimization
- Event photos: 6-9MB each
- Page load time: 10-30 seconds
- Bandwidth usage: High

### After Optimization
- Event photos: 200-500KB each
- Page load time: 2-5 seconds
- Bandwidth usage: 90% reduction

## 🛠️ Lazy Loading

The `LazyImage` component provides:
- **Intersection Observer**: Images load only when needed
- **WebP Support**: Modern format with JPG fallback
- **Loading States**: Smooth transitions and placeholders
- **Error Handling**: Graceful fallbacks

### Usage
```javascript
import LazyImage from './components/LazyImage';

<LazyImage 
  src="/events/photo1.jpg" 
  alt="Event Photo"
  className="custom-class"
/>
```

## 📱 Responsive Images

For different screen sizes, consider creating multiple sizes:

```javascript
// Add to optimize-images.js config
const responsiveSizes = [
  { width: 400, suffix: '-small' },
  { width: 800, suffix: '-medium' },
  { width: 1200, suffix: '-large' }
];
```

## 🔍 Monitoring Performance

Use browser DevTools to monitor:
- Network tab: Image loading times
- Performance tab: Page load metrics
- Lighthouse: Overall performance score

## 🚨 Important Notes

1. **Backup First**: Always backup original images before optimization
2. **Test Quality**: Ensure optimized images meet your quality standards
3. **WebP Support**: Modern browsers support WebP, older browsers fall back to JPG
4. **CDN Consideration**: For production, consider using a CDN for even faster delivery

## 🆘 Troubleshooting

### Sharp Installation Issues
```bash
# On Windows
npm install --platform=win32 --arch=x64 sharp

# On macOS
npm install --platform=darwin --arch=x64 sharp
```

### Memory Issues
If you encounter memory errors with large images:
1. Reduce `maxWidth` and `maxHeight` in config
2. Process images in smaller batches
3. Increase Node.js memory limit: `node --max-old-space-size=4096 optimize-images.js`

### Quality Issues
If images look too compressed:
1. Increase `quality` setting (try 85-90)
2. Adjust `maxWidth` and `maxHeight`
3. Use progressive JPEG for better perceived quality

## 📈 Performance Metrics

After optimization, you should see:
- **First Contentful Paint**: 50-70% improvement
- **Largest Contentful Paint**: 60-80% improvement
- **Cumulative Layout Shift**: Reduced to near zero
- **Total Blocking Time**: Significant reduction

## 🔗 Additional Resources

- [WebP Format Guide](https://developers.google.com/speed/webp)
- [Image Optimization Best Practices](https://web.dev/fast/#optimize-your-images)
- [Lazy Loading Implementation](https://web.dev/lazy-loading-images/) 