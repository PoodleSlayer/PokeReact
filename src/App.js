import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokedex from './components/pokedex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Pokedex coming soon...
          </p>
          <Pokedex />
        </header>
      </div>
    );
  }
}

export default App;
