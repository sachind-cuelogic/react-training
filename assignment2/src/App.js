import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppComp from './AppComp/AppComp';
import ValidatiolnText from './ValidationComponent/ValidationComponent'; 
import CharComponent from './CharComponent/CharComponent'; 

class App extends Component {
  state = {
    length : 0,
    text:"",
    character:''
    
  }
  nameChangedHandler = (event) => {
    this.setState({
      length: event.target.value.length,
      text:event.target.value
    });
    // console.log(event.target.value);
  }

  render() {

    var char = [(this.state.text).split('')]

    var charList = char.map((character) =>{
    });

    return (
      <div className="App">
        <h1>Welcome to React App</h1>
        <AppComp changed = {this.nameChangedHandler } 
        count = {this.state.length }/>
        <ValidatiolnText validation = {this.state.length}/>
        <CharComponent  char = {this.state.text}/>
        
      </div>
    );
  }
}

export default App;
