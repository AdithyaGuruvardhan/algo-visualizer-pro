import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="hero relative w-full min-h-screen flex justify-center items-center">
      {/* 3D Image */}
      <Hero className="w-[90%] sm:w-[70%] md:w-[55%] lg:w-[45%] xl:w-[35%] object-contain" />

      {/* Text overlay */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800">
          Welcome to Algo Visualizer Pro 🚀
        </h1>
      </div>
    </div>
  );
}
