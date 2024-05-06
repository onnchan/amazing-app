import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameCard from './components/GameCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/common.css';

function App() {
  return (
    <div className="App">

      <GameCard color={"red"}></GameCard>
    </div>
  );
}

export default App;
