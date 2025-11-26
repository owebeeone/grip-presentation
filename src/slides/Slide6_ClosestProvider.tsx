export default function Slide6() {
    return (
        <div className="w-full mx-auto px-8">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">Level 1: "Closest Provider" Wins</h2>
            <p className="text-center text-slate-400 mb-12 text-lg">DAG Structure: Nodes can have multiple parents</p>
            
            <div className="relative max-w-6xl mx-auto">
                {/* Level 1: Root Context */}
                <div className="flex justify-center mb-8">
                    <div className="p-6 bg-slate-800 border-2 border-slate-600 rounded-xl relative group hover:border-slate-400 transition shadow-lg">
                        <span className="absolute -top-3 left-6 bg-slate-700 px-3 py-1 text-xs rounded text-slate-300 uppercase font-bold tracking-wider">Root Context</span>
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-950 border border-blue-700 px-4 py-2 rounded text-blue-200 font-mono font-bold">TAP A</div>
                            <span className="text-slate-300 text-lg">Provides: Count = 1</span>
                        </div>
                    </div>
                </div>

                {/* Connection lines from Level 1 to Level 2 */}
                <div className="flex justify-center gap-32 mb-4 relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-600 transform -translate-x-1/2"></div>
                    <div className="absolute left-[25%] top-0 h-8 w-0.5 bg-slate-600"></div>
                    <div className="absolute left-[75%] top-0 h-8 w-0.5 bg-slate-600"></div>
                    <div className="absolute left-[25%] top-8 w-[50%] h-0.5 bg-slate-600"></div>
                </div>

                {/* Level 2: Two nodes with multiple parents */}
                <div className="flex justify-center gap-16 mb-8">
                    <div className="p-6 bg-slate-800 border-2 border-purple-500 rounded-xl relative shadow-[0_0_30px_rgba(168,85,247,0.2)] z-10">
                        <span className="absolute -top-3 left-6 bg-purple-900 text-purple-200 px-3 py-1 text-xs rounded border border-purple-700 uppercase font-bold tracking-wider">Child Context 1</span>
                        <div className="flex items-center gap-4">
                            <div className="bg-purple-600 px-4 py-2 rounded text-white font-bold font-mono shadow-lg">TAP B</div>
                            <span className="text-white font-bold text-lg">Provides: Count = 5</span>
                        </div>
                        <div className="mt-2 text-xs text-purple-300">Parent: Root</div>
                    </div>

                    <div className="p-6 bg-slate-800 border-2 border-cyan-500 rounded-xl relative shadow-[0_0_30px_rgba(6,182,212,0.2)] z-10">
                        <span className="absolute -top-3 left-6 bg-cyan-900 text-cyan-200 px-3 py-1 text-xs rounded border border-cyan-700 uppercase font-bold tracking-wider">Child Context 2</span>
                        <div className="flex items-center gap-4">
                            <div className="bg-cyan-600 px-4 py-2 rounded text-white font-bold font-mono shadow-lg">TAP C</div>
                            <span className="text-white font-bold text-lg">Provides: Count = 10</span>
                        </div>
                        <div className="mt-2 text-xs text-cyan-300">Parent: Root</div>
                    </div>
                </div>

                {/* Connection lines from Level 2 to Level 3 */}
                <div className="flex justify-center gap-32 mb-4 relative">
                    <div className="absolute left-[25%] top-0 h-8 w-0.5 bg-slate-600"></div>
                    <div className="absolute left-[75%] top-0 h-8 w-0.5 bg-slate-600"></div>
                    <div className="absolute left-[25%] top-8 w-[25%] h-0.5 bg-slate-600"></div>
                    <div className="absolute left-[50%] top-8 w-[25%] h-0.5 bg-slate-600"></div>
                </div>

                {/* Level 3: Two nodes with multiple parents (from Level 2) */}
                <div className="flex justify-center gap-16 mb-8">
                    <div className="p-6 bg-slate-800 border-2 border-green-500 rounded-xl relative shadow-[0_0_30px_rgba(34,197,94,0.2)] z-20">
                        <span className="absolute -top-3 left-6 bg-green-900 text-green-200 px-3 py-1 text-xs rounded border border-green-700 uppercase font-bold tracking-wider">Grandchild Context 1</span>
                        <div className="flex items-center gap-4">
                            <div className="bg-green-600 px-4 py-2 rounded text-white font-bold font-mono shadow-lg">TAP D</div>
                            <span className="text-white font-bold text-lg">Provides: Count = 20</span>
                        </div>
                        <div className="mt-2 text-xs text-green-300">Parents: Child 1, Child 2</div>
                    </div>

                    <div className="p-6 bg-slate-800 border-2 border-orange-500 rounded-xl relative shadow-[0_0_30px_rgba(249,115,22,0.2)] z-20">
                        <span className="absolute -top-3 left-6 bg-orange-900 text-orange-200 px-3 py-1 text-xs rounded border border-orange-700 uppercase font-bold tracking-wider">Grandchild Context 2</span>
                        <div className="flex items-center gap-4">
                            <div className="bg-orange-600 px-4 py-2 rounded text-white font-bold font-mono shadow-lg">TAP E</div>
                            <span className="text-white font-bold text-lg">Provides: Count = 30</span>
                        </div>
                        <div className="mt-2 text-xs text-orange-300">Parent: Child 2</div>
                    </div>
                </div>

                {/* Connection lines from Level 3 to Component */}
                <div className="flex justify-center gap-32 mb-4 relative">
                    <div className="absolute left-[25%] top-0 h-8 w-0.5 bg-slate-600"></div>
                    <div className="absolute left-[75%] top-0 h-8 w-0.5 bg-slate-600"></div>
                    <div className="absolute left-[25%] top-8 w-[50%] h-0.5 bg-slate-600"></div>
                </div>

                {/* Component at bottom */}
                <div className="flex justify-center">
                    <div className="w-2/3 p-8 bg-gradient-to-br from-green-900/30 to-emerald-900/20 border-2 border-green-500/50 rounded-xl text-center backdrop-blur-sm shadow-xl">
                        <h4 className="text-2xl font-bold text-green-400 mb-4">Component</h4>
                        <code className="bg-black/60 px-4 py-2 rounded text-green-200 font-mono text-lg">useGrip(COUNT)</code>
                        <div className="mt-6 text-4xl font-bold text-white">Receives: 20</div>
                        <p className="mt-4 text-sm text-green-300">(Closest provider: Grandchild Context 1)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
