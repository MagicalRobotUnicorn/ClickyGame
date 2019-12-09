import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
import Header from './layout/Header';

const rawMaterial = require('./webscraping/allPresidents.json');

// Portion that is in App
// constructor() {
//   super();
//   this.state = {
//     showPopup: false
//   };
// }
// <button onClick={this.togglePopup.bind(this)}>show popup</button>

const randomPresidents = rawMaterial.sort(function (a, b) { return 0.5 - Math.random() }).slice(0, 15);

class App extends Component {

  // randomPresidents = randomPresidents.slice(0, 14);

  state = {
    Presidents: randomPresidents,
    Score: 0
  }

  // Toggle PopUp Function
  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  // Win Condition and Lose Condition


  // On Click Event for President
  clickPresident = (passedId) => {
    this.setState({
      Presidents: this.state.Presidents.map(president => {
        if (president.index === passedId) {
          if (president.checked === true) {
            console.log("You Lose");
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
    }
    );
  }

  // In the render add
  // <Router>
  //     <div className="App">
  //       <div className="container">
  //         <Header />
  //         <Route exact path="/" render={props => (
  //           <React.Fragment>
  //             <AddTodo addTodo={this.addTodo} />
  //             <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
  //           </React.Fragment>
  //         ) } />
  //         <Route exact path="/about" component={About} />
  //       </div>
  //     </div>
  //     </Router>


  render() {
    return (
      <div className="App">
        <Header Score={this.state.Score} />
        <GameBoard Presidents={this.state.Presidents} clickPresident={this.clickPresident} />
      </div>
    );
  }
}

// Also Add to render of App.js
// {this.state.showPopup ? 
//   <Popup
//     text='Close Me'
//     closePopup={this.togglePopup.bind(this)}
//   />
//   : null
// }

export default App;
