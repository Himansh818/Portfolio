import React, { useEffect, useState } from 'react'
import './ComponentsCss/App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Project from './Components/Project'
import { Routes, Route } from 'react-router-dom'
import About from './Components/About'
import Footer from './Components/Footer'
import Strap from './Components/Strap'
import Skills from './Components/Skills'

const App = () => {

const [loading, setLoading] = useState(true)

useEffect(() => {
    // Jab poora page load ho jaye (including images, CSS, JS)
    const handlePageLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      // Agar already load ho chuka hai
      setLoading(false);
    } else {
      window.addEventListener("load", handlePageLoad);
      // Cleanup
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  return (
  <>
    {loading ? (
      <div className="loader h-screen w-screen bg-black text-white flex justify-center items-center">
          <h1 className='text-5xl font-extrabold'>Loading Portfolio...</h1>
      </div>
    ):(

    // <Router>
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
    // </Router>
    )}
  </>  
  )
}

export default App
