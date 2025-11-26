import React from 'react';

export default function Slide1() {
    return (
        <div className="text-center py-12">
            <div className="mb-12 relative">
                <div className="w-40 h-40 mx-auto border-4 border-blue-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.4)] bg-slate-900">
                    <div className="w-4 h-4 bg-white rounded-full absolute"></div>
                    <div className="w-24 h-1 bg-blue-500 absolute rotate-45"></div>
                    <div className="w-24 h-1 bg-blue-500 absolute -rotate-45"></div>
                    <div className="w-4 h-4 bg-cyan-400 rounded-full absolute top-0 -mt-1"></div>
                    <div className="w-4 h-4 bg-blue-600 rounded-full absolute bottom-0 -mb-1"></div>
                </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">GRIP</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-slate-200">
                Generalized Retrieval Intent Provisioning
            </h2>
            <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto">
                A reactive dataflow architecture for decoupling dynamic data pipelines.
            </p>
            <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto">
                Gianni Mariani gianni@mariani.ws
            </p>
            
            <div className="inline-block bg-slate-800 border border-slate-700 rounded-lg px-8 py-4 font-mono text-cyan-400 shadow-lg">
                <p>npm install @owebeeone/grip-core github:owebeeone/grip-core</p>
                <p>npm install @owebeeone/grip-react github:owebeeone/grip-react</p>
                <p>npm install @owebeeone/grip-vue github:owebeeone/grip-vue</p>
            </div>
        </div>
    );
}
