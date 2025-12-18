import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const featuresRef = useRef(null);
  const containerRef = useRef(null);

  const features = [
    { title: "Interactive Algorithm Visuals", desc: "Watch every step of sorting, searching, trees, and graphs with smooth animations." },
    { title: "Step-by-Step Execution", desc: "Control speed, pause, rewind, and see variable changes in real-time." },
    { title: "DSA Patterns & Roadmaps", desc: "Structured learning paths from beginner to advanced problem-solving." },
    { title: "Clean, Distraction-Free UI", desc: "Minimal, elegant interface built to help you focus and learn faster." },
  ];

  useEffect(() => {
    const wrapper = featuresRef.current;
    const container = containerRef.current;

    const totalWidth = container.scrollWidth;
    const viewportWidth = wrapper.offsetWidth;

    const scrollDistance = totalWidth - viewportWidth;

    gsap.set(container, {
      x: viewportWidth * 0.95,
    });

    gsap.to(container, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top-=45 top",
        end: () => `+=${scrollDistance}`,
        scrub: 0,
        pin: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={featuresRef} className="w-full overflow-hidden relative pb-12  bg-light-surface dark:bg-dark-surface">

      {/* TITLE + SUBTITLE */}
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

      {/* SCROLLING CARDS */}
      <div ref={containerRef} className="flex gap-8 px-6 w-full">
        {features.map((f, i) => (
          <div
            key={i}
            className="
              flex flex-col justify-start
              flex-shrink-0 w-80 sm:w-96
              p-8 rounded-2xl
              bg-gradient-to-br from-[#0c0c0f]/60 to-[#1a1a1f]/60
              backdrop-blur-xl border border-purple-500/25 shadow-lg
              hover:border-purple-500/50 hover:shadow-purple-500/20
              hover:scale-[1.02] transition-all duration-300
              text-textPrimary"
          >
            {/* ICON CONTAINER */}
            <div className="
              w-9 h-9 mb-5 rounded-xl flex items-center justify-center
              bg-gradient-to-br from-purple-600/40 to-indigo-600/40
              border border-white/10 shadow-lg">
              <div className="w-4 h-5 bg-white/90 
                [clip-path:polygon(50%_0%,70%_30%,100%_50%,70%_70%,50%_100%,30%_70%,0%_50%,30%_30%)]">
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 font-tektur">{f.title}</h3>
            <p className="text-sm opacity-80 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
