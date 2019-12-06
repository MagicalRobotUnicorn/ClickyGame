import React, { Component } from 'react';
const Presidents = require('./webscraping/allPresidents.json');

class App extends Component {
  state = {
    Presidents
  }

  render() {
    console.log(this.state.Presidents);
  return (
    <div className="App">


      <Presidents />
      <div>Header</div>
      <div>Content</div>
      <div>Footer</div>
    </div>
  );
  }
}

export default App;
