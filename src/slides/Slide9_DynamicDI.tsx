import React from 'react';

export default function Slide9() {
    return (
        <div className="w-full max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-white">Level 3: Dynamic DI & Cascades</h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                
                <div className="flex flex-col gap-6 min-w-[200px]">
                    <div className="p-6 border border-slate-600 rounded-xl bg-slate-800 text-center opacity-50">
                        <div className="text-sm text-slate-400 mb-2">Control Grip</div>
                        <div className="text-2xl font-bold font-mono text-yellow-500">'mock'</div>
                    </div>
                    <div className="text-4xl text-center text-slate-600 font-light italic">vs</div>
                    <div className="p-6 border-2 border-blue-500 rounded-xl bg-blue-900/20 text-center shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                        <div className="text-sm text-blue-300 mb-2">Control Grip</div>
                        <div className="text-2xl font-bold font-mono text-white">'live'</div>
                    </div>
                </div>

                <div className="text-6xl text-slate-600 hidden md:block">→</div>

                <div className="bg-slate-900 p-10 rounded-2xl border border-slate-700 flex-1 w-full shadow-xl">
                    <h3 className="text-2xl font-bold text-center mb-8 text-purple-400 border-b border-slate-800 pb-4">GROK Wiring</h3>
                    
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-6 opacity-30 grayscale">
                            <span className="w-24 text-right text-sm font-bold">If Mock:</span>
                            <div className="flex-1 p-4 bg-slate-800 rounded border border-slate-600">Activates <strong>MockTAP</strong></div>
                        </div>
                        
                        <div className="flex items-center gap-6">
                            <span className="w-24 text-right text-sm font-bold text-blue-400">If Live:</span>
                            <div className="flex-1 flex flex-col gap-3">
                                <div className="p-4 bg-blue-600 rounded-lg border border-blue-400 text-white font-bold shadow-lg">Activates LiveTAP</div>
                                <div className="flex justify-center"><span className="text-2xl text-blue-500">↓</span></div>
                                <div className="p-4 bg-cyan-800 rounded-lg border border-cyan-600 text-cyan-100 text-sm font-mono">Activates GeoCoderTAP</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
