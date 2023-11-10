import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      srcIndex: 0,
      plantas: [
        "https://photo620x400.mnstatic.com/d5f4adcc37adc8361ad96289174aac0a/coleccion-de-plantas-acuaticas.jpg?quality=70&format=pjpg",
        "https://okdiario.com/img/2018/08/25/plantas-tropicales-655x368.jpg",
        "http://www.tronya.co/wp-content/uploads/2016/05/plantas-sobreviven-1.jpg",
      ],
      montarComponente: true,
    };
  }

  render() {
    console.log('render');
    return (
      <div className="App">

        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
} 

export default App
