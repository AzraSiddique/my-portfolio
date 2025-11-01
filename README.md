# 💼 Personal Portfolio

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**A modern, responsive, and blazing-fast personal portfolio website showcasing full-stack development and UX design expertise.**

[View Live Demo](#) • [Report Bug](https://github.com/AzraSiddique/portfolio/issues) • [Request Feature](https://github.com/AzraSiddique/portfolio/issues)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

---

## 🎯 About

This portfolio website is a modern, single-page application built with cutting-edge web technologies. It showcases my skills, featured projects, certifications, and contact information — all optimized for performance, maintainability, and an exceptional user experience.

### Why This Stack?

- ⚡ **Vite** - Lightning-fast builds with Hot Module Replacement (HMR)
- ⚛️ **React 19** - Latest version with improved performance and features
- 🎨 **Tailwind CSS** - Utility-first styling for rapid UI development
- 🚀 **Optimized** - PostCSS + Autoprefixer for cross-browser compatibility
- 📱 **Responsive** - Mobile-first design that works on all devices

---

## ✨ Features

### Core Functionality
- ✅ **Infinite Project Carousel** - Auto-scrolling featured projects showcase
- ✅ **Interactive Case Studies** - Detailed project breakdowns with modal views
- ✅ **Dynamic Filtering** - Filter projects by Full-Stack or UX Design
- ✅ **Smooth Animations** - Intersection Observer-based scroll animations
- ✅ **Custom Cursor Effect** - Enhanced desktop experience
- ✅ **Scroll Progress Indicator** - Visual tracking of page position
- ✅ **Responsive Navigation** - Touch-friendly mobile menu

### Design Features
- 🎨 Glassmorphism effects and gradient backgrounds
- 🌙 Modern dark theme design
- ✨ Micro-interactions and hover animations
- 💫 Animated grid background patterns
- 🎯 Section-based content organization

### Technical Features
- ⚡ Lightning-fast build with Vite
- 🔧 Modular React component architecture
- 📦 Clean and scalable file structure
- 🎯 SEO-friendly with semantic HTML
- ♿ Accessibility-focused design
- 🚀 Production-ready and deployment-optimized

---

## 🛠️ Tech Stack

| **Category** | **Tools / Libraries** |
|--------------|----------------------|
| **Framework** | [React 19](https://react.dev/) |
| **Build Tool** | [Vite (7.x)](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS 3.4.18](https://tailwindcss.com/) |
| **CSS Tools** | [PostCSS 8](https://postcss.org/), [Autoprefixer 10](https://github.com/postcss/autoprefixer) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Package Manager** | npm |
| **Deployment** | Vercel / Netlify |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

Check your versions:

```bash
node --version
npm --version
```

### Installation

**1️⃣ Clone the repository**

If you've already pushed this project to a Git remote, clone it with your repository URL. Otherwise, skip this step and run the commands locally after you initialize git.

```bash
# Example (replace with your repo URL):
git clone https://github.com/<your-username>/<your-repo>.git
cd my-portfolio
```

**2️⃣ Install dependencies**

```bash
npm install
```

### Running the App

**Development server**

```bash
npm run dev
```

Your app will be running at **http://localhost:5173** 🎉

**Build for production**

```bash
npm run build
```

**Preview production build**

```bash
npm run preview
```

---

## 📁 Project structure

```
my-portfolio/
├── public/
│   └── favicon.ico               # static assets served as-is
├── src/
│   ├── assets/                   # images, illustrations, logos, etc.
│   ├── components/               # presentational + container React components
│   │   ├── Portfolio.jsx         # main portfolio page & hero section
│   │   ├── ProjectsSection.jsx   # featured + all projects UI
│   │   ├── OtherSections.jsx     # About, Skills, Certifications, Contact sections
│   │   ├── CaseStudyModal.jsx    # modal for project case studies
│   │   └── projectsData.js       # project metadata used by components
│   ├── App.jsx                   # root application component (router / layout)
│   ├── App.css                   # small component-level helpers (logo animation, layout limits)
│   ├── main.jsx                  # application entry (mount React app)
│   └── index.css                 # Tailwind directives + any global overrides
├── .gitignore                    # generated files and folders to ignore (node_modules, dist, .env)
├── index.html                    # HTML entry used by Vite
├── package.json                  # dependencies + scripts
├── postcss.config.cjs            # PostCSS setup (tailwindcss, autoprefixer)
├── tailwind.config.cjs           # Tailwind CSS configuration (content paths, theme extend)
├── vite.config.js                # Vite configuration and plugins
├── README.md                     # project documentation (this file)
└── LICENSE                       # license file (MIT)
```

Notes:
- `src/index.css` is where Tailwind's `@tailwind base/components/utilities` are imported — most styling is handled by Tailwind utilities.
- `src/App.css` contains a few small, component-level styles (logo animation, layout max-width, `.card`, helper classes) — included in the README so recruiters can quickly see what's inside.
- Add any extra top-level folders you plan to include (for example `scripts/`, `tools/`, or `ci/`) and update this section accordingly.

---

## ⚙️ Configuration

### Tailwind CSS Setup

Tailwind is integrated using PostCSS and Autoprefixer for optimal cross-browser support. The project uses CommonJS config files (`.cjs`) — see examples below which match the files in the repo (`tailwind.config.cjs`, `postcss.config.cjs`).

**tailwind.config.cjs**

```js
// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**postcss.config.cjs**

```js
// postcss.config.cjs
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**src/index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
```

### Vite Configuration

The project uses default Vite configuration with React plugin. Modify `vite.config.js` for custom build settings.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

**Option 1: Via Vercel Dashboard**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"** → Import your GitHub repository
4. Vercel auto-detects Vite configuration
5. Click **"Deploy"**

**Option 2: Via Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Build the project
npm run build

# Deploy
vercel
```

### Deploy to Netlify

**Option 1: Drag & Drop**

```bash
# Build the project
npm run build

# Drag and drop the dist/ folder to netlify.com/drop
```

**Option 2: Netlify CLI**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 📧 Contact

**Mohammed Azra Ahamed Siddique**

- 📧 Email: [azrasiddique3483@gmail.com](mailto:azrasiddique3483@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- 🐙 GitHub: [github.com/AzraSiddique](https://github.com/AzraSiddique)
- 🌐 Portfolio: [yourportfolio.com](https://yourportfolio.com)

**Project Repository**: [github.com/AzraSiddique/portfolio](https://github.com/AzraSiddique/portfolio)

---

## 🙏 Acknowledgements

- [React Documentation](https://react.dev/) - Official React docs and guides
- [Vite Documentation](https://vitejs.dev/) - Build tool documentation
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icon library
- [Vercel](https://vercel.com/) - Deployment and hosting platform
- [Awwwards](https://www.awwwards.com/) - Design inspiration
- [Awesome README Templates](https://github.com/matiassingers/awesome-readme) - README inspiration

---

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

**⭐ Star this repo if you found it helpful!**

**Made with ❤️ by [Mohammed Azra Ahamed Siddique](https://github.com/AzraSiddique)**

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=AzraSiddique.portfolio)