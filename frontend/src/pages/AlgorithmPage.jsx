import { useParams } from "react-router-dom";
import SortVisualizer from "../components/algorithms/sorting/SortVisualizer";
import { SORTING_ALGOS } from "../components/algorithms/sorting/logic";

export default function AlgorithmPage() {
  const { slug } = useParams();

  const algo = SORTING_ALGOS[slug];

  if (!algo) {
    return (
          <p className="opacity-60">
            Algorithm not implemented yet.
          </p>
        );
  }

  return (
    <div className="mx-auto mt-12 max-w-5xl p-6 space-y-6">
      <h1 className="text-3xl font-bold capitalise">{algo.name}</h1>

      {/* 🔑 ONE visualizer, MANY algos */}
      <SortVisualizer algorithm={algo} />
    </div>
  );
}
