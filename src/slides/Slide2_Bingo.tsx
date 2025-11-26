export default function Slide2() {
    const words = [
        "Dependency Injection", "Separation of Concerns", "FREE SPACE", "Inversion of Control", "Signals",
        "Prop Drilling", "Context Hell", "Effect Loops", "State Lifting", "Hook Rules",
        "Re-renders", "Spaghetti Code", "Race Conditions", "Stale Closures", "Boilerplate"
    ];

    return (
        <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
                The Buzzword Bingo <span className="text-cyan-400">(What have you been doing lately?)</span>
            </h2>
            
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-center text-sm md:text-base">
                {words.map((word, i) => {
                    const isFree = word === "FREE SPACE";
                    return (
                        <div 
                            key={i}
                            className={`
                                p-4 rounded border flex items-center justify-center aspect-square transition duration-300 cursor-default
                                ${isFree 
                                    ? 'bg-blue-600 border-blue-400 font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] scale-105 z-10' 
                                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-blue-900/50 hover:border-blue-700'
                                }
                            `}
                        >
                            {word}
                        </div>
                    );
                })}
            </div>
            
            <div className="mt-12 text-center text-slate-400 italic">
                "My claim: One core architectural idea solves all of these."
            </div>
        </div>
    );
}
