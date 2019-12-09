import React, { Component } from 'react'

class Popup extends Component {
  render() {
    if (this.props.condition === true){
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>Congrats!</h1>
          <h3>You Win!</h3>
        <button onClick={this.props.resetGame}>Reset Game</button>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>You Lose</h1>
          <img src={this.props.outGoingPresident.image} alt={this.props.outGoingPresident.name} />
          <h3>How could you forget about {this.props.outGoingPresident.name}, he was President number {this.props.outGoingPresident.index}!</h3>
        <button onClick={this.props.resetGame}>Reset Game</button>
        </div>
      </div>
    );
  }
  }
}

export default Popup;
// export default PopUprender() {
//   return (
//     <div className='popup'>
//       <div className='popup_inner'>
//         <h1>{this.props.text}</h1>
//       <button onClick={this.props.closePopup}>close me</button>
//       </div>
//     </div>
//   );
// }
// }
// class App extends React.Component {
// constructor() {
//   super();
//   this.state = {
//     showPopup: false
//   };
// }
// togglePopup() {
//   this.setState({
//     showPopup: !this.state.showPopup
//   });
// }
// render() {
//   return (
//     <div className='app'>
//       <h1>hihi</h1>
//       <button onClick={this.togglePopup.bind(this)}>show popup</button>
