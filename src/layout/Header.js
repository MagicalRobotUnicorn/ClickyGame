import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <header>
        <h1>The Presidential Clicky-Game</h1>
        <h3>Click on Each President Only Once...</h3>
        <h3>Your Score: {this.props.Score} </h3>
      </header>
    )
  }
}

export default Header
