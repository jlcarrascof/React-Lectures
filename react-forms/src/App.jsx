import { useState } from 'react'
import './App.css'

const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

function App() {

  // const [alumno, setAlumno] = useState('')
  // const [email, setEmail] = useState('')
  const [datos, setDatos] = useState({ 
    alumno: '',
    email: ''
  });
  const [error, setError] = useState({})

  const handleChange = (event) => {
    setDatos({...datos, [event.target.value]: event.target.value})
  }

  /*
  const handleChangeEmail = (event) => { 
    setEmail(event.target.value)
    if (!emailRegexp.test(email)) setError('Debe ingresar un correo válido')
    else setError('');
  }
  */

  return <div>
    <form>
      
      <label htmlFor="alumno">Alumno: </label>
      <input 
      type="text" 
      id="alumno" 
      name="alumno" 
      value={datos.alumno} 
      onChange={handleChange}
      placeholder="Ingrese el nombre del Alumno"
       />
      
      <label htmlFor="email">Correo: </label>
      <input 
      type="email" 
      id="email" 
      name="email" 
      value={datos.email} 
      onChange={handleChange}
      placeholder="Ingrese el Correo Electrónico"
      className={error && 'warning' } 
      />
      
      <span style={{color:'red', fontSize:'10px'}}>{error}</span>
      <input type="submit" />
    </form>  
  </div>
}

export default App
