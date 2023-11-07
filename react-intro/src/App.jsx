import './App.css';
import React from 'react';
import Cards from './Cards';

// Componente funcional
function App() {

  const charactersDC = [
    { 
      id: "1",
      name: "Batman",
      occupation: "Bussinessman",  
    },
    {
      id: "2",
      name: "A-Bomb",
      occupation: "Musician, adventurer, author; formerly talk show host",
    },
    {
      id: "3",
      name: "Jake of Hearts",
      occupation: "Adventurer",
    },
    {
      id: "4",
      name: "Captain Atom",
      occupation: "Former Soldier",
    }
  ]

  const clickHandler = () => {
    alert("Click me");
  }

  return <div>
      <h1>Mi primera App en React con componentes funcionales</h1>
      <Cards charactersDC = {charactersDC} clickHandler = {clickHandler} />
    </div>;
}

export default App;










// Componente de clase
/*
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <h1>Mi primera App en React con componentes de clase</h1>;
  }
}
export default App;
*/
