import React, { Component } from 'react';
import Radium,{StyleRoot} from 'radium';
import logo from './logo.svg';
import classes from './App.css';

import Person from './Person/Person'; 

class App extends Component {
  state = {
    person:[
      {id:'1', name:"Max", age: 24},
      {id:'2', name:"Manu", age:25},
      {id:'3',name:"Stephan", age:26}
    ],
    showPerson:false
  }

  switchHandler = (newName) =>{
   // console.log("Switch button clicked");
   this.setState({
    person:[
      {name:newName, age:24},
      {name:"Manu", age:25},
      {name:"Stephan", age:26}
    ]
   })
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.person[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;
    
    this.setState({
      person:[
        {name:"newName", age:24}, 
        {name:event.target.value, age:25},
        {name:"Stephan", age:26}
      ]
     })   
  }

  togglePersonHandler = () => {
      const doesShow = this.state.showPerson;
      this.setState({showPerson:!doesShow })
  }

  deleteHandler = (personIndex) =>{
    const persons = this.state.person.slice();
    persons.splice(personIndex,1);
    this.setState({person:persons});
  }

  render() {
    // const style = {
    //   backgroundColor:'green',
    //   color:'white',
    //   font:'inherit',
    //   border:'3px solid blue',
    //   padding:'10px',
    //   cursor:'pointer',
    //   ':hover':{
    //     backgroundColor:'lightgreen',
    //     color:'black'
    //   }
    // };
    let person = null;
    let btnClass = '';

    if(this.state.showPerson){
      person =(
          <div>
            {this.state.person.map((person, index) => {
              return <Person 
                click={() => this.deleteHandler(index)}
                name={person.name} 
                age={person.age} 
                key={person.id} 
                changed= {(event) => this.nameChangedHandler(event, person.id)}/>
            })}
            </div>
      );
      btnClass = classes.Red;
      // style.backgroundColor='red';

    }

    let assignedClasses = [];
    if(this.state.person.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.person.length <= 1){
      assignedClasses.push(classes.bold);
    }
    
    return (
      <StyleRoot>
      <div className={classes.App}>
        <h1>Welcome to React</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button 
          className={classes.App}
          onClick={this.togglePersonHandler}>Toggle Persons
        </button>

        {person}
      </div>
      </StyleRoot> 
    );
  }
}

export default Radium(App);
