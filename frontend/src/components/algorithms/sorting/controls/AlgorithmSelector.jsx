const AlgorithmSelector = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="px-3 py-2 rounded bg-light-subtle dark:bg-dark-surface"
    >
      <option value="bubble">Bubble Sort</option>
      <option value="selection">Selection Sort</option>
    </select>
  );
};

export default AlgorithmSelector;
