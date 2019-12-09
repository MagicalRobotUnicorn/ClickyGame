import React from 'react';

class President extends React.Component {
  render() {
    const { index, image, name } = this.props.president;

    return (
      <React.Fragment>
        <img className="presidentImage" src={ image } alt={ name } onClick={ this.props.clickPresident.bind(this, index) }/>
      </React.Fragment>
    );
  }
}

export default President;
