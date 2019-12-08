import React, { Component } from 'react';
import President from './President';

export class gameBoard extends Component {

  render() {
    return (
      this.props.Presidents.map((president) => (
        <President key={president.id} president={president} />
      )));
  }
}

export default gameBoard