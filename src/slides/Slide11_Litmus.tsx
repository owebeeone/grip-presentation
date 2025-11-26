import React from 'react';

export default function Slide11() {
    return (
        <div className="w-full max-w-7xl mx-auto h-full flex flex-col">
            <h2 className="text-4xl font-bold mb-4 text-center text-white">The Litmus Test</h2>
            <p className="text-center text-xl text-blue-400 mb-12">"Same Logic, Different Framework"</p>

            <div className="flex-1 grid grid-cols-2 gap-8 min-h-[500px]">
                
                {/* Left: Shared Logic */}
                <div className="col-span-1 bg-slate-900 border-2 border-blue-600 rounded-xl overflow-hidden flex flex-col shadow-2xl">
                    <div className="bg-blue-900/50 border-b border-blue-600 px-4 py-3 font-mono text-sm text-blue-200 flex justify-between items-center">
                        <span className="font-bold">taps.ts (Shared Logic)</span>
                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded uppercase font-bold tracking-wider">Pure TS</span>
                    </div>
                    <div className="p-6 font-mono text-sm text-slate-300 leading-relaxed overflow-auto bg-[#0d1117]">
                        <span className="text-purple-400">import</span> {'{ createAsyncTAP }'} <span className="text-purple-400">from</span> <span className="text-green-400">'@owebeeone/grip-core'</span>;<br/><br/>

                        <span className="text-purple-400">export const</span> WeatherTAP = createAsyncTAP({'{\n'}
                        &nbsp;&nbsp;provides: [WEATHER_TEMP],<br/>
                        &nbsp;&nbsp;<span className="text-yellow-300 font-bold bg-yellow-900/30 px-1 rounded">destinationParamGrips: [LOCATION_GRIP]</span>,<br/>
                        &nbsp;&nbsp;fetcher: <span className="text-purple-400">async</span> (params) ={'>'} {'{\n'}
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500 italic">// Complex caching & debounce logic here...</span><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> fetch(...)<br/>
                        &nbsp;&nbsp;{'}\n'}
                        {'});'}
                    </div>
                </div>

                {/* Right: Frameworks */}
                <div className="col-span-1 flex flex-col gap-6 h-full">
                    
                    {/* React */}
                    <div className="flex-1 bg-slate-900 border-2 border-cyan-500 rounded-xl overflow-hidden flex flex-col shadow-lg">
                        <div className="bg-cyan-900/30 border-b border-cyan-500 px-4 py-2 font-mono text-sm text-cyan-200 font-bold">
                            ReactComponent.tsx
                        </div>
                        <div className="p-6 font-mono text-sm text-slate-300 bg-[#0d1117] flex-1">
                            <span className="text-purple-400">const</span> temp = <span className="text-yellow-300 font-bold">useGrip(WEATHER_TEMP)</span>;
                        </div>
                    </div>

                    {/* Vue */}
                    <div className="flex-1 bg-slate-900 border-2 border-green-500 rounded-xl overflow-hidden flex flex-col shadow-lg">
                        <div className="bg-green-900/30 border-b border-green-500 px-4 py-2 font-mono text-sm text-green-200 font-bold">
                            VueComponent.vue
                        </div>
                        <div className="p-6 font-mono text-sm text-slate-300 bg-[#0d1117] flex-1">
                            <span className="text-purple-400">const</span> temp = <span className="text-yellow-300 font-bold">useGrip(WEATHER_TEMP)</span>;
                        </div>
                    </div>

                </div>

            </div>
            <div className="text-center mt-8 font-bold text-lg text-white opacity-80">
                Business Logic is Framework Agnostic.
            </div>
        </div>
    );
}
