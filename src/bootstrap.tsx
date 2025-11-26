// bootstrap.tsx
import React from 'react';
import { GripProvider } from '@owebeeone/grip-react';
import { grok, main } from './runtime';
import { registerAllTaps } from './taps';
import ReactDOM from 'react-dom/client';
import App from './App';

// Register taps upfront
registerAllTaps();

const root = ReactDOM.createRoot(document.getElementById('root')!);
const app = (
  <GripProvider grok={grok} context={main}>
    <App />
  </GripProvider>
);

root.render(app);

