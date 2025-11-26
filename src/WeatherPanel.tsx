import React from 'react';
import { useGrip } from '@owebeeone/grip-react';
import { WEATHER_PROVIDER_NAME, WEATHER_PROVIDER_NAME_TAP } from './grips';
import WeatherColumn from './WeatherColumn';

export default function WeatherPanel() {
  const weatherProvider = useGrip(WEATHER_PROVIDER_NAME);
  const weatherProviderTap = useGrip(WEATHER_PROVIDER_NAME_TAP);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', padding: '8px', border: '1px solid #475569', borderRadius: '4px', backgroundColor: '#1e293b' }}>

        <span style={{ color: '#f1f5f9' }}>
          Current weather provider: <strong>{weatherProvider}</strong>
        </span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => weatherProviderTap?.set('meteo')}
            disabled={weatherProvider === 'meteo'}
            style={{
              padding: '6px 16px',
              borderRadius: '6px',
              border: '1px solid #475569',
              cursor: weatherProvider === 'meteo' ? 'not-allowed' : 'pointer',
              backgroundColor: weatherProvider === 'meteo' ? '#334155' : '#1e293b',
              color: weatherProvider === 'meteo' ? '#94a3b8' : '#f1f5f9',
              fontWeight: 'semibold',
              transition: 'all 0.2s',
              opacity: weatherProvider === 'meteo' ? 0.6 : 1
            }}
            onMouseEnter={(e) => {
              if (weatherProvider !== 'meteo') {
                e.currentTarget.style.backgroundColor = '#334155';
              }
            }}
            onMouseLeave={(e) => {
              if (weatherProvider !== 'meteo') {
                e.currentTarget.style.backgroundColor = '#1e293b';
              }
            }}
          >
            Meteo
          </button>
          <button
            onClick={() => weatherProviderTap?.set('mock')}
            disabled={weatherProvider === 'mock'}
            style={{
              padding: '6px 16px',
              borderRadius: '6px',
              border: '1px solid #475569',
              cursor: weatherProvider === 'mock' ? 'not-allowed' : 'pointer',
              backgroundColor: weatherProvider === 'mock' ? '#334155' : '#1e293b',
              color: weatherProvider === 'mock' ? '#94a3b8' : '#f1f5f9',
              fontWeight: 'semibold',
              transition: 'all 0.2s',
              opacity: weatherProvider === 'mock' ? 0.6 : 1
            }}
            onMouseEnter={(e) => {
              if (weatherProvider !== 'mock') {
                e.currentTarget.style.backgroundColor = '#334155';
              }
            }}
            onMouseLeave={(e) => {
              if (weatherProvider !== 'mock') {
                e.currentTarget.style.backgroundColor = '#1e293b';
              }
            }}
          >
            Mock
          </button>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        <WeatherColumn title="Location A" initialLocation="Sydney" />
        <WeatherColumn title="Location B" initialLocation="San Jose" />
      </div>
    </div>
  );
}

