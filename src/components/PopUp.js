import React, { Component } from 'react'

class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
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
