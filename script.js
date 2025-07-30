import { bubbleSort, generateArray } from './sorting/bubbleSort.js';
// import { dijkstra } from './graphs/dijkstra.js';
import { buildBinaryTree } from './trees/binaryTree.js';

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function showSortingControls() {
  const controls = document.getElementById('mode-controls');
  controls.innerHTML = `
    <button id="generate-array-btn">Generate New Array</button>
    <button id="start-bubble-sort-btn">Start Bubble Sort</button>
  `;

  // Add event listeners to buttons
  document.getElementById('generate-array-btn').onclick = () => {
    generateArray();
  };

  document.getElementById('start-bubble-sort-btn').onclick = async () => {
    await bubbleSort();
  };
}

function showTreeControls() {
  const controls = document.getElementById('mode-controls');
  controls.innerHTML = `<button id="build-tree-btn">Build Binary Tree</button>`;
  document.getElementById('build-tree-btn').onclick = () => {
    buildBinaryTree();
  };
}

function showGraphControls() {
  const controls = document.getElementById('mode-controls');
  controls.innerHTML = `<button id="run-dijkstra-btn">Run Dijkstra</button>`;
  // Uncomment if dijkstra is imported
  /*
  document.getElementById('run-dijkstra-btn').onclick = () => {
    dijkstra();
  };
  */
}

function switchVisualizer(mode) {
  const container = document.getElementById('visualization-container');
  container.innerHTML = '';

  if (mode === 'sort') {
    generateArray();
    showSortingControls();
  } else if (mode === 'tree') {
    container.innerHTML = '';
    showTreeControls();
  } else if (mode === 'graph') {
    container.innerHTML = '';
    showGraphControls();
  }
}

window.switchVisualizer = switchVisualizer;

window.onload = () => {
  switchVisualizer('sort');  // Initialize with sorting mode controls visible, but no automatic sort
};
