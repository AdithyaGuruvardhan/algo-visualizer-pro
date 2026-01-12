import { bubbleSortSteps } from "./bubbleSort";
import { selectionSortSteps } from "./selectionSort";

export const SORTING_ALGOS = {
  "bubble-sort": {
    name: "Bubble Sort",
    steps: bubbleSortSteps,
    pseudocode: [
      "for i = 0 to n-1",
      "  for j = 0 to n-i-1",
      "    if arr[j] > arr[j+1]",
      "      swap",
    ],
  },

  "selection-sort": {
    name: "Selection Sort",
    steps: selectionSortSteps,
    pseudocode: [
      "for i = 0 to n-1",
      "  min = i",
      "  for j = i+1 to n",
      "    if arr[j] < arr[min]",
      "      min = j",
      "  swap arr[i], arr[min]",
    ],
  },
};
