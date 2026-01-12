export function useStepPlayer(steps) {
  const [index, setIndex] = useState(0);
  const step = steps[index] || {};

  return {
    step,
    index,
    next: () => setIndex(i => Math.min(i + 1, steps.length - 1)),
    prev: () => setIndex(i => Math.max(i - 1, 0)),
    setIndex,
  };
}
