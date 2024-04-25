import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Recipes from './pages/Recipes'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App