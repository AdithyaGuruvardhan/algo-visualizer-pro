import { useEffect, useState } from "react";
import Bars from "./Bars";
import { SORTING_ALGOS } from "./logic";

import Pseudocode from "../common/Pseudocode";

const SortVisualizer = ({ algorithm }) => {
  const [array, setArray] = useState([]);
  const [steps, setSteps] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [active, setActive] = useState([]);
  const [type, setType] = useState(null);
  const [info, setInfo] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(400);
  const [sortedFrom, setSortedFrom] = useState(null);

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

  useEffect(() => {
    generateArray();
  }, []);

  const start = () => {
    const generated = algorithm.steps(array);
    setSteps(generated);
    setStepIndex(0);
    setIsPlaying(true);
    setSortedFrom(null);
  };

  useEffect(() => {
    if (!currentStep) return;

    setArray(currentStep.array);
    setActive(currentStep.indices || []);
    setType(currentStep.type);
    setInfo(currentStep.message || "");

    if (currentStep.type === "sorted" && currentStep.indices?.length) {
      setSortedFrom(currentStep.indices[0]);
    }
  }, [currentStep]);

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
          <Pseudocode
            code={algorithm.pseudocode}
            activeLine={currentStep?.codeLine}
          />
        )}
      </div>

      {/* Info panel */}
      <div
        className="
        rounded-xl p-4
        bg-light-surface dark:bg-dark-surface
        border border-light-border dark:border-dark-border/30
        text-sm font-mono
        text-light-text-secondary dark:text-dark-text-secondary"
      >
        {info || "—"}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-3 items-center">
        <button onClick={start} className="px-4 py-2 rounded-lg bg-brand-accent text-white shadow-md hover:opacity-90">
          Play
        </button>
        <button onClick={() => setIsPlaying(false)} className="px-4 py-2 rounded-lg bg-light-subtle dark:bg-dark-surface border border-light-border dark:border-dark-border/30">
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
