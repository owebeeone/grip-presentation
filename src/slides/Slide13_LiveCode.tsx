import React from 'react';

export default function Slide13() {
    return (
        <div className="w-full max-w-4xl mx-auto text-center">
             <h2 className="text-4xl font-bold mb-16 text-white">Live Demo: Computed State</h2>
             
             <div className="inline-block w-full max-w-2xl bg-black border border-slate-700 p-16 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                 <div className="flex items-center gap-4 mb-8 border-b border-slate-800 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
                 <p className="text-3xl font-mono text-green-400 animate-pulse text-left">
                    &gt; npm run dev
                 </p>
                 <p className="text-slate-500 mt-8 text-left font-mono text-sm">
                    Demonstrating createFunctionTap vs useEffect chains...
                 </p>
                 <div className="mt-12 p-4 bg-slate-900 rounded text-left font-mono text-xs text-slate-400">
                    [ready] started server on 0.0.0.0:5173
                 </div>
             </div>
        </div>
    );
}
