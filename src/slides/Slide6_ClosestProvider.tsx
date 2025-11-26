import React from 'react';

export default function Slide6() {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-white">Level 1: "Closest Provider" Wins</h2>
            
            <div className="flex flex-col items-center gap-2 relative">
                
                <div className="w-full p-8 bg-slate-800 border border-slate-600 rounded-lg relative group hover:border-slate-400 transition">
                    <span className="absolute top-3 right-3 bg-slate-700 px-3 py-1 text-xs rounded text-slate-300 uppercase font-bold tracking-wider">Root Context</span>
                    <div className="flex items-center gap-6">
                        <div className="bg-blue-950 border border-blue-700 px-4 py-2 rounded text-blue-200 font-mono">TAP</div>
                        <span className="text-slate-400 text-lg">Provides Count = 1</span>
                    </div>
                </div>

                <div className="h-12 w-1 bg-slate-600"></div>

                <div className="w-full p-8 bg-slate-800 border-2 border-blue-500 rounded-lg relative shadow-[0_0_30px_rgba(59,130,246,0.15)] z-10">
                    <span className="absolute top-3 right-3 bg-blue-900 text-blue-200 px-3 py-1 text-xs rounded border border-blue-700 uppercase font-bold tracking-wider">Child Context (Shadowing)</span>
                    <div className="flex items-center gap-6">
                        <div className="bg-blue-600 px-4 py-2 rounded text-white font-bold font-mono shadow-lg">TAP</div>
                        <span className="text-white font-bold text-xl">Provides Count = 5</span>
                    </div>
                </div>

                <div className="h-12 w-1 bg-slate-600"></div>

                <div className="w-3/4 p-8 bg-green-900/20 border border-green-500/50 rounded-lg text-center backdrop-blur-sm">
                    <h4 className="text-xl font-bold text-green-400 mb-3">Component</h4>
                    <code className="bg-black/40 px-3 py-1 rounded text-green-200 font-mono">useGrip(COUNT)</code>
                    <div className="mt-6 text-3xl font-bold text-white">Receives: 5</div>
                </div>
            </div>
        </div>
    );
}
