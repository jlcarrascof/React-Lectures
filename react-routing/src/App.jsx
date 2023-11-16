import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import DetailGallery from './components/DetailGallery'

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
