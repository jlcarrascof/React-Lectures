import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Gallery from './components/Gallery'

const Vision = () => {
  return <div>Vision</div>
}

const Mision = () => {
  return <div>Mision</div>
}

const History = () => {
  return <div>History</div>
}

function App() {

  return <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  </div>    
}

export default App
