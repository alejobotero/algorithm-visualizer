// Import the sleep function from the main script for animation delay
import { sleep } from '../script.js';

/**
 * Performs selection sort on the array and updates the bar chart to visualize each step.
 * @param {number[]} array - The array to sort, used to set the height of visual bars.
 */
export async function selectionSort(array) {
  // Get all the bar elements for visualization
  const bars = document.getElementsByClassName('bar');
  const n = array.length;

  // Iterate over each element in the array
  for (let i = 0; i < n; i++) {
    // Assume the current index holds the minimum value
    let minIdx = i;

    // Highlight the current assumed minimum with red
    bars[minIdx].style.backgroundColor = 'red';

    // Loop through the unsorted section to find the actual minimum
    for (let j = i + 1; j < n; j++) {
      // Highlight the element being compared with yellow
      bars[j].style.backgroundColor = 'yellow';
      await sleep(30);

      // If a new minimum is found
      if (array[j] < array[minIdx]) {
        // Reset the old minimum's color
        bars[minIdx].style.backgroundColor = 'steelblue';

        // Update the minimum index
        minIdx = j;

        // Highlight the new minimum
        bars[minIdx].style.backgroundColor = 'red';
      } else {
        // If it's not the new minimum, reset its color
        bars[j].style.backgroundColor = 'steelblue';
      }
    }

    // If the minimum index has changed, swap the elements
    if (minIdx !== i) {
      // Swap values in the array
      [array[i], array[minIdx]] = [array[minIdx], array[i]];

      // Swap the visual heights of the bars
      bars[i].style.height = `${array[i]}px`;
      bars[minIdx].style.height = `${array[minIdx]}px`;
    }

    // Reset the color of the bar that was the minimum
    bars[minIdx].style.backgroundColor = 'steelblue';

    // Mark the current sorted element as green
    bars[i].style.backgroundColor = 'green';
  }
}
