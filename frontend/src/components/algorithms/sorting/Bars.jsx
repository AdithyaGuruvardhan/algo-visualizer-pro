import { useMemo } from "react";

const getColors = () => {
  const isDark = document.documentElement.classList.contains("dark");

  return isDark
    ? {
      idle: "rgba(117,72,210,0.2)",
      active: "#7548d2",
      focus: "#a885ee",
      sorted: "rgba(117,72,210,0.4)",
    }
    : {
      idle: "rgba(38,21,152,0.1)",
      active: "#7548d2",
      focus: "#a885ee",
      sorted: "rgba(38,21,152,0.25)",
    };
};

const BAR_WIDTH = 24;
const GAP = 4;
const MOVE_X = BAR_WIDTH + GAP;

const Bars = ({ array, active = [], type, sortedFrom }) => {
  const COLORS = useMemo(getColors, []);

  return (
    <div className="relative flex items-end gap-1 h-64 select-none">
      {array.map((val, idx) => {
        const isActive = active.includes(idx);
        const isSorted = sortedFrom !== undefined && idx >= sortedFrom;

        return (
          <div
            key={idx}
            className="rounded-md transition-all duration-300 ease-in-out"
            style={{
              width: BAR_WIDTH,
              height: val * 4,
              backgroundColor: isActive
                ? COLORS.active
                : isSorted
                  ? COLORS.sorted
                  : COLORS.idle,

              transform:
                type === "swap" && isActive
                  ? idx === active[0]
                    ? `translateX(${MOVE_X}px)`
                    : `translateX(-${MOVE_X}px)`
                  : "translateX(0)",
            }}
          />
        );
      })}
    </div>
  );
};

export default Bars;
