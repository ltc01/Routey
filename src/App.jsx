import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contacts from './pages/Contacts';


export const App = () => {
  return (
   <>
   <BrowserRouter>
   <header>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/services'>Services</Link>
      <Link to='/contacts'>Contacts</Link>
    </nav>
   </header>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/services' element={<Service />}/>
    <Route path='/contacts' element={<Contacts />}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

