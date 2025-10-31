import React from 'react'

const Footer = () => {
  return (
    <footer className=' flex flex-wrap h-[80vh] w-full justify-center items-center text-white p-10 gap-28'>
      <form 
      onSubmit={(e)=>{
        e.preventDefault()
      }}
      className='Form h-full w-1/3 justify-around p-4 bg-linear-to-br  from-cyan-800 to-blue-500 rounded-2xl flex flex-col'>
        <div className="flex flex-col">
          <label htmlFor="">Name:</label>
          <input className='bg-white text-black px-4 py-2 rounded' type="text" name="" id="" placeholder='Enter your name'/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Email:</label>
          <input className='bg-white text-black px-4 py-2 rounded' type="email" name="" id="" placeholder='Enter your email'/>
        </div>
        <textarea className='h-1/3 w-full p-2 rounded bg-gray-200 text-gray-600' name="" id="" placeholder='description' ></textarea>
        <button type="submit" className='p-5  bg-cyan-500 font-extrabold cursor-pointer w-fit rounded-2xl active:scale-90'>Send Email</button>
      </form>

      <div className='font-extrabold flex flex-col justify-center items-center text-9xl'>Thank<span>You !</span></div>
    </footer>
  )
}

export default Footer
