import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
import Header from './layout/Header';
const rawMaterial = require('./webscraping/allPresidents.json');

class App extends Component {
  state = {
    Presidents: rawMaterial.sort(function (a, b) { return 0.5 - Math.random() }),
    Score: 0
  }

  // On Click Event for President
  clickPresident = (id) => {
    const thisPresident = this.state.Presidents.find(x => x.id === id);

    if (thisPresident.checked === true) {
      console.log('You Lose...');
    }
    else {
      this.setState({
        Presidents: this.state.Presidents.map(president => {
          if (president.id === id) {
            president.checked = true;
          }
          return president;
        }),
        Score: (this.state.Score + 1)
      });

    }
  }

  render() {
    return (
      <div className="App">
        <Header Score={this.state.Score} />
        <GameBoard Presidents={this.state.Presidents} clickPresident={this.clickPresident} />
      </div>
    );
  }
}

export default App;
