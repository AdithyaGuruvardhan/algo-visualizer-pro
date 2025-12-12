// src/components/AlgoVCover.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const clusters = [
    {
        id: "sorting",
        label: "Sorting",
        highlight: "Core sorting algorithms",
        items: ["Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort", "Quick Sort", "Heap Sort"],
    },
    {
        id: "searching",
        label: "Searching",
        highlight: "Search techniques",
        items: ["Linear Search", "Binary Search", "Interpolation Search", "Ternary Search"],
    },
    {
        id: "graph",
        label: "Graphs",
        highlight: "Graph traversal & shortest path",
        items: ["BFS", "DFS", "Dijkstra", "Bellman-Ford", "Topological Sort"],
    },
    {
        id: "dp",
        label: "Dynamic Programming",
        highlight: "DP techniques & patterns",
        items: ["Knapsack", "LIS", "Coin Change", "Matrix Chain Multiplication"],
    },
];

export default function AlgoVCover() {
    const wrapperRef = useRef(null);
    const pathRef = useRef(null);
    const markerRef = useRef(null);
    const canvasRef = useRef(null);


    const [svgHeight, setSvgHeight] = useState(3000);

    // Set dynamic SVG height
    useEffect(() => {
        setSvgHeight(clusters.length * window.innerHeight);
    }, []);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const path = pathRef.current;
        const marker = markerRef.current;

        if (!wrapper || !path || !marker) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const parent = canvas.parentElement;

        function drawGrid() {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;

            const gridSize = 20; // spacing between lines
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = "rgba(255, 255, 255, 0.07)"; // light grid lines
            ctx.lineWidth = 0.5;

            ctx.beginPath();

            // Vertical grid lines
            for (let x = 0; x <= canvas.width; x += gridSize) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
            }

            // Horizontal grid lines
            for (let y = 0; y <= canvas.height; y += gridSize) {
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
            }

            ctx.stroke();
        }


        wrapper.style.height = `${clusters.length * window.innerHeight}px`;

        drawGrid();

        window.addEventListener("resize", drawGrid);

        gsap.utils.toArray(".algo-cluster").forEach((section) => {
            gsap.fromTo(
                section,
                { autoAlpha: 0, y: 50, scale: 0.97 },
                {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        end: "top top",
                        toggleActions: "play reverse play reverse",
                    },
                }
            );

            gsap.fromTo(
                section.querySelectorAll(".algo-item"),
                { autoAlpha: 0, y: 15 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        end: "top top",
                        toggleActions: "play reverse play reverse",
                    },
                }
            );
        });

        const markerTween = gsap.to(marker, {
            motionPath: {
                path: "#algoPath",
                align: "#algoPath",
                autoRotate: false,
                alignOrigin: [0.5, 0.5],
            },
            ease: "none",
            scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: () => `+=${wrapper.scrollHeight - window.innerHeight}`,
                scrub: 0.8,
            },
        });

        const pulse = gsap.to(marker, {
            scale: 1.12,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            duration: 1.2,
        });

        const onResize = () => ScrollTrigger.refresh();
        window.addEventListener("resize", onResize);

        return () => {
            markerTween.kill();
            pulse.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
            window.removeEventListener("resize", drawGrid);
            window.removeEventListener("resize", onResize);
        };
    }, []);


    return (
        <section className="relative w-full text-white overflow-hidden mt-6">
            <div ref={wrapperRef} className="w-full">

                <div className="flex flex-col items-center justify-center 
                    text-center
                ">
                    <h1 className="font-tektur font-bold text-textPrimary
                        text-4xl sm:text-4xl md:text-6xl lg:text-6xl
                        leading-snug
                        max-w-4xl mt-6">
                        What we Cover
                    </h1>
                    <p className="mt-4 max-w-lg text-sm">
                        We walk you through every core algorithm that matters for interviews and real-world problem-solving.
                    </p>
                </div>

                {/* Background */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-darkblue1 via-[#0e0750] via-[#1a0bb5] via-[#4220d4] to-lightblue3 bg-black bg-blend-multiply"/>

                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                ></canvas>

                {/* SVG Path */}
                <svg
                    className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                    width="720"
                    height={svgHeight}
                    viewBox={`0 0 720 ${svgHeight}`}
                    preserveAspectRatio="xMidYMid slice"
                    aria-hidden
                >
                    <defs>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <linearGradient id="pathGrad" x1="0" x2="1">
                            <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.95" />
                            <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.95" />
                        </linearGradient>
                    </defs>

                    <path
                        id="algoPath"
                        ref={pathRef}
                        d={generateSerpentinePath(clusters.length)}
                        stroke="url(#pathGrad)"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        style={{ filter: "url(#glow)", opacity: 0.95 }}
                    />
                </svg>

                {/* Marker */}
                <div
                    ref={markerRef}
                    className="marker absolute w-4 h-4 rounded-full bg-white shadow-[0_0_18px_rgba(96,165,250,0.9)] z-30"
                    style={{ left: "50%", transform: "translate(-50%, -50%)" }}
                />

                {/* Clusters */}
                <div className="relative z-20">
                    {clusters.map((c) => (
                        <div key={c.id} className="algo-cluster min-h-screen flex items-center justify-center px-6">
                            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">

                                {/* Left text (lg) */}
                                <div className="hidden lg:flex flex-col items-end pr-6">
                                    <div className="w-0.5 h-32 bg-white/20" />
                                    <div className="text-right">
                                        <h3 className="text-3xl font-bold tracking-tight text-white">{c.label}</h3>
                                        <p className="text-sm text-white/90 mt-2">{c.highlight}</p>
                                    </div>
                                </div>

                                {/* Center circle */}
                                <div className="flex flex-col items-center justify-center">
                                    <div className="w-40 h-40 rounded-full bg-white/5 flex items-center justify-center relative">
                                        <div className="absolute -top-4 -right-6 w-3 h-3 rounded-full bg-white/80 shadow-md" />
                                        <div className="text-xl font-semibold text-white">{c.label}</div>
                                    </div>
                                    <div className="mt-6 lg:hidden text-center">
                                        <p className="text-sm text-white/90">{c.highlight}</p>
                                    </div>
                                </div>

                                {/* Right subtopics */}
                                <div className="flex flex-col items-start pl-6">
                                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                                        <h4 className="text-sm text-white/95 font-semibold mb-3">Subtopics</h4>
                                        <ul className="flex flex-col gap-2">
                                            {c.items.map((it, j) => (
                                                <li key={j} className="algo-item text-sm text-white/95 flex items-center gap-3">
                                                    <span className="w-2 h-2 rounded-full bg-white/90 inline-block" />
                                                    <span>{it}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-6 hidden lg:block">
                                        <div className="h-12 w-0.5 bg-white/20" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-24" />
        </section>
    );
}

// Serpentine SVG path generator
function generateSerpentinePath(segments) {
    const slot = 600;
    const centerX = 360;
    const amp = 220;

    let d = `M ${centerX - amp} 40`;
    for (let i = 0; i < segments; i++) {
        const y1 = 80 + i * slot + slot / 3;
        const x1 = centerX + amp;
        const y2 = 80 + i * slot + (slot * 2) / 3;
        const x2 = centerX - amp;
        d += ` C ${centerX - amp} ${y1 - 120}, ${centerX + amp} ${y1 + 80}, ${x1} ${y1}`;
        d += ` S ${x2} ${y2}, ${x2} ${y2}`;
    }
    d += ` Q ${centerX} ${80 + segments * slot + 40}, ${centerX + amp} ${80 + segments * slot + 80}`;
    return d;
}
