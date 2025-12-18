import Hero from "../components/Hero";
import Features from "../components/Features";
import AlgoHero from "../components/AlgoHero"
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <div
        className="
    relative w-[95%] max-w-screen-2xl mx-auto mt-16
    flex items-center justify-center overflow-hidden
    h-[85vh] sm:h-[85vh] md:h-[90vh] lg:h-[85vh]
    rounded-2xl

    /* LIGHT */
    bg-light-canvas border border-light-border shadow-card

    /* DARK */
    dark:bg-gradient-to-br
    dark:from-dark-bg
    dark:via-[#0e0750]
    dark:via-[#1a0bb5]
    dark:via-[#4220d4]
    dark:to-purple3"
      >
        {/* 3D Background / Grid */}
        <Hero />

        {/* ---- TEXT OVERLAY ---- */}
        <div className="
            absolute inset-0 
            flex flex-col items-center justify-center text-center px-4 pointer-events-none">
          <h1 className="
            font-tektur font-bold 
            text-light-text-primary
    dark:text-dark-text-primary/90 text-4xl 
            sm:text-4xl md:text-6xl lg:text-6xl leading-snug max-w-4xl">
            From Confusion to Clarity — Visually.
          </h1>
          <h5 className=" font-tektur text-light-text-secondary
    dark:text-dark-text-primary/80 text-md sm:text-md md:text-lg lg:text-xl mt-14 sm:mt-12 md:mt-14 max-w-2xl">
            Understand algorithms instantly with interactive visuals — your shortcut to mastering DSA & problem solving.
          </h5>
        </div>
        {/* ---- SCROLL INDICATOR (Circular Text + Mouse) ---- */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 
            w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 
            flex items-center justify-center
            pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">

            {/* SVG Circular Text */}
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
                className="text-[10px] sm:text-[10px] md:text-[9px] tracking-widest font-tektur fill-light-text-secondary
    dark:fill-white">
                <textPath href="#circlePath" startOffset="0%">
                  SCROLL • SCROLL • SCROLL • SCROLL •
                </textPath>
              </text>
            </svg>

            {/* Mouse Icon (center) */}
            <div className="w-5 h-8 border-2 border-light-text-secondary 
    dark:border-textSecondary rounded-full flex justify-center items-start p-1">
              <div className="w-1 h-1 bg-light-text-secondary
      dark:bg-textsecondary rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Features />

      {/* Algorithms We Cover */}
      <AlgoHero />

      {/* Footer Section */}
      <Footer />

    </div>
  );
}
