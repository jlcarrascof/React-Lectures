import './App.css'
import React from 'react'
import Contador from './Contador'

function App() { 

}

export default App













// Ejemplo con componentes de clase.
/*
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
        <h2>My name is {this.state.name}</h2>
        <h2>I live in {this.state.city}</h2>
        <button onClick={() => {
          this.setState({name: 'Juan', city: 'Medellín'})
        }}>Change</button>
      </div>
    )
  }
}

export default App
*/