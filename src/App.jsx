import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import Skills from './components/Skills';


export const App = () => {
  return (
   <>
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<Home />} children={<About />} />
    <Route path='/about' element={<About />}/>
    <Route path='/skills' element={<Skills />}/>
    <Route path='/projects' element={<Projects />}/>
    <Route path='/contacts' element={<Contact />}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

