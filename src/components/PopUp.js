import React, { Component } from 'react';

class Popup extends Component {
  render() {
    if (this.props.condition === true) {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <div className="container">
              <div className="row">
                <div className="col-2">
                  <img src="./images/left_leaf.png" alt="Left Decorative Leaf" className="leftLeaf" />
                </div>
                <div className="col-8">
                  <h1 className="winHeading d-flex justify-content-center">You Win!</h1>
                  <br />
                  <img src="./images/columbia_statue.jpg" alt="Statue of Goddess Columbia" className="statuePicture d-flex justify-content-center" />
                  <br />
                  <button onClick={this.props.resetGame} className="btn btn-outline-dark resetGameButton d-flex justify-content-center"><div className="buttonText">Reset Game</div></button>
                </div>
                <div className="col-2">
                  <img src="./images/right_leaf.png" alt="Right Decorative Leaf" className="rightLeaf" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        // Start of New Div
        <div className='popup'>
          <div className='popup_inner'>
            <div className="container">
              <div className="row">
                <div className="col-2">
                  <img src="./images/left_leaf.png" alt="Left Decorative Leaf" className="leftLeaf" />
                </div>
                <div className="col-8">
                  <h1 className="winHeading d-flex justify-content-center">You Lose!</h1>
                  <br />
                  <img src={this.props.outGoingPresident.image} alt={this.props.outGoingPresident.name} className="losingImage d-flex justify-content-center" />
                  <br />
                  <h3 className="losingStatement d-flex justify-content-center">How could you forget about {this.props.outGoingPresident.name}, he was President number {this.props.outGoingPresident.index}!</h3>
                  <br />
                  <button onClick={this.props.resetGame} className="btn btn-outline-dark resetGameButton d-flex justify-content-center"><div className="buttonText">Reset Game</div></button>
                </div>
                <div className="col-2">
                  <img src="./images/right_leaf.png" alt="Right Decorative Leaf" className="rightLeaf" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Popup;
