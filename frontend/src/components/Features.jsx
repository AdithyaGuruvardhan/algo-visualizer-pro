import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const featuresRef = useRef(null);
  const containerRef = useRef(null);

  const features = [
    { title: "Interactive Algorithm Visuals", desc: "Watch every step of sorting, searching, trees, and graphs with smooth animations.", icon: "📊" },
    { title: "Step-by-Step Execution", desc: "Control speed, pause, rewind, and see variable changes in real-time.", icon: "⚙️" },
    { title: "DSA Patterns & Roadmaps", desc: "Structured learning paths from beginner to advanced problem-solving.", icon: "🧭" },
    { title: "Clean, Distraction-Free UI", desc: "Minimal, elegant interface built to help you focus and learn faster.", icon: "✨" },
  ];

  useEffect(() => {
    const wrapper = featuresRef.current;
    const container = containerRef.current;

    // Set wrapper height to match scrollable width for pin effect
    const totalScrollWidth = container.scrollWidth;
    const viewportWidth = window.innerWidth;
    wrapper.style.height = `${container.offsetHeight + totalScrollWidth - viewportWidth}px`;
    const scrollDistance = container.scrollWidth - wrapper.clientWidth;

    gsap.to(container, {
      x: () => -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top-=100 top",
        end: () => `+=${scrollDistance}`,
        scrub: true,
        pin: true,
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={featuresRef} className="w-full overflow-hidden relative">
      <div className="w-full lg:max-w-screen-xl lg:mx-auto mt-16 px-4 sm:px-6 md:px-8">
        <h2 className="font-tektur tracking-tight leading-none 
        text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
        font-bold mb-6 text-start text-textPrimary">
          Why Algo Visualizer Pro
        </h2>

        <div className="text-sm sm:text-base mb-14 text-start opacity-80 text-textPrimary">
          <p>Explore a modern, visual way to master algorithms</p>
          <p>Fast, intuitive, and interactive.</p>
        </div>

        {/* Horizontal scroll container */}
        <div ref={containerRef} className="flex gap-8 px-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="
                flex-shrink-0 w-80 sm:w-96
                p-6 rounded-2xl 
                bg-white/10 
                backdrop-blur-xl 
                border border-white/15 
                shadow-lg 
                transition 
                hover:bg-white/20 
                hover:shadow-2xl
                text-textPrimary
              "
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2 font-tektur">{f.title}</h3>
              <p className="text-sm opacity-90">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
