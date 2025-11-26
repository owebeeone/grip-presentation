import { useSelectGrip } from '@owebeeone/grip-react';
import type { GripContext } from '@owebeeone/grip-react';
import { WEATHER_LOCATION, WEATHER_LOCATION_TAP } from './grips.weather';

const OPTIONS = [
  'Sydney', 
  'Melbourne', 
  'San Jose', 
  'Palo Alto', 
  'Paris', 
  'Bella Vista, NSW',
  'Darwin',
  'Adelaide',
  'Perth',
  'Hobart',
  'Brisbane',
  'Gold Coast',
  'Newcastle',
  'Canberra',
  'Wollongong',
  'Cairns',
  'Toowoomba',
  'Sunshine Coast',
  'Mackay',
  'Townsville',
  'Rockhampton',
  'Bundaberg',
  'Gladstone',
  'Hervey Bay',
  'Maryborough',
  'Bunbury',
  'Port Macquarie',
  'Port Douglas',
  'Port Lincoln',
  'Port Pirie',
  'Port Augusta'] as const;

  export default function WeatherLocationSelect(props: { title: string; ctx: GripContext }) {
    const bind = useSelectGrip(WEATHER_LOCATION, WEATHER_LOCATION_TAP, {
      ctx: props.ctx,
    });

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
      <label style={{ minWidth: 80, color: '#f1f5f9' }}>{props.title}</label>
      <select 
        {...bind}
        style={{
          padding: '6px 12px',
          backgroundColor: '#1e293b',
          color: '#f1f5f9',
          border: '1px solid #475569',
          borderRadius: '6px',
          fontSize: '14px',
          cursor: 'pointer',
          minWidth: '200px'
        }}
      >
        {OPTIONS.map(opt => (
          <option key={opt} value={opt} style={{ backgroundColor: '#1e293b', color: '#f1f5f9' }}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

