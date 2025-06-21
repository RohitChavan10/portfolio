import React from 'react';
import Home from './section/Home';
import About from './section/About';
import Navbar from './components/Navbar.jsx';
import Projects from './section/Project.jsx'
import Skills from './section/Skills.jsx';
import './App.css';
import Contact from './section/Contact.jsx';

function App() {

  return (
    <>
     <Navbar/>
     <Home/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    </>
  );
}

export default App
