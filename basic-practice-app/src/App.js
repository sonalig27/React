import React, {Component} from 'react';
import './App.css';
import Card from './components/Card';

class App extends Component {
  state = {
    articles : [
      {
        id : 1,
        title : "Article Title - 1",
        content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        color : "red"
      },
      {
        id : 2,
        title : "Article Title - 2",
        content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        color : "black"
      },
      {
        id : 3,
        title : "Article Title - 3",
        content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        color : "blue"
      },
      {
        id : 4,
        title : "Article Title - 4",
        content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        color : "green"
      }
    ],
    stylingColor : ''
  }

  colorChangeHandler = (newColor) => {
    this.setState({
      stylingColor : newColor
    })
  }


  render(){
    return (
      <div className="App">
        <header className = "AppHeader" style={{color:this.state.stylingColor}}>More than 900 Mayo Clinic staff members diagnosed with Covid-19 in midwest over two weeks</header>
        <div className='cardList'>
        {this.state.articles.map(article => (
          <Card key={article.id} article={article} stylingColor = {this.state.stylingColor} colorChangeHandler = {this.colorChangeHandler}/>
          ))}
        </div>
      </div>
    );

  }
}

export default App;
