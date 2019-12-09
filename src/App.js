import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
import Header from './layout/Header';
import PopUp from './components/PopUp';

const rawMaterial = require('./webscraping/allPresidents.json');

const randomPresidents = rawMaterial.sort(function (a, b) { return 0.5 - Math.random() }).slice(0, 15);

class App extends Component {

  state = {
    Presidents: randomPresidents,
    Score: 0,
    endCondition: null,
    outGoingPresident: null
  }

  // Win Condition and Lose Condition
  endCondition = (condition, president = null) => {
    this.setState({
      endCondition: condition,
      outGoingPresident: president
    });
  }

  // CheckWin function
  checkWin = () => {
    for (let i = 0; i < this.state.Presidents.length; i++) {
      if (this.state.Presidents[i].checked === false) {
        return false;
      }
    }

    // Call Function to End Game with win
    this.endCondition(true);
  }


  // On Click Event for President
  clickPresident = (passedId) => {
    this.setState({
      Presidents: this.state.Presidents.map(president => {
        if (president.index === passedId) {
          if (president.checked === true) {

            // Call end condition for a loss
            this.endCondition(false, president);
          }
          else {
            president.checked = true;
            this.setState({ Score: (this.state.Score + 1) });
          }
        }
        return president;
      })
    });


    // Scramble
    let newOrder = this.state.Presidents.sort(function (a, b) { return 0.5 - Math.random() });

    // Use Scrambled Order as newOrder 
    this.setState({
      Presidents: newOrder
    });

    // Call CheckWin and Determine if Game is Over
    this.checkWin();
  }

  // Reset Game Function
  resetGame = () => {
    this.setState({
      Presidents: rawMaterial.sort(function (a, b) { return 0.5 - Math.random() }).slice(0, 15),
      Score: 0,
      endCondition: null,
      outGoingPresident: null
    });
    this.setState({
      Presidents: this.state.Presidents.map(president => {
        president.checked = false;
        return president;
      }
      )
    });
  }

  render() {
    return (
      <div className="App">
        <Header Score={this.state.Score} />
        <GameBoard Presidents={this.state.Presidents} clickPresident={this.clickPresident} checkWin={this.checkWin} />
        {
          this.state.endCondition === true ?
            <PopUp
              condition={this.state.endCondition}
              resetGame={this.resetGame.bind(this)}
              outGoingPresident={this.state.outGoingPresident}
              score={this.state.Score}
            />
            : null
        }
        {
          this.state.endCondition === false ?
            <PopUp
              condition={this.state.endCondition}
              resetGame={this.resetGame.bind(this)}
              outGoingPresident={this.state.outGoingPresident}
              score={this.state.Score}
            />
            : null
        }
      </div>
    );
  }
}

export default App;
