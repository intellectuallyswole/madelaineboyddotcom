import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Madelaine Boyd</h1>
        <div className="socials">
          <a href="https://github.com/intellectuallyswole" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon  icon={brands('github')} inverse className="social-icon"/>
            </a> 
          <a href="https://twitter.com/MadelaineBoyd" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon   icon={brands('twitter')} inverse className="social-icon"/></a> 
          <a href="https://www.linkedin.com/in/madelaine-boyd-ba5a1811/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon  icon={brands('linkedin')} inverse className="social-icon"/></a>
          </div>
      </header>
      <div className="talks-body">
      <h2>Talks</h2>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=wcW-rJ-Q_kc"><span className="talk-location">PyBay 2021</span><span className="talk-name">Descriptors: Why They Are Like Ninjas</span><span className="talk-technologies">(python)</span></a></li>
          <li><a href="https://www.youtube.com/watch?v=1NGGmHZJvyU"><span className="talk-location">DjangoCon 2021</span><span className="talk-name">The Pit of Success for Per Object Permissions in Django</span><span className="talk-technologies">(python, django)</span></a></li>
          <li><a href="https://www.facebook.com/watch/?v=2132426893697070"><span className="talk-location">Systems @Scale 2018</span><span className="talk-name">Holding it in @Scale: The systemd-tails on Containers, Composable Services, and Runtime Fun Times</span><span className="talk-technologies">(containers, systemd, service orchestration, distributed systems)</span></a></li>
          <li><a href="https://youtu.be/-KrF4bIofeo?t=149"><span className="talk-location">Paper Tech Talks</span><span className="talk-name">Building Contextually Aware Tutorials</span><span className="talk-technologies">(iOS, objective-C, UX)</span></a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
