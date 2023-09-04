import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div className='flex gap-x-8 '>
      <Link to="">
        <button className='rounded-full w-auto px-6 h-[50px] bg-[#FF9900] text-[#111047] font-extrabold tracking-wide hover:bg-[#fcd190] transition ease-in-out duration-300  '> Visiter Safer </button>
      </Link>
      <Link to="/loginForm/Login">
        <button className=' rounded-full w-auto px-6 h-[50px] bg-[#FF9900] text-[#111047] font-extrabold tracking-wide hover:bg-[#fcd190] transition ease-in-out duration-300  '> connexion </button>
      </Link>
        
       
    </div>
  )
}

export default Button
