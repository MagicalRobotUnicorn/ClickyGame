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


  class App extends Component {
    state = {
      Presidents: rawMaterial.sort(function (a, b) { return 0.5 - Math.random() }),
      Score: 0
    }

    // Toggle PopUp Function
    togglePopup = () => {
      this.setState({
        showPopup: !this.state.showPopup
      });
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

        // console.log("First Round:", this.state.Presidents);

        // let newOrder = this.state.Presidents.sort(function (a, b) { return 0.5 - Math.random() });

        // Scramble 
        // rawMaterial.sort(function (a, b) { return 0.5 - Math.random() }),
        // this.setState({
        //   Presidents: newOrder
        //   }
        // );

        // console.log(this.state.Presidents); 
      }
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
