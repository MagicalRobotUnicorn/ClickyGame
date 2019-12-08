import React, { Component } from 'react';
import President from './President';

export class gameBoard extends Component {

  render() {
    let arrayOne = [];
    let arrayTwo = [];
    let arrayThree = [];
    let arrayFour = [];
    let arrayFive = [];
    let arraySix = [];
    let arraySeven = [];
    let arrayEight = [];
    let arrayNine = [];
    
    let allArrays = [arrayOne, arrayTwo, arrayThree, arrayFour, arrayFive, arraySix, arraySeven, arrayEight, arrayNine];

    let i = 0;
    for (let j = 0; j < allArrays.length; j++){
      for (let k= 0; k < 5; k++){
        (allArrays[j]).push(this.props.Presidents[i]);
        i++;
      }
    }

    console.log(allArrays);
    
    return (
      <div className="container">
      
      {allArrays.map((array) => (
        <div className="row">
        {array.map((president) => (
          <div className="col"><President key={president.id} president={president} clickPresident={this.props.clickPresident} /></div>
        ))}
        </div>
      ))}
      </div>
    )}
}

export default gameBoard