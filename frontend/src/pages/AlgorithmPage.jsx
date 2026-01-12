import { useParams } from "react-router-dom";

// Sorting
import SortVisualizer from "../components/algorithms/sorting/SortVisualizer";

export default function AlgorithmPage() {
  const { slug } = useParams();

  const renderAlgorithm = () => {
    switch (slug) {
      case "bubble-sort":
        return <SortVisualizer />;

      // future
      // case "selection-sort":
      //   return <SelectionSortVisualizer />;

      default:
        return (
          <p className="opacity-60">
            Algorithm not implemented yet.
          </p>
        );
    }
  };

  return (
    <div className="mx-auto mt-12 max-w-5xl p-6 space-y-6">
      <h1 className="text-3xl font-bold capitalize">
        {slug.replace("-", " ")}
      </h1>

      {renderAlgorithm()}
    </div>
  );
}
