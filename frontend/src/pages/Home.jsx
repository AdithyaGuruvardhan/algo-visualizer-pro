import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <div
        className="
          relative w-full flex items-center justify-center overflow-hidden
          h-[80vh] sm:h-[85vh] md:h-[90vh] lg:h-screen
        "
      >

        {/* 3D Background / Grid */}
        <Hero />

        {/* ---- TEXT OVERLAY ---- */}
        <div
          className="
            absolute inset-0 
            flex flex-col items-center justify-center 
            text-center px-4
            pointer-events-none
          "
        >
          <h1
            className="
              font-tektur font-bold text-textPrimary
              text-2xl sm:text-5xl md:text-5xl lg:text-6xl
              leading-snug
              max-w-4xl
            "
          >
            From Confusion to Clarity — Visually.
          </h1>

          <h5
            className="
              font-tektur text-textPrimary
              text-sm sm:text-lg md:text-lg lg:text-xl
              mt-14 sm:mt-12 md:mt-14
              max-w-3xl
            "
          >
            Understand algorithms instantly with interactive visuals — your shortcut to mastering DSA & problem solving.
          </h5>
        </div>

        {/* ---- SCROLL INDICATOR ---- */}
        <div
          className="
            absolute bottom-8 left-1/2 -translate-x-1/2
            w-10 h-10 sm:w-12 sm:h-12
            flex items-center justify-center
            rounded-full
            bg-white/15 backdrop-blur-xl
            border border-white/25 shadow-lg
            pointer-events-auto
          "
        >
          <span className="text-white text-xl sm:text-2xl animate-bounce">↓</span>
        </div>

      </div>
    </div>
  );
}
