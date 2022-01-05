import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Madelaine Boyd</h1>
      </header>
      <h2> Talks</h2>
      <div className="talks-body">
        <ul>
          <li> <a href="https://youtu.be/-KrF4bIofeo?t=149">Paper Tech Talks - Building Contextually Aware Tutorials</a></li>
          <li><a href="https://www.facebook.com/watch/?v=2132426893697070">Holding it in @Scale: The systemd-tails on Containers, Composable Services, and Runtime Fun Times</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
