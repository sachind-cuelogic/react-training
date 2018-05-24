import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppComp from './AppComp/AppComp';
import ValidatiolnText from './ValidationComponent/ValidationComponent'; 
import CharComponent from './CharComponent/CharComponent'; 

class App extends Component {
  state = {
    length : 0,
    inputString:"",
    character:''
    
  }
  nameChangedHandler = (event) => {
    this.setState({
      length: event.target.value.length,
      inputString:event.target.value
    });
    // console.log(event.target.value);
  }
  deleteCharacterHandler = (index) =>{
    const inputString = {...this.state.inputString};
  }

  render() {

    let charValue = null;

    if(this.state.length > 0){
      charValue = (
        <div>
          {this.state.inputString.split('').map((character, index) => {
            return <CharComponent char={character} click={this.deleteCharacterHandler.bind(this, index)}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Welcome to React App</h1>
        <AppComp changed = {this.nameChangedHandler } 
        count = {this.state.length }/>
        <ValidatiolnText validation = {this.state.length}/>
       
        {charValue}
      </div>
    );
  }
}

export default App;
