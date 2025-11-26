export default function Slide5() {
    return (
        <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-white">Level 1: The Core Model</h2>
            
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-8">
                
                <div className="flex-1 bg-blue-950/30 border-2 border-blue-600 rounded-xl p-8 relative">
                    <div className="absolute -top-4 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">Pure Logic (Mechanics)</div>
                    
                    <div className="flex flex-col gap-8 mt-4">
                        <div className="p-4 bg-blue-900/20 border border-blue-500/50 rounded-lg text-center">
                            <h4 className="text-xl font-bold text-blue-200">GRIP</h4>
                            <p className="text-sm text-blue-300 mt-1">The Identifier (Intent)</p>
                        </div>
                        <div className="text-center text-2xl text-blue-500 animate-bounce">⬇️</div>
                        <div className="p-4 bg-blue-900/20 border border-blue-500/50 rounded-lg text-center">
                            <h4 className="text-xl font-bold text-blue-200">GROK</h4>
                            <p className="text-sm text-blue-300 mt-1">The Orchestration Kernel</p>
                        </div>
                        <div className="text-center text-2xl text-blue-500 animate-bounce">⬇️</div>
                        <div className="p-4 bg-blue-900/20 border border-blue-500/50 rounded-lg text-center">
                            <h4 className="text-xl font-bold text-blue-200">TAP</h4>
                            <p className="text-sm text-blue-300 mt-1">Target Attribute Provider</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-green-950/30 border-2 border-green-600 rounded-xl p-8 relative">
                    <div className="absolute -top-4 left-6 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">Framework Adapter (React/Vue)</div>
                    
                    <div className="flex flex-col gap-8 mt-4 h-full justify-center">
                        <div className="p-8 bg-green-900/20 border border-green-500/50 rounded-lg text-center">
                            <h4 className="text-2xl font-bold text-green-200">Context</h4>
                            <p className="text-base text-green-300 mt-2">The Scope (Where am I?)</p>
                        </div>
                        <div className="text-center text-3xl text-green-500 animate-pulse">⬇️</div>
                        <div className="p-8 bg-green-900/20 border border-green-500/50 rounded-lg text-center">
                            <h4 className="text-2xl font-bold text-green-200">DRIP</h4>
                            <p className="text-base text-green-300 mt-2">The Live Stream</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
