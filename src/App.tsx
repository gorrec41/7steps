import React from 'react';
import Header from './components/header/header'
import Description from './components/description/description';
import Lieader from './components/leader/leader';
import Advantages from './components/advantages/advantages'
import './style/reset.scss'
import Training from './components/training/Training';
import Сhanges from './components/changes/changes';
import Slider from './components/slider/slider';
function App() {
  return (
    <div className="App">
        <Header/>
        <Description/>
        <Lieader/>
        <Advantages/>
        <Training/>
        <Сhanges/>
        <Slider/>
    </div>
  );
}

export default App;
