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

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

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

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `build` folder ready for deployment.

### Deploy Options

- **Netlify** - Drag and drop the build folder
- **Vercel** - Connect your GitHub repo for automatic deployments
- **GitHub Pages** - Use `gh-pages` package for easy deployment
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
