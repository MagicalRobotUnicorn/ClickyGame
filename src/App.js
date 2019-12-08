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
  // points.sort(function(a, b){return 0.5 - Math.random()});
  clickPresident = (id) => {
    // const thisPresident = this.state.Presidents.find(x => x.id === id);

    if ((this.state.Presidents.filter(president => president.id === id).checked === true)) {
      console.log('You Lose...');
    }
    else {
      this.setState({
        presidents: this.state.Presidents.map(president => {
          if (president.id === id) {
            president.checked = true;
          }
          return president;
        })
      })
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
