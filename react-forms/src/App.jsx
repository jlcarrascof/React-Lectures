import { useState } from 'react'
import './App.css'

const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

function App() {

  const [alumno, setAlumno] = useState('')
  const [email, setEmail] = useState('')

  const handleChangeAlumno = (event) => {
    setAlumno(event.target.value)
  }

  const handleChangeEmail = (event) => { 
    setEmail(event.target.value)
  }

  return <div>
    <form>
      <label htmlFor="alumno">Alumno: </label>
      <input type="text" id="alumno" name="alumno" value={alumno} onChange={handleChangeAlumno}
      placeholder="Ingrese el nombre del Alumno" />
      <label htmlFor="email">Correo: </label>
      <input type="email" id="email" name="email" value={email} onChange={handleChangeEmail}
      placeholder="Ingrese el Correo Electrónico" />
      <input type="submit" value="Enviar" />
    </form>  
  </div>
}

export default App
