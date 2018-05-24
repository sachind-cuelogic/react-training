import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component{

    constructor(props){
        super(props);
        console.log('inside const', props);

      }
    
      componentWillMount(){
        console.log('inside willmount');
      }
    
      componentDidMount(){
        console.log('inside didmount');
      }
    render(){
        return this.props.person.map((person, index) => {
            return <Person 
              click={() => this.props.clicked(index)}
              name={person.name} 
              age={person.age} 
              key={person.id} 
              changed= {(event) => this.props.changed(event, person.id)}/>
        });
    }
}

// const persons = (props) => 

export default Persons;