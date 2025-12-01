import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <div className="hero relative w-full flex justify-center items-center">
        {/* 3D Image */}
        <Hero />

        {/* Text overlay */}
        <div className="absolute top-32 sm:top-24 md:top-32 left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="font-tektur text-4xl sm:text-5xl md:text-6xl font-bold text-textPrimary">
            From Confusion to Clarity-Visually.
          </h1>
        </div>
      </div>

      {/* Second Section */}
      <div className="second-section w-full py-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">
          Explore Algorithms
        </h2>
        {/* Your additional content goes here */}
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          Visualize sorting, searching, graphs, dynamic programming and more — all in one place!
        </p>
      </div>

    </div>

  );
}
