import React, { Component } from 'react';
import President from './President';

export class gameBoard extends Component {

  render() {
    let arrayOne = [];
    let arrayTwo = [];
    let arrayThree = [];
    let arrayFour = [];
    let arrayFive = [];
    
    let allArrays = [arrayOne, arrayTwo, arrayThree, arrayFour, arrayFive];

    let i = 0;
    for (let j = 0; j < allArrays.length; j++){
      for (let k= 0; k < 9; k++){
        (allArrays[j]).push(this.props.Presidents[i]);
        i++;
      }
    }

    console.log(allArrays);
    
    return (
      <div class="row">
      {this.props.Presidents.map((president) => (
        <President key={president.id} president={president} />
      ))}
      </div>
    )}
}

export default gameBoard