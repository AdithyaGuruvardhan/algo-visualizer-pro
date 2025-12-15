import { Link } from "react-router-dom";
import devImg from "../assets/Website Creator-amico.png";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-24 lg:gap-32 px-6 md:px-12">

      {/* Text */}
      <div className="text-center md:text-left max-w-md flex flex-col items-center md:items-start">
        <h1 className="text-3xl md:text-4xl font-semibold text-textSecondary mb-3">
          Under Development
        </h1>

        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
          This section is under active development and will be launched soon
          with production-ready features.
        </p>

        <Link
          to="/"
          className="
            px-6 py-2.5 rounded-xl
            bg-white/15 backdrop-blur-xl
            shadow-lg border border-white/20
            text-white text-sm
            hover:bg-white/25 hover:scale-105
            transition-all duration-400
          "
        >
          Go to Home
        </Link>
      </div>

      {/* Image */}
      <img
        src={devImg}
        alt="Developers working"
        className="
          w-4/5 sm:w-3/5 md:w-2/5
          max-w-md
          max-h-[65vh] object-contain
          transition-transform duration-500
          hover:scale-105
        "
      />
    </div>
  );
}
