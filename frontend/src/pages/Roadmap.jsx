import { roadmap } from "../data/roadmap";
import Footer from "../components/Footer";

export default function Roadmap() {
    return (
        <>
        <section id="roadmap" className="py-24 bg-darkblue1">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-center text-4xl font-semibold text-textPrimary/90 max-w-3xl mx-auto mb-4">
                    Not sure where to start with DSA? Don't worry we got you
                </h2>
                <h4 className="text-center text-lg text-textPrimary/90 mb-8 max-w-3xl mx-auto">
                    Follow this roadmap to learn step by step—from basics to advanced topics
                </h4>
                

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {roadmap.map((level, idx) => (
                        <div
                            key={idx}
                            className="
                                rounded-3xl border p-6 shadow-sm border-accent
                                transition-transform transition-shadow duration-300
                                hover:scale-[1.01] hover:shadow-lg  hover:shadow-accent
                            "
                        >
                            <h3 className="text-xl font-semibold mb-1">
                                {level.phase}
                            </h3>

                            <h3 className="text-xl font-semibold mb-1">
                                {level.title}
                            </h3>

                            <p className="text-sm text-textSecondary/70 mb-3">
                                {level.goal}
                            </p>

                            <ul className="mt-4 space-y-2 text-textSecondary">
                                {level.topics.map((topic, i) => (
                                    <li key={i}>• {topic}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <Footer />
        </>
    );
}
