// App.jsx
import React, { useMemo } from 'react';
import Dither from './Dither';
import './App.css';

export default function App() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const colorSteps = isMobile ? 5 : 2;
  const waveColor = isMobile ? [0.3, 0.3, 0.3] : [0, 0, 0];
  return (
    <div className="app">
      <div className="layer">
        <Dither
          waveColor={waveColor}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={colorSteps}
          waveAmplitude={0.3}
          waveFrequency={0}
          waveSpeed={0.04}
        />
      </div>
      <h1 className="title">the yuniverse.</h1>
    </div>
  );
}
