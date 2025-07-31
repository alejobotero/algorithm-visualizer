# 🧠 Algorithm Visualizer

A dynamic, interactive web app that visualizes popular algorithms — including **sorting**, **tree traversal**, and **graph pathfinding (Dijkstra's Algorithm)** — using clean animations and modular JavaScript.

## 🔍 Features

- 🔢 **Sorting Algorithms** (e.g., Bubble Sort)
  - Visualized bar animations for sorting steps
  - Dynamically generated arrays
- 🌳 **Tree Traversal**
  - Animated Binary Tree generation (with future traversal options)
- 🧭 **Graph Visualization (Dijkstra’s Algorithm)**
  - Animated node/edge graphs using [vis.js](https://visjs.org)
  - Visual representation of shortest path logic (WIP or functional)
- 🎛️ **Dropdown-based Mode Selection**
  - Easily switch between Sorting / Tree / Graph visualizers
- 🧩 **Modular Design**
  - Clear separation of logic by algorithm type
  - Scalable structure for adding new algorithms

## 🏗️ How It Works

### 🔧 Project Setup
1. `index.html` is the entry point, containing:
   - Visualization container
   - Algorithm type dropdown
   - Script loader
2. `script.js` handles:
   - Mode switching
   - Calling functions from submodules (sorting.js, tree.js, graph.js)
3. Each algorithm has its own file and logic:
   - `sorting.js`
   - `tree.js`
   - `graph.js` (with Dijkstra implementation)

---

### ✨ Animation Strategy

#### ✅ Sorting
- Bars are DOM elements with dynamic heights
- Sorting steps trigger visual updates using `setTimeout` or async `sleep` functions to animate comparisons/swaps

#### ✅ Trees
- Vis.js used for rendering Binary Tree structures
- Future animations (like traversals) to be added using step-by-step visual updates

#### ✅ Graphs (Dijkstra)
- Nodes and edges are rendered using vis.js
- Start/end nodes are highlighted
- Shortest paths and visited nodes can be animated (or displayed incrementally)

---

## 📸 Screenshots
![Sorting Demo](./screenshots/sorting-demo.png)
![Graph Demo](./screenshots/graph-demo.png)

## 🚀 Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/algorithm-visualizer.git
cd algorithm-visualizer
# Open index.html in your browser
