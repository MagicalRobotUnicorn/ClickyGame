import React from 'react';

// If the remainer of the modulo is 0, end the current row create a new row

class President extends React.Component {
  render (){

    return(
      <React.Fragment>
      <img src={this.props.president.image} alt={this.props.president.name} />
      </React.Fragment>
  );
}
}
// "name": "Thomas Jefferson",
// "image": "http://www.presidenstory.com/usimag/phot2/jefferson.jpg",
//  "checked": false,
//  "index": 3

export default President;
