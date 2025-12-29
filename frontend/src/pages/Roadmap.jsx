import { roadmap } from "../data/roadmap";
import Footer from "../components/Footer";

export default function Roadmap() {
    return (
        <>
            <section id="roadmap" className="py-24 bg-light-bg dark:bg-dark-bg 
                text-light-text-primary dark:text-dark-text-primary">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-center text-xl sm:text-xl md:text-3xl lg:text-4xl font-semibold text-light-text-primary/90 dark:text-dark-text-primary/90 mb-4">
                        Not sure where to start? We've got you covered
                    </h2>

                    <h4 className="text-center text-sm sm:text-sm md:text-xl lg:text-xl text-light-text-primary/80 dark:text-dark-text-primary/80 mb-8">
                        Follow this roadmap step by step
                    </h4>

                    {/* ACCORDION LIST */}
                    <div className="flex flex-col gap-6">
                        {roadmap.map((level, idx) => (
                            <div key={idx}
                                className=" rounded-3xl border p-6 bg-light-surface dark:bg-dark-surface
                                            shadow-md border-light-border/40 dark:border-dark-border/30 transition-transform 
                                            transition-shadow duration-300 hover:scale-[1.02] 
                                            hover:shadow-brand-dark2/15 dark:hover:shadow-brand-purple1/15 " >
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
                                    {level.topics.map((topic, i) => (<li key={i}>• {topic}</li>))}
                                </ul>
                            </div>))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
