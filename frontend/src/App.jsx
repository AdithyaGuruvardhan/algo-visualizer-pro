import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sorting from "./pages/Sorting";
import Searching from "./pages/Searching";
import Graphs from "./pages/Graphs";
import DP from "./pages/DP";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Roadmap from "./pages/Roadmap";

export default function App() {
  return (
    <>
      <Navbar />

      <div> {/* pushes content below navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/sorting" element={<Sorting />} />
          <Route path="/searching" element={<Searching />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/dp" element={<DP />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
