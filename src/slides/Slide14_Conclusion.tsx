import React from 'react';

export default function Slide14() {
    return (
        <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-black mb-20 text-white">Conclusion</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <div className="p-8 bg-slate-800 rounded-2xl border border-slate-600 hover:border-blue-500 hover:-translate-y-2 transition duration-300 shadow-xl group">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition">🟦</div>
                    <div className="font-mono text-sm text-blue-200 font-bold">@owebeeone/grip-core</div>
                </div>
                <div className="p-8 bg-slate-800 rounded-2xl border border-slate-600 hover:border-cyan-500 hover:-translate-y-2 transition duration-300 shadow-xl group">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition">⚛️</div>
                    <div className="font-mono text-sm text-cyan-200 font-bold">@owebeeone/grip-react</div>
                </div>
                <div className="p-8 bg-slate-800 rounded-2xl border border-slate-600 hover:border-green-500 hover:-translate-y-2 transition duration-300 shadow-xl group">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition">💚</div>
                    <div className="font-mono text-sm text-green-200 font-bold">@owebeeone/grip-vue</div>
                </div>
            </div>

            <div className="space-y-8">
                <p className="text-3xl text-slate-400 font-light">We don't need a new store.</p>
                <p className="text-4xl font-bold text-white">We need a new architecture.</p>
                <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 py-4">
                    GRIP is that architecture.
                </p>
            </div>
        </div>
    );
}
