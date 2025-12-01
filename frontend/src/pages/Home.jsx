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
          <h5 className="font-tektur text-base font-bold text-textPrimary">
            Understand algorithms instantly with interactive visuals.
          </h5>
          <h1 className="font-tektur text-4xl sm:text-5xl md:text-6xl font-bold text-textPrimary">
            From Confusion to Clarity-Visually.
          </h1>
        </div>
      </div>
    </div>

  );
}
