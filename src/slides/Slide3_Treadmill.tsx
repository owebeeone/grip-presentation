import React from 'react';

export default function Slide3() {
    return (
        <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16 text-white">The Problem: <span className="text-red-400">The Refactor Treadmill</span></h2>
            
            <div className="relative py-10">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-700 -translate-y-1/2 z-0"></div>
                
                <div className="grid grid-cols-3 gap-8 relative z-10">
                    <div className="flex flex-col items-center group">
                        <div className="w-20 h-20 rounded-full bg-slate-900 border-4 border-green-500 flex items-center justify-center text-3xl font-bold mb-6 group-hover:scale-110 transition">1</div>
                        <h3 className="text-xl font-bold text-white">useState</h3>
                        <p className="text-slate-400 mt-2">"Simple!"</p>
                        <div className="mt-4 px-3 py-1 bg-slate-800 rounded text-xs font-mono text-green-400 border border-green-900">Local UI State</div>
                    </div>
                    
                    <div className="flex flex-col items-center group">
                        <div className="w-20 h-20 rounded-full bg-slate-900 border-4 border-yellow-500 flex items-center justify-center text-3xl font-bold mb-6 group-hover:scale-110 transition">2</div>
                        <h3 className="text-xl font-bold text-white">Zustand</h3>
                        <p className="text-slate-400 mt-2">"Need to share... Refactor."</p>
                        <div className="mt-4 px-3 py-1 bg-slate-800 rounded text-xs font-mono text-yellow-400 border border-yellow-900">Global Silo</div>
                    </div>
                    
                    <div className="flex flex-col items-center group">
                        <div className="w-20 h-20 rounded-full bg-slate-900 border-4 border-red-500 flex items-center justify-center text-3xl font-bold mb-6 group-hover:scale-110 transition">3</div>
                        <h3 className="text-xl font-bold text-white">Query</h3>
                        <p className="text-slate-400 mt-2">"Need async... Refactor."</p>
                        <div className="mt-4 px-3 py-1 bg-slate-800 rounded text-xs font-mono text-red-400 border border-red-900">Async Silo</div>
                    </div>
                </div>
            </div>

            <div className="bg-red-950/30 border border-red-500/30 p-8 rounded-xl max-w-3xl mx-auto mt-16 backdrop-blur-sm">
                <p className="text-2xl italic text-red-200 mb-4">"We keep adding stores, but the pain remains."</p>
                <p className="text-3xl font-bold text-white">We don't need a new store.<br/>We need a new architecture.</p>
            </div>
        </div>
    );
}
