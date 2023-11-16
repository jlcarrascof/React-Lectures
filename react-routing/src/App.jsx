import { useState } from 'react'
import './App.css'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import DetailGallery from './components/DetailGallery'

const Vision = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return <div>
    <h2>Vision</h2>
    <button onClick={handleClick}>Go Home</button>
  </div>
}

const Mision = () => {
  return <div>Mision</div>
}

const History = () => {
  return <div>History</div>
}

function App() {
  return <div>
    <Home />
    <Routes>
      <Route path='/about' element={<About />}>
        <Route path='vision' element={<Vision />} />
        <Route path='mision' element={<Mision />} />
        <Route path='history' element={<History />} />
      </Route>  
      <Route path='/contact' element={<Contact />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/gallery/:detailGallery' element={<DetailGallery />} />
    </Routes>
  </div>    
}

export default App;
