# 🌌 Desmos Graph Portfolio

An interactive, dynamic portfolio website for showcasing mathematical visualizations, simulations, and artwork created in **Desmos**.

Built for GitHub Pages with a focus on:
- clean design
- fast performance
- easy graph management
- interactive browsing experience

---

## 🚀 Live Site

jellyghost.github.io


---

## ✨ Features

### 🖼️ Interactive Graph Gallery
- Automatically loads graphs from `graphs.json`
- Search by title, tag, or description
- Filter by categories (tags)
- Responsive grid layout

### 📐 Individual Graph Pages
- Dedicated page per graph
- Embedded Desmos viewer
- Full description + tags
- Direct link to Desmos editor

### 🧠 Data-Driven System
- No hardcoded cards
- Add new graphs by editing one JSON file
- Fully scalable structure

### 🎨 Modern UI
- Glassmorphism design
- Animated background
- Smooth hover effects
- Mobile responsive layout

### ⚡ Lightweight Stack
- Pure HTML + CSS + JavaScript
- No frameworks
- Fast loading on all devices

--

## 📊 Graph Data Format

Each graph is stored in `graphs.json`:

```json
{
  "id": "lorenz-attractor",
  "title": "Lorenz Attractor",
  "description": "Chaotic system showing sensitive dependence on initial conditions.",
  "desmos": "https://www.desmos.com/calculator/xxxxx",
  "thumbnail": "assets/thumbnails/lorenz.png",
  "difficulty": "Advanced",
  "tags": ["Chaos", "Calculus", "Simulation"],
  "featured": true
}
