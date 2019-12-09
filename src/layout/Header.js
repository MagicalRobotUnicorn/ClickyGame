import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <header className="totalHeading">
        <div className="container">
        <div className="row d-flex justify-content-center"><h1 className="mainHeading col d-flex justify-content-center">The Presidential Clicky-Game</h1></div>
        <div className="row d-flex justify-content-center"><h3 className="instructionHeading col d-flex justify-content-center">Click on Each President Only Once...</h3></div>
        <div className="row d-flex justify-content-center"><h3 className="scoreDisplay col d-flex justify-content-center">Your Score: {this.props.Score}</h3></div>
        </div>
      </header>
    )
  }
}

export default Header
