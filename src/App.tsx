import { useGrip, GripGraphVisualizer, useRuntime, GraphDumpButton } from '@owebeeone/grip-react';
import { COUNT, COUNT_TAP, CALC_DIGIT_PRESSED, CALC_ADD_PRESSED, CALC_SUB_PRESSED, CALC_MUL_PRESSED, CALC_DIV_PRESSED, CALC_EQUALS_PRESSED, CALC_CLEAR_PRESSED, CURRENT_TAB, CALC_DISPLAY } from './grips';
import TimeClock from './TimeClock';
import TabBar from './TabBar';
import AppHeader from './AppHeader';
import WeatherPanel from './WeatherPanel';
import Presentation from './Presentation';
import { useState, useEffect } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

function ResizableGraphWrapper(props: { children: React.ReactNode }) {
  const { grok } = useRuntime();
  const [open, setOpen] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const mainPanel = (
    <div style={{ height: '100%', overflow: 'auto', backgroundColor: '#0f172a', color: 'white' }}>
      {props.children}
    </div>
  );

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ flex: '1 1 auto', display: 'flex', minHeight: 0, minWidth: 0 }}>
        {!open ? (
          mainPanel
        ) : (
          <PanelGroup direction="horizontal" style={{ height: '100%', width: '100%' }}>
            <Panel defaultSize={60} minSize={30}>
              {mainPanel}
            </Panel>
            <PanelResizeHandle style={{ width: '6px', background: '#334155' }} />
            <Panel defaultSize={40} minSize={25}>
              <GripGraphVisualizer 
                grok={grok} 
                refreshMs={700} 
                refreshTrigger={refreshTrigger} 
                style={{background: '#1e293b'}}
              />
            </Panel>
          </PanelGroup>
        )}
      </div>
      <div style={{
        position: 'absolute',
        bottom: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(15, 23, 42, 0.9)',
        border: '1px solid #334155',
        padding: '8px 12px',
        borderRadius: 8,
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
        display: 'flex',
        gap: 8,
        zIndex: 2000
      }}>
        <button 
          className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-sm font-bold transition"
          onClick={() => setOpen(o => !o)}
        >
          {open ? 'Hide Graph' : 'Show Graph'}
        </button>
        {open && (
          <button 
            className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded text-sm transition"
            onClick={() => setRefreshTrigger(c => c + 1)}
          >
            Refresh
          </button>
        )}
        <GraphDumpButton grok={grok} />
      </div>
    </div>
  );
}

export default function App() {
  const count = useGrip(COUNT);
  const countTap = useGrip(COUNT_TAP);
  const calcDisplay = useGrip(CALC_DISPLAY);
  const tab = useGrip(CURRENT_TAB);
  
  // Calculator grips
  const calcDigitPressed = useGrip(CALC_DIGIT_PRESSED);
  const calcAddPressed = useGrip(CALC_ADD_PRESSED);
  const calcSubPressed = useGrip(CALC_SUB_PRESSED);
  const calcMulPressed = useGrip(CALC_MUL_PRESSED);
  const calcDivPressed = useGrip(CALC_DIV_PRESSED);
  const calcEqualsPressed = useGrip(CALC_EQUALS_PRESSED);
  const calcClearPressed = useGrip(CALC_CLEAR_PRESSED);

  // Only for initial load if needed
  useEffect(() => {
    if (countTap) countTap.set(1);
  }, [countTap]);

  const inc = (c: number) => (c === undefined ? 1 : c + 1);
  const dec = (c: number) => (c === undefined ? 0 : c - 1);

  const mainContent = (
    <div className="min-h-screen flex flex-col">
      <div className="p-4 border-b border-slate-700 bg-slate-900/50 sticky top-0 z-40 backdrop-blur">
        <AppHeader />
        <div className="mt-4 flex justify-center">
           <TabBar />
        </div>
      </div>

      <div className="flex-1 p-6 max-w-7xl mx-auto w-full">
        
        {tab === 'presentation' && <Presentation />}

        {tab === 'clock' && (
          <div className="max-w-md mx-auto bg-slate-800 p-8 rounded-xl border border-slate-700 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Counter & Clock Demo</h2>
            {!(count! & 1) ? <TimeClock /> : <div className="text-red-400 font-mono p-4 border border-red-500/30 bg-red-900/10 rounded">Count is odd - Time Hidden</div>}
            
            <div className="mt-8 p-6 bg-slate-900 rounded-lg border border-slate-700 flex items-center justify-center gap-6">
              <button onClick={() => countTap?.update(dec)} className="w-12 h-12 rounded-full bg-red-600 text-white text-xl font-bold hover:bg-red-500 transition">-</button>
              <div className="text-4xl font-mono font-bold w-20">{count}</div>
              <button onClick={() => countTap?.update(inc)} className="w-12 h-12 rounded-full bg-green-600 text-white text-xl font-bold hover:bg-green-500 transition">+</button>
            </div>
          </div>
        )}

        {tab === 'calc' && (
          <div className="max-w-xs mx-auto bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-2xl">
            <div className="font-mono text-3xl text-right p-4 bg-black/50 text-green-400 rounded mb-4 h-16 overflow-hidden">
              {calcDisplay}
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button onClick={() => calcClearPressed?.()} className="col-span-3 bg-red-900/50 text-red-200 hover:bg-red-800 p-3 rounded font-bold">CLEAR</button>
              <button onClick={() => calcDivPressed?.()} className="bg-slate-700 hover:bg-slate-600 p-3 rounded font-bold text-blue-300">/</button>
              {[7,8,9].map(n => <button key={n} onClick={() => calcDigitPressed?.(n)} className="bg-slate-700 hover:bg-slate-600 p-3 rounded font-bold text-white">{n}</button>)}
              <button onClick={() => calcMulPressed?.()} className="bg-slate-700 hover:bg-slate-600 p-3 rounded font-bold text-blue-300">*</button>
              {[4,5,6].map(n => <button key={n} onClick={() => calcDigitPressed?.(n)} className="bg-slate-700 hover:bg-slate-600 p-3 rounded font-bold text-white">{n}</button>)}
              <button onClick={() => calcSubPressed?.()} className="bg-slate-700 hover:bg-slate-600 p-3 rounded font-bold text-blue-300">-</button>
              {[1,2,3].map(n => <button key={n} onClick={() => calcDigitPressed?.(n)} className="bg-slate-700 hover:bg-slate-600 p-3 rounded font-bold text-white">{n}</button>)}
              <button onClick={() => calcAddPressed?.()} className="bg-slate-700 hover:bg-slate-600 p-3 rounded font-bold text-blue-300">+</button>
              <button onClick={() => calcDigitPressed?.(0)} className="col-span-2 bg-slate-700 hover:bg-slate-600 p-3 rounded font-bold text-white">0</button>
              <button onClick={() => calcEqualsPressed?.()} className="col-span-2 bg-blue-600 hover:bg-blue-500 p-3 rounded font-bold text-white">=</button>
            </div>
          </div>
        )}

        {tab === 'weather' && <WeatherPanel />}
      </div>
    </div>
  );

  return <ResizableGraphWrapper>{mainContent}</ResizableGraphWrapper>;
}
