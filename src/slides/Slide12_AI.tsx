import React from 'react';

export default function Slide12() {
    return (
        <div className="w-full max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">AI-Assisted Development</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="p-8 rounded-xl bg-red-950/30 border border-red-500/30">
                    <h3 className="text-2xl font-bold text-red-400 mb-4">Human-First API</h3>
                    <p className="mb-6 text-slate-400 h-12">Requires context, caching keys, async logic understanding.</p>
                    <div className="bg-black/40 p-6 rounded-lg font-mono text-sm text-slate-400 border-l-4 border-red-500">
                        useQuery(['user', id], fetcher, {'{ staleTime: 1000 }'})
                    </div>
                </div>

                <div className="p-8 rounded-xl bg-green-950/30 border border-green-500/30">
                    <h3 className="text-2xl font-bold text-green-400 mb-4">AI-First API</h3>
                    <p className="mb-6 text-slate-400 h-12">Requires simple schema matching.</p>
                    <div className="bg-black/40 p-6 rounded-lg font-mono text-sm text-slate-400 border-l-4 border-green-500">
                        useGrip(USER_DATA)
                    </div>
                </div>
            </div>

            <div className="mt-16 p-10 bg-blue-900/20 border-l-8 border-blue-500 rounded-r-xl">
                <p className="italic text-2xl text-blue-100 font-light leading-relaxed">
                    "The codebase served as the documentation. Grip’s patterns are clear enough to learn from usage."
                </p>
                <span className="block mt-6 text-sm font-bold not-italic text-blue-400 uppercase tracking-widest">— Claude (Auto)</span>
            </div>
        </div>
    );
}
