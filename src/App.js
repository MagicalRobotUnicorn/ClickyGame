import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
const rawMaterial = require('./webscraping/allPresidents.json');

class App extends Component {
  state = {
    Presidents : rawMaterial
  }

  render() {
  return (
    <div className="App">
      <GameBoard Presidents={this.state.Presidents} />
    </div>
  );
  }
}

export default App;
