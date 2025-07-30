import { sleep } from '../script.js';

let array = [];
const numBars = 50;

export function generateArray() {
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

export async function bubbleSort() {
  const bars = document.getElementsByClassName('bar');

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      bars[j].style.backgroundColor = 'red';
      bars[j + 1].style.backgroundColor = 'red';

      await sleep(30);

      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        bars[j].style.height = `${array[j]}px`;
        bars[j + 1].style.height = `${array[j + 1]}px`;
      }

      bars[j].style.backgroundColor = 'steelblue';
      bars[j + 1].style.backgroundColor = 'steelblue';
    }

    bars[array.length - i - 1].style.backgroundColor = 'green';
  }

  bars[0].style.backgroundColor = 'green';
}


