import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpotlightCard from "./SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({ children, containerClassName = '', textClassName = '', element = 'h2' }) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span className="inline-block word" key={index}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const charElements = el.querySelectorAll('.inline-block');

    gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      },
      {
        duration: 1,
        ease: 'back.inOut(2)',
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: 0.03,
        scrollTrigger: {
          trigger: el,
          start: 'center bottom+=50%',
          end: 'bottom bottom-=40%',
          scrub: true
        }
      }
    );
  }, []);

  const Element = element;

  return (
    <Element ref={containerRef} className={`overflow-hidden ${containerClassName}`}>
      <span className={`inline-block ${textClassName}`}>{splitText}</span>
    </Element>
  );
};

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
    <section ref={featuresRef} className="w-full overflow-hidden relative pb-12  bg-light-bg dark:bg-dark-bg">

      {/* TITLE + SUBTITLE */}
      <div className="max-w-screen-xl mx-auto mt-6 px-4 sm:px-6 md:px-8">
        <ScrollFloat 
          containerClassName="font-tektur tracking-tight leading-none text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 text-start text-light-text-primary/90 dark:text-dark-text-primary/90"
          textClassName="leading-[1.5]"
        >
          Why AlgoVisualizer Pro
        </ScrollFloat>

        <div className="text-sm sm:text-base mb-14 text-start text-light-text-primary dark:text-dark-text-primary">
          <ScrollFloat
            element="p"
            containerClassName=""
            textClassName="leading-[1.5]"
          >
            Explore a modern, visual way to master algorithms
          </ScrollFloat>
          <ScrollFloat
            element="p"
            containerClassName=""
            textClassName="leading-[1.5]"
          >
            Fast, intuitive, and interactive.
          </ScrollFloat>
        </div>
      </div>

      {/* SCROLLING CARDS */}
      <div ref={containerRef} className="flex gap-8 px-6 w-full">
        {features.map((f, i) => (
          <SpotlightCard
            key={i}
            className="
              flex flex-col justify-start
              flex-shrink-0 w-80 sm:w-96
              p-8 rounded-2xl
              bg-light-surface/70 dark:bg-dark-surface/70
              backdrop-blur-xl border border-light-text-muted/30 dark:border-dark-border/30 shadow-lg
              hover:border-light-text-muted/30 hover:dark:border-dark-border/20
              transition-all duration-300
              text-light-text-primary dark:text-dark-text-primary"
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
          </SpotlightCard>
        ))}
      </div>

    </section>
  );
}
