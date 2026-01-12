const CODE = [
  "for i from 0 to n-1",
  " for j from 0 to n-i-1",
  "  if arr[j] > arr[j+1]",
  "   swap arr[j], arr[j+1]",
];

export default function Pseudocode({ activeLine }) {
  return (
    <pre className="p-4 rounded-xl bg-black/80 text-sm">
      {CODE.map((line, idx) => (
        <div
          key={idx}
          className={
            idx === activeLine
              ? "text-brand-accent"
              : "text-white/70"
          }
        >
          {line}
        </div>
      ))}
    </pre>
  );
}
