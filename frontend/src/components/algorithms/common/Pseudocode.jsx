export default function Pseudocode({ code, activeLine }) {
  return (
    <pre
      className="
        rounded-xl p-4 text-sm leading-relaxed
        bg-light-subtle dark:bg-dark-surface
        border border-light-border dark:border-dark-border/30
        shadow-card
        font-mono
      "
    >
      {code.map((line, idx) => (
        <div
          key={idx}
          className={`
            px-2 py-1 rounded-md transition
            ${
              idx === activeLine
                ? "text-brand-accent bg-brand-accent/15"
                : "text-black/50 dark:text-dark-text-muted"
            }
          `}
        >
          {line}
        </div>
      ))}
    </pre>
  );
}
