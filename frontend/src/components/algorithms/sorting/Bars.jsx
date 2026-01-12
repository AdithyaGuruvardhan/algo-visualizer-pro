import { useMemo } from "react";

const BAR_WIDTH = 24;
const GAP = 6;

const Bars = ({ array, active = [], type, sortedFrom }) => {
  return (
    <div
      className="
        relative flex items-end gap-[6px] h-64 select-none
        rounded-xl p-4
        bg-light-subtle dark:bg-dark-surface
      "
    >
      {array.map((val, idx) => {
        const isActive = active.includes(idx);
        const isSorted = sortedFrom !== null && idx === sortedFrom;

        return (
          <div
            key={idx}
            className={`
              rounded-md
              transition-all duration-300 ease-in-out
              ${
                isActive
                  ? "bg-dark-node-active dark:shadow-node-glow"
                  : isSorted
                  ? "bg-dark-node-focus"
                  : "bg-dark-node-idle"
              }
            `}
            style={{
              width: BAR_WIDTH,
              height: val * 4,
              transform:
                type === "swap" && active.length === 2
                  ? idx === active[0]
                    ? `translateX(${(active[1] - active[0]) * (BAR_WIDTH + GAP)}px)`
                    : idx === active[1]
                    ? `translateX(${(active[0] - active[1]) * (BAR_WIDTH + GAP)}px)`
                    : "translateX(0)"
                  : "translateX(0)",
            }}
          />
        );
      })}
    </div>
  );
};

export default Bars;
