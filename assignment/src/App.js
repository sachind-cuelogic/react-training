import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    userInput:[
      {username:"sachind"}
    ]
  }
  
  nameChangedHandler = (event) => {
    this.setState({
      userInput:[
        {username:event.target.value}
      ]
     })   
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <UserOutput name={this.state.userInput[0].username}/>
        <UserInput 
          changed = {this.nameChangedHandler}/>
      </div>
    );
  }
}

export default App;
