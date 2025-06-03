# Box Breathing App 🫁

A beautiful, meditative breathing exercise app built with React. Guide your breath through the calming 4-4-4-4 box breathing pattern with smooth, synchronized animations.

![Box Breathing Demo](https://via.placeholder.com/800x400/1e293b/ffffff?text=Box+Breathing+App+Demo)

## ✨ Features

- **Perfect Timing Synchronization** - Visual animations match exactly with the 4-second breathing phases
- **Meditative Design** - Dark, calming interface with smooth gradients and gentle glows
- **Organic Animations** - Circle expands and contracts like natural breathing
- **User-Controlled Start** - Begin your session when you're ready
- **Phase Indicators** - Clear visual progress through each breathing stage
- **Responsive Design** - Works beautifully on all screen sizes

## 🎯 What is Box Breathing?

Box breathing (also known as square breathing) is a powerful stress-relief technique used by Navy SEALs, athletes, and mindfulness practitioners. The pattern is simple:

1. **Inhale** for 4 seconds
2. **Hold** for 4 seconds  
3. **Exhale** for 4 seconds
4. **Hold** for 4 seconds

This creates a "box" pattern that helps calm the nervous system, reduce stress, and improve focus.

## 🚀 Quick Start

### 🌐 **Option 1: Run Directly in Browser (No Installation)**

**Easiest way to try it out:**

1. **Download the standalone file:**
   - Right-click on [`index.html`](index.html) and "Save As" 
   - Or visit the [GitHub Pages demo](https://yourusername.github.io/box-breathing-app/)

2. **Open in your browser:**
   - Double-click the downloaded `index.html` file
   - Or drag it into any web browser
   - Works offline once downloaded!

**Perfect for:**
- Quick testing without setup
- Sharing with others easily  
- Running on any device with a browser
- Offline use

### 💻 **Option 2: Full Development Setup**

**For developers who want to customize:**

1. Clone the repository:
```bash
git clone https://github.com/yourusername/box-breathing-app.git
cd box-breathing-app
```

2. Install dependencies:
```bash
npm install
```

3. Install required packages:
```bash
npm install lucide-react
```

4. Start the development server:
```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000`

## 🛠️ Built With

**Standalone Version:**
- **Vanilla HTML/JavaScript** - No build tools needed
- **React via CDN** - Loaded from CDN for simplicity
- **Tailwind CSS via CDN** - Styling without compilation
- **Browser APIs** - Uses modern CSS transitions

**Development Version:**
- **React** - Frontend framework
- **Tailwind CSS** - Styling and animations
- **Lucide React** - Icons
- **CSS Transitions** - Smooth, performance-optimized animations

## 📱 How to Use

1. **Open the app** - You'll see a calm, neutral breathing circle
2. **Click "Start Breathing"** - Begin when you're ready to focus
3. **Follow the visual guide** - The circle will expand and contract with perfect timing
4. **Match your breath** - Inhale as it grows, exhale as it shrinks
5. **Stay present** - Use the timer and color cues to maintain rhythm

## 🎨 Animation Details

The app features carefully crafted animations that create a living, breathing experience:

- **Inhale Phase** - Circle smoothly expands over 4 seconds with blue coloring
- **Hold (Full)** - Maintains expanded size with green coloring  
- **Exhale Phase** - Circle gently contracts over 4 seconds with red coloring
- **Hold (Empty)** - Stays contracted with yellow coloring

All transitions use `cubic-bezier` easing for natural, organic motion.

## 🔧 Development

### Project Structure

```
src/
├── App.js              # Main BoxBreathing component
├── index.js           # React entry point
└── index.css          # Global styles
```

### Key Components

- **Timer Logic** - Precise 4-second intervals for each phase
- **Animation System** - CSS transforms with conditional timing
- **State Management** - React hooks for phase and timer control
- **Responsive Design** - Tailwind utilities for all screen sizes

### Customization

You can easily customize the breathing pattern by modifying these values in `App.js`:

```javascript
// Change timing (currently 4 seconds each phase)
const PHASE_DURATION = 4;

// Modify scale values for expansion/contraction
const EXPANDED_SCALE = 1.5;
const CONTRACTED_SCALE = 0.7;

// Adjust colors for each phase
const PHASE_COLORS = {
  inhale: 'rgba(59, 130, 246, 0.4)',    // Blue
  holdFull: 'rgba(34, 197, 94, 0.4)',   // Green  
  exhale: 'rgba(239, 68, 68, 0.4)',     // Red
  holdEmpty: 'rgba(234, 179, 8, 0.4)'   // Yellow
};
```

## 🚀 Deployment

### Option 1: GitHub Pages (Standalone Version)

The `index.html` file can be deployed directly to GitHub Pages:

1. Push the `index.html` file to your repository
2. Go to Settings → Pages in your GitHub repo
3. Select "Deploy from a branch" and choose `main`
4. Your app will be live at `https://yourusername.github.io/repository-name`

### Option 2: Build and Deploy (React Version)

**Build for Production:**

```bash
npm run build
```

This creates an optimized build in the `build` folder.

**Deploy Options:**

- **Netlify** - Drag and drop the build folder
- **Vercel** - Connect your GitHub repo for automatic deployments
- **GitHub Pages** - Use `gh-pages` package for the built version
- **Surge** - Simple command-line deployment

## 🤝 Contributing

Contributions are welcome! Here are some ideas:

- **Different breathing patterns** (4-7-8 breathing, triangle breathing)
- **Sound integration** (breathing sounds, ambient music)
- **Session tracking** (count completed cycles)
- **Themes** (different color schemes, seasonal themes)
- **Accessibility improvements** (screen reader support, keyboard navigation)

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by meditation and mindfulness practices
- Box breathing technique used by Navy SEALs and athletes
- Built with modern React and CSS animation best practices

## 📞 Support

If you have any questions or run into issues:

- Open an [issue](https://github.com/yourusername/box-breathing-app/issues)
- Check out the [discussions](https://github.com/yourusername/box-breathing-app/discussions)
- Star ⭐ the repo if you find it helpful!

---

**Take a deep breath and enjoy your practice! 🧘‍♀️**