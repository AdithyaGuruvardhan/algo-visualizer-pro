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
      <div className="max-w-5xl mx-auto">
        <h2 className="font-tektur text-3xl sm:text-4xl font-bold mb-6 text-center text-textPrimary">
          Powerful Features Built for Future Engineers
        </h2>

        <p className="text-sm sm:text-base max-w-2xl mx-auto mb-14 text-center opacity-80 text-textSecondary">
          Explore a modern, visual way to master algorithms — fast, intuitive, and interactive.
        </p>

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
