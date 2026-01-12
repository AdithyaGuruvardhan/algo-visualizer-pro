import { useEffect, useState } from "react";
import Bars from "./Bars";
import { bubbleSortSteps } from "./logic/bubbleSort";
import Pseudocode from "../common/Pseudocode";

const SortVisualizer = () => {
  const [array, setArray] = useState([]);
  const [steps, setSteps] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [active, setActive] = useState([]);
  const [type, setType] = useState(null);
  const [info, setInfo] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(400);

  const currentStep = steps[stepIndex];

  const generateArray = () => {
    const arr = Array.from({ length: 15 }, () =>
      Math.floor(Math.random() * 40) + 10
    );
    setArray(arr);
    setSteps([]);
    setStepIndex(0);
    setIsPlaying(false);
    setInfo("");
    setSortedFrom(null);
  };

  const [sortedFrom, setSortedFrom] = useState(null);

  useEffect(() => {
    generateArray();
  }, []);

  const start = () => {
    const generated = bubbleSortSteps(array);
    setSteps(generated);
    setStepIndex(0);
    setIsPlaying(true);
    setSortedFrom(null);
  };

  useEffect(() => {
    if (!steps.length || stepIndex >= steps.length) return;

    const step = steps[stepIndex];

    setArray(step.array);
    setActive(step.indices || []);
    setType(step.type);
    setInfo(step.message || "");

    if (typeof step.i === "number") {
      setSortedFrom(array.length - step.i - 1);
    }
  }, [stepIndex, steps]);

  // Playback engine
  useEffect(() => {
    if (!isPlaying || stepIndex >= steps.length - 1) return;

    const timer = setTimeout(() => {
      setStepIndex(i => i + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [isPlaying, stepIndex, speed, steps.length]);


  // Step forward
  const next = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex((i) => i + 1);
    }
  };

  // Step backward
  const prev = () => {
    if (stepIndex > 0) {
      setStepIndex((i) => i - 1);
    }
  };


  return (
    <div className="space-y-6">

      {/* Info panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Bars
          array={array}
          active={active}
          type={type}
          sortedFrom={sortedFrom}
        />
        {currentStep && (
          <Pseudocode activeLine={currentStep.codeLine} />
        )}
      </div>

      {/* Info panel */}
      <div className="p-4 rounded-xl bg-light-bg/60 dark:bg-dark-surface/60">
        <p className="text-sm font-mono">
          {info || "—"}
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-3 items-center">
        <button onClick={start} className="btn-primary">Play</button>
        <button onClick={() => setIsPlaying(false)} className="btn-secondary">
          Pause
        </button>
        <button onClick={prev} className="btn-secondary">◀ Prev</button>
        <button onClick={next} className="btn-secondary">Next ▶</button>
        <button onClick={generateArray} className="btn-secondary">
          Reset
        </button>

        {/* Speed control */}
        <input
          type="range"
          min="0"
          max={steps.length - 1}
          value={stepIndex}
          onChange={(e) => {
            setIsPlaying(false);
            setStepIndex(+e.target.value);
          }}
          className="w-full"
        />

        <div className="flex items-center gap-2">
          <button
            className="px-2 py-1 rounded bg-light-subtle dark:bg-dark-surface hover:bg-light-surface dark:hover:bg-dark-bg"
            onClick={() => setSpeed(s => Math.max(50, s - 100))}
          >
            ▲
          </button>

          <span className="text-sm font-mono text-center">
            {speed} ms
          </span>

          <button
            className="px-2 py-1 rounded bg-light-subtle dark:bg-dark-surface hover:bg-light-surface dark:hover:bg-dark-bg"
            onClick={() => setSpeed(s => Math.min(2000, s + 100))}
          >
            ▼
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortVisualizer;
