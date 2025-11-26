import React from 'react';

export default function Slide4() {
    return (
        <div className="w-full max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">The Inversion</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="p-8 rounded-xl bg-slate-900 border border-slate-700 flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-red-400 mb-4">Old Way (Imperative)</h3>
                    <p className="text-lg mb-6 text-slate-300">Component asks: <br/><span className="font-bold text-white italic">"How do I get data?"</span></p>
                    
                    <div className="bg-black/50 p-6 rounded-lg font-mono text-sm text-slate-300 mt-auto border-l-4 border-red-500">
                        <span className="text-purple-400">import</span> {'{ useQuery }'} <span className="text-purple-400">from</span> 'lib';<br/>
                        <span className="text-purple-400">const</span> {'{ data }'} = useQuery(<br/>
                        &nbsp;&nbsp;['user', id], <br/>
                        &nbsp;&nbsp;() ={'>'} fetch(...)<br/>
                        );
                    </div>
                </div>

                <div className="p-8 rounded-xl bg-blue-900/10 border-2 border-blue-500 flex flex-col h-full shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">GRIP Way (Declarative)</h3>
                    <p className="text-lg mb-6 text-slate-300">Component asks: <br/><span className="font-bold text-white italic">"What data do I need?"</span></p>
                    
                    <div className="bg-black/50 p-6 rounded-lg font-mono text-sm text-slate-300 mt-auto border-l-4 border-blue-500">
                        <span className="text-purple-400">const</span> data = useGrip(USER_DATA);
                    </div>
                </div>
            </div>
        </div>
    );
}
