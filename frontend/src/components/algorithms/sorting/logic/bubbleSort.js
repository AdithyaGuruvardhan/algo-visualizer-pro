export function bubbleSortSteps(inputArray) {
  const arr = [...inputArray];
  const steps = [];

  for (let i = 0; i < arr.length - 1; i++) {
    steps.push({
      array: [...arr],
      codeLine: 0,
      message: `Outer loop iteration ${i}`,
    });

    for (let j = 0; j < arr.length - i - 1; j++) {
      steps.push({
        type: "compare",
        indices: [j, j + 1],
        array: [...arr],
        codeLine: 1,
        message: `Comparing index ${j} and ${j + 1}`,
      });

      if (arr[j] > arr[j + 1]) {
        steps.push({
          type: "compare",
          indices: [j, j + 1],
          array: [...arr],
          codeLine: 2,
          message: `Condition true`,
        });

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        steps.push({
          type: "swap",
          indices: [j, j + 1],
          array: [...arr],
          codeLine: 3,
          message: `Swapped`,
        });
      }
    }
  }

  return steps;
}
