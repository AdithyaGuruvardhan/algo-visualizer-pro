import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRevealText({
    text,
    className = "",
}) {
    const containerRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const letters = el.querySelectorAll(".letter");

        gsap.fromTo(
            letters,
            {
                opacity: 0.15,
                
            },
            {
                opacity: 0.9,
                
                stagger: {
                    each: 0.04
                },
                ease: "none",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end: "bottom 40%",
                    scrub: true
                }
            }
        );

    }, []);

    return (
        <p ref={containerRef} className={className}>
            {text.split("").map((char, i) => (
                <span
                    key={i}
                    className="letter inline-block transition-opacity duration-200"
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </p>
    );
}
