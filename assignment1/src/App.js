import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './userInput/userInput'
import UserOutput from './userOutput/userOutput'

class App extends Component {
  state = {
    username: 'sachind'
  };
  
  userNameChangeHandler = ( event ) =>{
    this.setState( { 
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <userOutput name={this.state.username}/>
        <userInput changed={this.userNameChangeHandler}/>
      </div>
    );
  }
}

export default App;
