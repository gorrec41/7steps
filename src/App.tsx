import React from 'react';
import Header from './components/header/header'
import Description from './components/description/description';
import Lieader from './components/leader/leader';
import Advantages from './components/advantages/advantages'
import Training from './components/training/Training';
import Сhanges from './components/changes/changes';
import Rviews from './components/reviews/Rviews';
import './style/reset.scss'
import Rates from './components/rates/Rates';
import Article from './components/article/Article';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
        <Header/>
        <Description/>
        <Lieader/>
        <Advantages/>
        <Training/>
        <Сhanges/>
        <Rviews/>
        <Rates/>
        <Article/>
        <Footer/>
    </div>
  );
}

export default App;
