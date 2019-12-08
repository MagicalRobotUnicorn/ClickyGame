import React from 'react';

class President extends React.Component {
  render() {
    const { id, image, name } = this.props.president;

    return (
      <React.Fragment>
        <img src={ image } alt={ name } onClick={ this.props.clickPresident.bind(this, id) }/>
      </React.Fragment>
    );
  }
}

export default President;
