// Import the sleep function from the main script, used to pause between steps for animation
import { sleep } from '../script.js';

/**
 * Performs bubble sort on the given array and animates the sorting using bar heights and colors.
 * @param {number[]} array - The array of numbers to sort, which maps to the height of visual bars.
 */
export async function bubbleSort(array) {
  // Select all the bar elements displayed on the screen
  const bars = document.getElementsByClassName('bar');

  // Outer loop: iterate through the entire array, reducing the range each time
  for (let i = 0; i < array.length - 1; i++) {
    // Inner loop: compare each pair of adjacent elements in the unsorted portion
    for (let j = 0; j < array.length - i - 1; j++) {
      // Highlight the two bars currently being compared in red
      bars[j].style.backgroundColor = 'red';
      bars[j + 1].style.backgroundColor = 'red';

      // Pause for a short time so the color change and animation are visible
      await sleep(30);

      // If the current element is greater than the next one, swap them
      if (array[j] > array[j + 1]) {
        // Perform the swap in the data array
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        // Reflect the swap visually by updating the height of the bars
        bars[j].style.height = `${array[j]}px`;
        bars[j + 1].style.height = `${array[j + 1]}px`;
      }

      // Reset the color of the compared bars back to the default color (steelblue)
      bars[j].style.backgroundColor = 'steelblue';
      bars[j + 1].style.backgroundColor = 'steelblue';
    }

    // After each pass, the largest unsorted element is now correctly placed
    // Mark it green to indicate it's in its final sorted position
    bars[array.length - i - 1].style.backgroundColor = 'green';
  }

  // After the sorting is complete, mark the first element green as well
  bars[0].style.backgroundColor = 'green';
}
