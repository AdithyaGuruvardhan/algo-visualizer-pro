import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full bg-white shadow-md px-8 py-4 flex items-center gap-8">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        AlgoVisualizer Pro
      </Link>

      <div className="flex gap-6">
        <Link to="/sorting" className="hover:text-blue-600">Sorting</Link>
        <Link to="/searching" className="hover:text-blue-600">Searching</Link>
        <Link to="/graphs" className="hover:text-blue-600">Graphs</Link>
        <Link to="/dp" className="hover:text-blue-600">DP</Link>
      </div>
    </div>
  );
}
