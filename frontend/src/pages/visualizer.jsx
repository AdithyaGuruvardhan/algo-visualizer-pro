import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ALGORITHMS } from "../data/algorithms";
import { ArrowUpRight } from "lucide-react";

export default function Visualizer() {
    const topics = Object.keys(ALGORITHMS);
    const [activeTopic, setActiveTopic] = useState("Sorting");
    const navigate = useNavigate();

    return (
        <div className="mx-auto mt-16 sm:mt-16 md:mt-20 lg:mt-20 px-4 max-w-screen-2xl">
            <div className="flex flex-col lg:flex-row gap-8">

                {/* TOPICS LIST */}
                <div
                    className="w-full lg:w-64
                        rounded-2xl
                        bg-light-surface dark:bg-dark-surface/60
                        shadow-card
                        p-4
                        flex flex-col gap-2">
                    <h3 className="text-sm font-semibold mb-2 text-light-text-primary/70 dark:text-dark-text-primary/70">
                        Topics
                    </h3>

                    {topics.map((topic) => (
                        <button
                            key={topic}
                            onClick={() => setActiveTopic(topic)}
                            className={`
                                w-full text-left px-4 py-3 rounded-xl
                                text-sm font-medium transition
                                ${activeTopic === topic
                                    ? "bg-brand-accent/15 text-brand-accent"
                                    : "text-light-text-primary/60 dark:text-dark-text-primary/60 hover:text-light-text-primary hover:dark:text-dark-text-primary"
                                }
                            `}
                        >
                            {topic}
                        </button>
                    ))}
                </div>

                {/* ALGORITHM CARDS */}
                <div
                    className="
                    flex-1
                    rounded-2xl
                    bg-light-surface dark:bg-dark-surface/60
                    shadow-card
                    p-6"
                >
                    <h2 className="text-xl font-semibold mb-6">
                        {activeTopic} Algorithms
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {ALGORITHMS[activeTopic].map((algo) => (
                            <button
                                key={algo.slug}
                                onClick={() => navigate(`/algorithms/${algo.slug}`)}
                                className="
                                    group
                                    relative
                                    rounded-2xl
                                    bg-gradient-to-br from-brand-accent/20 to-transparent
                                    p-5 h-44
                                    flex flex-col justify-between
                                    text-left
                                    shadow-inner

                                    transition-all duration-200
                                    hover:scale-[1.03]
                                    hover:shadow-lg

                                    focus:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-brand-accent/40
                                "
                            >
                                {/* Text Content */}
                                <div>
                                    <h3 className="text-lg font-semibold leading-tight">
                                        {algo.name}
                                    </h3>
                                    <p className="text-sm opacity-60 mt-2 leading-snug">
                                        {algo.description}
                                    </p>
                                </div>

                                {/* Action Button */}
                                <span
                                    className="
                                    self-end
                                    inline-flex items-center justify-center
                                    w-9 h-9
                                    rounded-full

                                    text-brand-accent
                                    bg-white/10 dark:bg-white/5
                                    backdrop-blur-md
                                    border border-white/20

                                    shadow-md
                                    transition-all duration-300 ease-out
                                    group-hover:scale-110
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1"
                                >
                                    <ArrowUpRight
                                        size={18}
                                        strokeWidth={2.2}
                                        className="
                                        text-brand-accent
                                        rotate-[-20deg]
                                        transition-transform duration-300
                                        group-hover:rotate-0"
                                    />
                                </span>
                            </button>

                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
