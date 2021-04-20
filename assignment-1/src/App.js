import React, { Component } from 'react';
import './App.css';
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    users : [
      {username : "SG12345"},
      {username : "KB6789"},
      {username : "CGB0101"},
  ]}

  changeUserNameHandler = (event) => {
    this.setState({
      users : [
        {username : event.target.value},
        {username : "KB6789"},
        {username : "CGB0101"},
    ]
    })
  }

  render() {
    const style = {
      display: 'inline-block',
      width: '40%',
      margin: '10px',
      border: '1px solid #eee',
      boxShadow: '0 2px 2px #ccc',
      padding: '20px',
      textAlign : 'left',
    }
    return (
      <div className="App">
        <h1>Assignment 1</h1>
        <UserInput 
        username = {this.state.users[0].username}
        change ={this.changeUserNameHandler}/>
        <UserOutput style = {style} username = {this.state.users[0].username}/>
        <UserOutput style = {style} username = {this.state.users[1].username}/>
        <UserOutput style = {style} username = {this.state.users[2].username}/>
      </div>
    );
  }
}

export default App;
