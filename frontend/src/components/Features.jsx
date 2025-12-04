export default function Features() {
  const features = [
    {
      title: "Interactive Algorithm Visuals",
      desc: "Watch every step of sorting, searching, trees, and graphs with smooth animations.",
      icon: "📊",
      span: "col-span-2 row-span-1", // spans multiple columns
    },
    {
      title: "Step-by-Step Execution",
      desc: "Control speed, pause, rewind, and see variable changes in real-time.",
      icon: "⚙️",
      span: "col-span-1 row-span-1",
    },
    {
      title: "DSA Patterns & Roadmaps",
      desc: "Structured learning paths from beginner to advanced problem-solving.",
      icon: "🧭",
      span: "col-span-1 row-span-2",
    },
    {
      title: "Clean, Distraction-Free UI",
      desc: "Minimal, elegant interface built to help you focus and learn faster.",
      icon: "✨",
      span: "col-span-2 row-span-1",
    },
  ];

  return (
    <section className="w-full py-10 text-black bg-none">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-tektur text-3xl sm:text-4xl font-bold mb-6">
          Powerful Features Built for Future Engineers
        </h2>
        <p className="text-sm sm:text-base max-w-2xl mx-auto mb-14">
          Explore a modern, visual way to master algorithms — fast, intuitive, and interactive.
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 auto-rows-fr grid-flow-dense">
          {features.map((f, index) => (
            <div
              key={index}
              className={`${f.span} p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl hover:bg-white/20`}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-tektur text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
