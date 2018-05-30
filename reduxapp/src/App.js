import React, { Component } from 'react';

import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ol>
        </ol>
        <Persons />
      </div>
    );
  }
}

export default App;
