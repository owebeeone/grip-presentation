import { useGrip } from '@owebeeone/grip-react';
import { CURRENT_TAB, CURRENT_TAB_TAP } from './grips';

export default function TabBar() {
  const tab = useGrip(CURRENT_TAB) as 'presentation' | 'clock' | 'calc' | 'weather';
  const tabTap = useGrip(CURRENT_TAB_TAP);
  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
      <button onClick={() => tabTap?.set('presentation')} disabled={tab === 'presentation'}>
        Presentation
      </button>
      <button onClick={() => tabTap?.set('clock')} disabled={tab === 'clock'}>
        Clock & Counter
      </button>
      <button onClick={() => tabTap?.set('calc')} disabled={tab === 'calc'}>
        Calculator
      </button>
      <button onClick={() => tabTap?.set('weather')} disabled={tab === 'weather'}>
        Weather
      </button>
    </div>
  );
}
