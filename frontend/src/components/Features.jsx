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

    const totalWidth = container.scrollWidth;
    const viewportWidth = wrapper.offsetWidth;

    const scrollDistance = totalWidth - viewportWidth;

    wrapper.style.height = `${scrollDistance + container.offsetHeight}px`;

    gsap.set(container, {
      x: viewportWidth * 0.95,  // moves the whole row out of viewport
    });

    gsap.to(container, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top-=45 top",
        end: () => `+=${scrollDistance}`,
        scrub: 3,
        pin: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={featuresRef} className="w-full overflow-hidden relative">

      {/* TEXT AREA with centered, limited width */}
      <div className="max-w-screen-xl mx-auto mt-16 px-4 sm:px-6 md:px-8">
        <h2 className="font-tektur tracking-tight leading-none 
          text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
          font-bold mb-6 text-start text-textPrimary">
          Why AlgoVisualizer Pro
        </h2>

        <div className="text-sm sm:text-base mb-14 text-start opacity-80 text-textPrimary">
          <p>Explore a modern, visual way to master algorithms</p>
          <p>Fast, intuitive, and interactive.</p>
        </div>
      </div>

      {/* FULL-WIDTH GSAP SCROLL CONTAINER */}
      <div ref={containerRef} className="flex gap-8 px-6 w-full">
        {features.map((f, i) => (
          <div
            key={i}
            className="
              flex flex-col justify-end
              flex-shrink-0 w-80 sm:w-96
              px-8 py-12 rounded-2xl 
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

    </section>
  );
}
