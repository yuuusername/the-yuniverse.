// App.jsx
import Dither from './Dither';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <div className="layer">
        <Dither
          waveColor={[0, 0, 0]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={2}
          waveAmplitude={0.3}
          waveFrequency={0}
          waveSpeed={0.04}
        />
      </div>
      <h1 className="title">the yuniverse.</h1>
    </div>
  );
}
