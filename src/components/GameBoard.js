import React, { Component } from 'react';
import President from './President';

export class gameBoard extends Component {

  render() {
    let arrayOne = [];
    let arrayTwo = [];
    let arrayThree = [];

    
    let allArrays = [arrayOne, arrayTwo, arrayThree];

    let i = 0;
    for (let j = 0; j < allArrays.length; j++){
      for (let k= 0; k < 5; k++){
        (allArrays[j]).push(this.props.Presidents[i]);
        i++;
      }
    }
    
    return (
      <div className="container">
      
      {allArrays.map((array) => ( 
        <div className="row">
        {array.map((president) => (
          <div className="col presidentDiv"><President key={president.index} president={president} clickPresident={this.props.clickPresident} className="presidentDiv" /></div>
        ))}
        </div>
      ))}
      </div>
    )}
}

export default gameBoard