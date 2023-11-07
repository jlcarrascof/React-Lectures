import './App.css'
import React from 'react'

class App extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      name: 'Alberto',
      city: 'Bogotá'
    }
  }

  render() { 
    return (
      <div>
        <h1>React States</h1>
        <p>My name is {this.state.name}</p>
        <p>I live in {this.state.city}</p>
      </div>
    )
  }
}

export default App