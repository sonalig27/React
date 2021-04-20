import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id: "SG123",name : "Sonali", age : "33"},
      {id: "KB456",name : "Ketul", age : "34"},
      {id: "CB789",name : "Chandlo", age : "2"}
    ],
    additional : "Some random data",
    showPersons : false
  }

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons : [
  //       {name : newName, age : "33"},
  //       {name : "Ketul", age : "34"},
  //       {name : "Chandlo", age : "2"}
  //     ]
  //   })
  // }

  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({
      persons : persons})
  }


  toggleNameHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow,
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({
      persons : persons,
    })
  }

  render() {

    const style = {
      backgroundColor : 'white',
      border : '1px solid blue',
      cursor : 'pointer',
      padding : '8px',
      font : 'inherit'
    }

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person 
            name = {person.name} 
            age = {person.age}
            click = {() => this.deletePersonHandler(index)}
            key = {person.id}
            change = {(event) =>this.nameChangeHandler(event,person.id)}/>
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Welcome, My react app is working!</p>
        <button 
        style = {style}
        onClick = {this.toggleNameHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
