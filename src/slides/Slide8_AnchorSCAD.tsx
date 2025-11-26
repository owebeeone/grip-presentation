import React from 'react';

export default function Slide8() {
    const openViewer = () => {
        window.open('https://owebeeone.github.io/anchorscad-browser/?utm_source=chatgpt.com', '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="w-full mx-auto text-center h-full flex flex-col">
            <h2 className="text-4xl font-bold mb-8 text-white">Demo: <span className="font-mono text-cyan-400">anchorscad-viewer</span></h2>
            
            <div className="w-full flex-1 bg-slate-900 border border-slate-700 rounded-lg overflow-hidden shadow-2xl relative min-h-[70vh]">
                <iframe 
                    src="https://owebeeone.github.io/anchorscad-browser/?utm_source=chatgpt.com" 
                    className="absolute inset-0 w-full h-full border-0"
                    title="AnchorSCAD Viewer"
                ></iframe>
            </div>

            <div className="mt-6 flex justify-center gap-4">
                <button
                    onClick={openViewer}
                    className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition shadow-lg flex items-center gap-2"
                >
                    <span>🔗</span>
                    Open in New Window
                </button>
            </div>

            <p className="mt-6 text-xl text-slate-300">
                Left Panel (List) and Right Panel (3D View) are 100% decoupled.<br/>
                No prop drilling. Just GRIP.
            </p>
        </div>
    );
}
