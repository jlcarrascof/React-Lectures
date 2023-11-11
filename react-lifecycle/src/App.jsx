/* Usando el hook useEffect */
import Plantas from './Plantas';
import React, { useState, useRef, useEffect } from 'react';

function App() { 
  const [plants, setPlants] = useState({
    srcIndex: 0,
    plantas: [
      "https://photo620x400.mnstatic.com/d5f4adcc37adc8361ad96289174aac0a/coleccion-de-plantas-acuaticas.jpg?quality=70&format=pjpg",
      "https://okdiario.com/img/2018/08/25/plantas-tropicales-655x368.jpg",
      "http://www.tronya.co/wp-content/uploads/2016/05/plantas-sobreviven-1.jpg",
    ],
    montarComponente: true,
  });

  const { srcIndex, plantas, montarComponente } = plants;
  const src = plantas[srcIndex];
  const srcRef = useRef(src);

  const cambiarPlanta = () => { 
    setPlants(prevState => ({ 
      ...plants,
      srcIndex: (prevState.srcIndex + 1) % plants.plantas.length
    }));
  };

  const desmontarPlanta = () => { 
    setPlants(prevState => ({
      ...plants,
      montarComponente: !prevState.montarComponente
    }));
  };

  useEffect(() => {
    srcRef.current !== src ? console.log('Componente actualizado') : console.log('Montando componente');
    if (!montarComponente) { 
      console.log('Adios, componente desmontado');
    }
  }, [src, montarComponente]);

  return <div> 
    { montarComponente && <Plantas src={src} /> }
    <button onClick={cambiarPlanta}>Cambiar Planta</button>
    <button onClick={desmontarPlanta}>{ montarComponente ? 'Desmontar Componente' : 'Montar Componente' }</button>
  </div>   
}

export default App;
















/* Ciclo de vida con componentes de clase */
/*
import React from 'react';
import Plantas from './Plantas';
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

  cambiarPlanta = () => { 
    this.setState(prevState => ({ 
      srcIndex: (prevState.srcIndex + 1) % this.state.plantas.length,
    }));
  }

  desmontarPlanta = () => { 
    this.setState( (prevState) => ({
      montarComponente: !prevState.montarComponente,
    }));
  }

  render() {
    console.log('render');
    const { srcIndex, plantas, montarComponente } = this.state;
    const src = plantas[srcIndex];
    return <div>
        { montarComponente && <Plantas src={src} montarComponente = {montarComponente} /> }
        <button onClick={this.cambiarPlanta}>Cambiar Planta</button>
        <button onClick={this.desmontarPlanta}>
          { montarComponente ? 'Desmontar Componente' : 'Montar Componente' }
        </button>
      </div>
  }
} 

export default App
*/
