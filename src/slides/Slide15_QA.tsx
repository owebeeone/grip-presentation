import React from 'react';

export default function Slide15() {
    return (
        <div className="w-full max-w-2xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-12 text-white">Q & A</h2>
            
            <div className="bg-white p-4 rounded-xl inline-block mb-12 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                <div className="w-64 h-64 bg-black grid grid-cols-4 gap-1">
                    <div className="bg-white col-span-2 row-span-2 m-3"></div>
                    <div className="bg-white col-span-1 row-span-1 m-3 col-start-4"></div>
                    <div className="bg-white col-span-1 row-span-1 m-3 row-start-4"></div>
                    <div className="bg-white col-span-2 row-span-2 m-3 col-start-3 row-start-3"></div>
                </div>
            </div>
            
            <div className="bg-slate-800 border border-slate-700 rounded-lg px-8 py-4 font-mono text-xl text-slate-300">
                npm install @owebeeone/grip-react
            </div>
        </div>
    );
}
