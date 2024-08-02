import './App.css';
import React, { useState } from 'react';
import Container from './Components/Container';
import data from './data.json';

function App() {
  let [coordinates, setCoordinates] = useState({ x: 0, y: 0});
  let [backgroundGradient, setBackgroundGradient] = useState({
    background: 'rgba(6, 11, 64, 0.95)'
  });

  const mouseMovedEvent = (event) => {
    coordinates.x = event.pageX;
    coordinates.y = event.pageY;

    setBackgroundGradient({
      background: 'rgba(6, 11, 64, 0.95)',
      backgroundImage: `radial-gradient(600px at ${coordinates.x}px ${coordinates.y}px, rgba(56, 61, 114, 0.5), transparent 75%)`}
      // More a component in rgba color => brighter spot
      // more transparency % => bigger visible radius of torch
    );
  }

  

  return (
    <div className="app archivo-showcase" onMouseMove={mouseMovedEvent} style={backgroundGradient}>
      <Container data={data}/>
    </div>
  );
}

export default App;