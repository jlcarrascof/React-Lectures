import { useState } from 'react'
import './App.css'

const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

function App() {
  
  const [datos, setDatos] = useState({ 
    alumno: '',
    email: ''
  });

  const [error, setError] = useState({})

  const validate = (datos) => { 
    let errors = {}
    if (datos.alumno.length < 3) errors.alumno = 'Debes ingresar un nombre mayor a 3 caracteres'
    if (!emailRegexp.test(datos.email)) errors.email = 'Debe ingresar un correo válido'
    return errors;
  }

  const handleChange = (event) => {
    setDatos({...datos, [event.target.name]: event.target.value})
    setError(validate({...datos, [event.target.name]: event.target.value}))
  }

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
      className={error.alumno && 'warning' }
       />
      
      <span style={{color:'red', fontSize:'10px'}}>{error.alumno}</span>

      <label htmlFor="email">Correo: </label>
      <input 
      type="email" 
      id="email" 
      name="email" 
      value={datos.email} 
      onChange={handleChange}
      placeholder="Ingrese el Correo Electrónico"
      className={error.email && 'warning' } 
      />
      
      <span style={{color:'red', fontSize:'10px'}}>{error.email}</span> 
      <input type="submit" />
    </form>  
  </div>
}

export default App
