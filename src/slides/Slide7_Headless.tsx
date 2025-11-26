export default function Slide7() {
    return (
        <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-white">Level 2: "Headless" TAPs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                
                <div className="flex flex-col items-center gap-6 p-6 border border-slate-700 rounded-xl bg-slate-800/50">
                    <h4 className="text-xl font-bold text-slate-300">Context A</h4>
                    <div className="bg-yellow-900/30 text-yellow-200 px-4 py-2 rounded border border-yellow-700/50 font-mono">
                        LOC = "Sydney"
                    </div>
                    <div className="text-4xl text-slate-600">⬇️</div>
                    <div className="bg-green-900/30 text-green-200 px-6 py-3 rounded border border-green-600/50 font-bold text-xl">
                        DRIP: 25°C
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center h-full">
                    <div className="bg-blue-600 p-8 rounded-2xl border-4 border-blue-400 shadow-2xl z-10 relative w-full text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">Weather TAP</h3>
                        <div className="text-sm text-blue-100 mb-6 opacity-80">Single Instance</div>
                        
                        <div className="bg-black/20 p-3 rounded text-center text-sm font-mono text-white border border-blue-400/50">
                            needs: [LOCATION_GRIP]
                        </div>
                    </div>
                    
                    <div className="w-full flex justify-between -mt-8 pt-8">
                        <div className="w-1 h-12 bg-gradient-to-b from-transparent to-slate-600 mx-auto"></div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6 p-6 border border-slate-700 rounded-xl bg-slate-800/50">
                    <h4 className="text-xl font-bold text-slate-300">Context B</h4>
                    <div className="bg-yellow-900/30 text-yellow-200 px-4 py-2 rounded border border-yellow-700/50 font-mono">
                        LOC = "Melbourne"
                    </div>
                    <div className="text-4xl text-slate-600">⬇️</div>
                    <div className="bg-green-900/30 text-green-200 px-6 py-3 rounded border border-green-600/50 font-bold text-xl">
                        DRIP: 18°C
                    </div>
                </div>

            </div>
            
            <p className="text-center mt-16 text-2xl text-blue-200 font-light">
                TAPs read parameters from the <strong>Consumer's Context</strong>.
            </p>
        </div>
    );
}
