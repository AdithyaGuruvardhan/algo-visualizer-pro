import Hero from "../components/Hero";
import Features from "../components/Features";
import AlgoVCover from "../components/AlgoVCover"


export default function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <div
        className="
    relative w-[95%] max-w-screen-2xl mx-auto mt-16
    flex items-center justify-center overflow-hidden
    h-[85vh] sm:h-[85vh] md:h-[90vh] lg:h-[85vh]
    bg-gradient-to-br from-darkblue1 via-[#0e0750] via-[#1a0bb5] via-[#4220d4] to-lightblue3
    rounded-2xl"
      >
        {/* 3D Background / Grid */}
        <Hero />

        {/* ---- CENTERED TEXT LAYER ---- */}
        <div
          className="
      absolute inset-0
      flex items-center justify-center
      text-center px-4
      pointer-events-none"
        >
          <div className="flex flex-col items-center">
            {/* Eyebrow */}
            <p
              className="
              font-tektur uppercase tracking-widest
              text-sm sm:text-sm md:text-sm
              text-textPrimary/90
              mb-6"
            >
              Visual learning for Data Structures & Algorithms
            </p>

            {/* Main Heading (TRUE CENTER) */}
            <h1
              className="
              font-tektur font-bold text-textPrimary
              text-4xl sm:text-4xl md:text-6xl lg:text-6xl
              leading-snug
              max-w-4xl"
            >
              From Confusion to Clarity — Visually.
            </h1>

            {/* Subheading */}
            <h5
              className="
              font-tektur text-textPrimary/90
              text-sm sm:text-base md:text-lg
              mt-8
              max-w-xl"
            >
              Learn algorithms faster through interactive visuals that make logic click instantly.
            </h5>
          </div>
        </div>

        {/* ---- BOTTOM CTA LAYER ---- */}
        <div
          className="
          absolute bottom-6
          left-1/2 -translate-x-1/2
          text-center
          pointer-events-auto"
        >
          <button
            className="
            px-3 py-1 rounded-2xl
            font-tektur font-semibold text-sm
            bg-textPrimary text-black
            hover:scale-105 transition-transform
            shadow-lg"
          >
            Explore
          </button>

          <p className="mt-3 text-xs text-textPrimary/80">
            No signup required
          </p>
        </div>
      </div>


      {/* ---- SCROLL INDICATOR (Circular Text + Mouse) ---- */}
      {/* <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 
            w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 
            flex items-center justify-center
            pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">

            SVG Circular Text
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 animate-spin-slow">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50
                    m -40, 0
                    a 40,40 0 1,1 80,0
                    a 40,40 0 1,1 -80,0"
                />
              </defs>

              <text
                fill="white"
                className="text-[10px] sm:text-[10px] md:text-[9px] tracking-widest font-tektur">
                <textPath href="#circlePath" startOffset="0%">
                  SCROLL • SCROLL • SCROLL • SCROLL •
                </textPath>
              </text>
            </svg>

            Mouse Icon (center)
            <div className="w-5 h-8 border-2 border-textSecondary rounded-full flex justify-center items-start p-1">
              <div className="w-1 h-1 bg-textSecondary rounded-full animate-bounce"></div>
            </div>
          </div>
        </div> */}


      {/* Features Section */}
      <Features />

      {/* Algorithms We Cover */}
      <AlgoVCover />

    </div>
  );
}
