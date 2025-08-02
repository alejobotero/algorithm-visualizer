import { bubbleSort } from './sorting/bubbleSort.js';
import { dijkstra } from './graphs/dijkstra.js';
import { buildBinaryTree } from './trees/binaryTree.js';
import { selectionSort } from './sorting/selectionSort.js'

let array = [];
const numBars = 50;

function generateArray() {
  array = [];
  const container = document.getElementById('visualization-container');
  container.innerHTML = '';

  for (let i = 0; i < numBars; i++) {
    const value = Math.floor(Math.random() * 300) + 20;
    array.push(value);

    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value}px`;
    bar.style.backgroundColor = 'steelblue';
    container.appendChild(bar);
  }
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function showSortingControls() {
  const controls = document.getElementById('mode-controls');
  controls.innerHTML = `
    <button id="generate-array-btn">Generate New Array</button>
    <button id="start-bubble-sort-btn">Start Bubble Sort</button>
    <button id="start-selection-sort-btn">Start Selection Sort</button>

  `;

  // Add event listeners to buttons
  document.getElementById('generate-array-btn').onclick = () => {
    generateArray();
  };

  document.getElementById('start-bubble-sort-btn').onclick = async () => {
    await bubbleSort(array);
  };


  document.getElementById('start-selection-sort-btn').onclick = async () => {
    await selectionSort(array);
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
  document.getElementById('run-dijkstra-btn').onclick = () => {
    dijkstra();
  };
  
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
