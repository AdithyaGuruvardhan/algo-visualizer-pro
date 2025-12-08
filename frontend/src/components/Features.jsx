import { useEffect, useRef, useState } from "react";

export default function Features() {
  const sectionRef = useRef(null);
  const [scale, setScale] = useState(0.95); // width scale

  const features = [
    {
      title: "Interactive Algorithm Visuals",
      desc: "Watch every step of sorting, searching, trees, and graphs with smooth animations.",
      icon: "📊",
    },
    {
      title: "Step-by-Step Execution",
      desc: "Control speed, pause, rewind, and see variable changes in real-time.",
      icon: "⚙️",
    },
    {
      title: "DSA Patterns & Roadmaps",
      desc: "Structured learning paths from beginner to advanced problem-solving.",
      icon: "🧭",
    },
    {
      title: "Clean, Distraction-Free UI",
      desc: "Minimal, elegant interface built to help you focus and learn faster.",
      icon: "✨",
    },
    {
      title: "Clean, Distraction-Free UI",
      desc: "Minimal, elegant interface built to help you focus and learn faster.",
      icon: "✨",
    },
    {
      title: "Clean, Distraction-Free UI",
      desc: "Minimal, elegant interface built to help you focus and learn faster.",
      icon: "✨",
    },
    {
      title: "Clean, Distraction-Free UI",
      desc: "Minimal, elegant interface built to help you focus and learn faster.",
      icon: "✨",
    },

  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();

      const viewportHeight = window.innerHeight;

      // When the section center is in the viewport → shrink to 70%
      const progress = 1 - Math.abs(rect.top - viewportHeight / 2) / (viewportHeight / 2);

      // clamp 0 → 1
      const clamped = Math.max(0, Math.min(1, progress));

      const minScale = 0.7;
      const maxScale = 0.95;

      const newScale = maxScale - (maxScale - minScale) * clamped;

      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 flex justify-center">
      <div
        className="transition-all duration-300 p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
        style={{
          width: `${scale * 100}%`,
          maxWidth: "1100px",
          transition: "width 0.25s cubic-bezier(0.25,0.6,0.3,1)",
        }}
      >
        <h2 className="font-tektur text-3xl sm:text-4xl font-bold mb-8 text-center">
          Powerful Features Built for Future Engineers
        </h2>

        <p className="text-sm sm:text-base max-w-2xl mx-auto mb-12 text-center opacity-80">
          Explore a modern, visual way to master algorithms — fast, intuitive, and interactive.
        </p>

        {/* Stacked cards (always 1 column) */}
        <div className="grid grid-cols-1 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-white/10 rounded-2xl border border-white/15 hover:bg-white/20 shadow-lg hover:shadow-2xl transition"
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2 font-tektur">
                {f.title}
              </h3>
              <p className="text-sm opacity-90">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
