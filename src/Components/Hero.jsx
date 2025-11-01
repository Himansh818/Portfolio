import React, { useState, useEffect } from 'react'
import '../ComponentsCss/Hero.css'
import { ToastContainer, toast } from 'react-toastify';
import About from './About'

const Hero = () => {

  const handleDownload =()=>{

    toast.success('🦄 Downloading CV..!', {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  }


  const roles = [
    'React ',
    'Frontend ',
    'UI/UX Designer /',
    'JavaScript ',
    'Web',
  ]

  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % roles.length)
        setFade(true)
      }, 500) // fade-out duration
    }, 2000) // change every 3s

    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <>
    

    <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />

    <div className='text-4xl h-screen justify-center items-center text-white flex flex-col gap-4'>
      <h3 className='t1 text-5xl font-extrabold text-center'>Himansh Chaudhary</h3>

      {/* ✅ Animated roles inside h1 */}
      <h1 className='t2 text-8xl font-extrabold text-center'>
        <span
          className={`transition-opacity duration-500 ${
            fade ? 'opacity-100 ' : 'opacity-0'
          }`}
        >
          {roles[index]}
        </span>
        <span className='text-emerald-500'> Developer</span>
      </h1>

      <h2 className='t3 text-4xl font-extrabold text-center'>Crafting beautiful, user-centric digital experiences</h2>

      <h4 className='t4 text-xl font-extrabold text-center flex flex-col'>
        @ By Considering your authorised{' '}
        <span className=' text-teal-500 '>
          abbreviation departments
        </span>
      </h4>



      <a href='/cv/Resume.pdf'
      download={'HimanshChaudhary_CV.pdf'}
      className='relative top-5 cursor-pointer text-xl font-bold px-5 py-2 bg-cyan-600 text-white rounded-2xl hover:bg-cyan-400 active:scale-90'
      onClick={handleDownload}>Download CV</a>
    </div>

    </>
  )
}

export default Hero
