export function selectionSortSteps(inputArray) {
  const arr = [...inputArray];
  const steps = [];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Mark current i
    steps.push({
      type: "outer",
      array: [...arr],
      i,
      indices: [i],
      codeLine: 0,
      message: `Starting selection from index ${i}`,
    });

    for (let j = i + 1; j < n; j++) {
      // Compare current min with j
      steps.push({
        type: "compare",
        array: [...arr],
        indices: [minIndex, j],
        i,
        j,
        codeLine: 1,
        message: `Comparing current min (${minIndex}) with ${j}`,
      });

      if (arr[j] < arr[minIndex]) {
        minIndex = j;

        // New minimum found
        steps.push({
          type: "select",
          array: [...arr],
          indices: [minIndex],
          i,
          j,
          codeLine: 2,
          message: `New minimum found at index ${minIndex}`,
        });
      }
    }

    // Swap min with i (if needed)
    if (minIndex !== i) {
      steps.push({
        type: "swap",
        array: [...arr],
        indices: [i, minIndex],
        i,
        codeLine: 3,
        message: `Swapping index ${i} with min index ${minIndex}`,
      });

      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

      steps.push({
        type: "swap",
        array: [...arr],
        indices: [i, minIndex],
        i,
        codeLine: 3,
        message: `Swap completed`,
      });
    }

    // Mark sorted position
    steps.push({
      type: "sorted",
      array: [...arr],
      indices: [i],
      i,
      codeLine: 4,
      message: `Index ${i} is now sorted`,
    });
  }

  return steps;
}
