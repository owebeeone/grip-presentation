import React, { useEffect, useState, useCallback } from 'react';
import { useGrip } from '@owebeeone/grip-react';
import { SLIDE_INDEX, SLIDE_INDEX_TAP, TOTAL_SLIDES } from './grips';

// Import all slides
import Slide1 from './slides/Slide1_Title';
import Slide2 from './slides/Slide2_Bingo';
import Slide3 from './slides/Slide3_Treadmill';
import Slide4 from './slides/Slide4_Inversion';
import Slide5 from './slides/Slide5_CoreModel';
import Slide6 from './slides/Slide6_ClosestProvider';
import Slide7 from './slides/Slide7_Headless';
import Slide8 from './slides/Slide8_AnchorSCAD';
import Slide9 from './slides/Slide9_DynamicDI';
import Slide10 from './slides/Slide10_WalkingSkeleton';
import Slide11 from './slides/Slide11_Litmus';
import Slide12 from './slides/Slide12_AI';
import Slide13 from './slides/Slide13_LiveCode';
import Slide14 from './slides/Slide14_Conclusion';
import Slide15 from './slides/Slide15_QA';

const SLIDES = [
    Slide1, Slide2, Slide3, Slide4, Slide5, 
    Slide6, Slide7, Slide8, Slide9, Slide10,
    Slide11, Slide12, Slide13, Slide14, Slide15
];

export default function Presentation() {
    const index = useGrip(SLIDE_INDEX) || 0;
    const indexTap = useGrip(SLIDE_INDEX_TAP);
    const [isFullscreen, setIsFullscreen] = useState(false);
    // Use TOTAL_SLIDES if dynamic, else static length
    const total = SLIDES.length;

    const CurrentSlide = SLIDES[index] || Slide1;

    const next = () => indexTap?.update(i => Math.min(total - 1, (i || 0) + 1));
    const prev = () => indexTap?.update(i => Math.max(0, (i || 0) - 1));

    const toggleFullscreen = useCallback(() => {
        if (!isFullscreen) {
            const elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if ((elem as any).webkitRequestFullscreen) {
                (elem as any).webkitRequestFullscreen();
            } else if ((elem as any).msRequestFullscreen) {
                (elem as any).msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if ((document as any).webkitExitFullscreen) {
                (document as any).webkitExitFullscreen();
            } else if ((document as any).msExitFullscreen) {
                (document as any).msExitFullscreen();
            }
        }
    }, [isFullscreen]);

    // Handle fullscreen changes
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement || !!(document as any).webkitFullscreenElement || !!(document as any).msFullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('msfullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('msfullscreenchange', handleFullscreenChange);
        };
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isFullscreen) {
                toggleFullscreen();
                return;
            }
            if (e.key === 'ArrowRight' || e.key === ' ') {
                indexTap?.update(i => Math.min(total - 1, (i || 0) + 1));
            }
            if (e.key === 'ArrowLeft') {
                indexTap?.update(i => Math.max(0, (i || 0) - 1));
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [indexTap, isFullscreen, total, toggleFullscreen]);

    const presentationContent = (
        <div className="relative w-full h-full min-h-[80vh] flex flex-col items-center bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            
            {/* Progress Bar */}
            <div className="w-full h-1 bg-slate-800">
                <div 
                    className="h-full bg-blue-500 transition-all duration-300" 
                    style={{ width: `${((index + 1) / total) * 100}%` }}
                ></div>
            </div>

            {/* Fullscreen Toggle Button */}
            <button
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 z-50 px-4 py-2 rounded bg-slate-700 hover:bg-slate-600 text-white font-semibold transition shadow-lg"
                title={isFullscreen ? "Exit Fullscreen (ESC)" : "Enter Fullscreen"}
            >
                {isFullscreen ? '⤓ Exit' : '⤢ Fullscreen'}
            </button>

            {/* Slide Content Area */}
            <div className="flex-1 w-full overflow-y-auto p-8 flex flex-col items-center justify-center">
                <div className="w-full animate-fade-in" style={{ maxWidth: isFullscreen ? '100%' : '100%' }}>
                    <CurrentSlide />
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="w-full p-4 border-t border-slate-800 bg-slate-900/80 flex justify-between items-center backdrop-blur">
                <button 
                    onClick={prev} 
                    disabled={index === 0}
                    className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-600 disabled:opacity-30 text-white font-semibold transition"
                >
                    Previous
                </button>
                
                <span className="text-slate-400 font-mono text-sm">
                    Slide {index + 1} of {total}
                </span>

                <button 
                    onClick={next} 
                    disabled={index === total - 1}
                    className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 disabled:opacity-30 text-white font-semibold transition"
                >
                    Next
                </button>
            </div>
        </div>
    );

    if (isFullscreen) {
        return (
            <div className="fixed inset-0 bg-slate-950 z-[9999] flex items-center justify-center">
                {presentationContent}
            </div>
        );
    }

    return presentationContent;
}
