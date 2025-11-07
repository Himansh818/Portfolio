import React from 'react'
import './ComponentsCss/App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Project from './Components/Project'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Components/About'
import Footer from './Components/Footer'
import Strap from './Components/Strap'
import Skills from './Components/Skills'

const App = () => {
  return (
    <Router>
      <div className="h-screen w-screen animated-gradient overflow-x-hidden relative">
        {/* Navbar always visible */}
        <div className="navbar absolute top-0 w-full flex justify-center z-50">
          <Navbar />
        </div>

        {/* Routes - show only one at a time */} 
        <Routes>
          <Route path="/" element={
              <div className="hero  flex flex-col justify-center items-center">
                <Hero />
                <About />
                <Skills />
                <Strap />
                <div className='flex justify-center items-center flex-col' >
                  <h1 className='projectName text-white lg:text-[200px] absolute font-extrabold '>PROJECTS</h1>
                  <Project />
                </div>
                <Footer />
              </div>
          } />

          <Route path="/projects" element={
            <div className="flex justify-center items-center min-h-screen">
              <Project />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
