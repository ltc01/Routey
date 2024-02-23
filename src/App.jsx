import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';


export const App = () => {
  return (
   <>
   <BrowserRouter>
   <header>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/contacts'>Contacts</Link>
    </nav>
   </header>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/projects' element={<Projects />}/>
    <Route path='/contacts' element={<Contacts />}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

