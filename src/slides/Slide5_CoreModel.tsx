export default function Slide5() {
    return (
        <div className="w-full mx-auto px-8">
            <h2 className="text-5xl font-bold mb-12 text-center text-white">Level 1: The Core Model</h2>
            
            <div className="max-w-5xl mx-auto">
                {/* Grip Keys - The Key Identifier */}
                <div className="mb-8 text-center">
                    <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl shadow-lg border-2 border-cyan-400">
                        <h3 className="text-3xl font-bold mb-2">GRIP Keys</h3>
                        <p className="text-lg text-cyan-100">The Identifier (Intent) - The Key That Connects Everything</p>
                    </div>
                </div>

                {/* Main Flow: Drip -> Grok -> Tap */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                    
                    {/* DRIP */}
                    <div className="flex-1 max-w-xs bg-gradient-to-br from-green-900/40 to-green-800/30 border-2 border-green-500 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="text-center">
                            <div className="text-5xl mb-4">💧</div>
                            <h4 className="text-3xl font-bold text-green-200 mb-2">DRIP</h4>
                            <p className="text-sm text-green-300">The Live Stream</p>
                            <p className="text-xs text-green-400 mt-2">Reactive data flow</p>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="text-4xl text-cyan-400 animate-pulse">→</div>

                    {/* GROK */}
                    <div className="flex-1 max-w-xs bg-gradient-to-br from-blue-900/40 to-blue-800/30 border-2 border-blue-500 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="text-center">
                            <div className="text-5xl mb-4">🧠</div>
                            <h4 className="text-3xl font-bold text-blue-200 mb-2">GROK</h4>
                            <p className="text-sm text-blue-300">The Orchestration Kernel</p>
                            <p className="text-xs text-blue-400 mt-2">Resolves GRIP keys to TAPs</p>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="text-4xl text-cyan-400 animate-pulse">→</div>

                    {/* TAP */}
                    <div className="flex-1 max-w-xs bg-gradient-to-br from-purple-900/40 to-purple-800/30 border-2 border-purple-500 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="text-center">
                            <div className="text-5xl mb-4">🔌</div>
                            <h4 className="text-3xl font-bold text-purple-200 mb-2">TAP</h4>
                            <p className="text-sm text-purple-300">Target Attribute Provider</p>
                            <p className="text-xs text-purple-400 mt-2">Provides the data</p>
                        </div>
                    </div>
                </div>

                {/* Bottom explanation */}
                <div className="mt-8 text-center">
                    <div className="inline-block bg-slate-800/50 border border-slate-600 rounded-lg px-6 py-3">
                        <p className="text-slate-300 text-lg">
                            <span className="font-bold text-cyan-400">GRIP Keys</span> are the identifiers that connect 
                            <span className="font-bold text-green-400"> DRIP</span> → 
                            <span className="font-bold text-blue-400"> GROK</span> → 
                            <span className="font-bold text-purple-400"> TAP</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
