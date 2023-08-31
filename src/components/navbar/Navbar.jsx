  import React from 'react'
  import { logo, logo1 } from '../../constants/images';
  import './Navbar.css';
  import {FiSearch} from 'react-icons/fi'
  import { Link } from 'react-router-dom';
  import { Dropdown } from 'flowbite-react';




  const Navbar = () => {









    return (
     
     
      <nav className='navback'>
        <div className='px-14 py-0 my-0 flex justify-between items-center'>
          <div className='flex  w-[500px] h-[100px] justify-between items-center gap-8  '>
            <img className='c w-[100px]' src={logo1} alt="Radiant" />
            <div className='flex justify-center items-center menu-icon'>
              


              <ul className='flex gap-8' >
                <div  className='hover-underline-animation dropdown dropdown-hover'>
                  <label tabIndex={0} href="" className=' text-[#111047] hover:text-[#FF9900] transition-transform ease-out duration-300s  '><Link to='/'>Home</Link></label>
                </div>
                <div  className='hover-underline-animation dropdown dropdown-hover'>
                  <label tabIndex={1} href="" className='nav-item text-[#111047] hover:text-[#FF9900] transition-transform ease-out duration-300s'
                  >
                    <Link to='/Services'>
                      services
                    </Link>
                  </label>
                </div>
                <div  className='hover-underline-animation dropdown dropdown-hover'>
                  <label tabIndex={2} href="" className=' text-[#111047] hover:text-[#FF9900] transition-transform ease-out duration-300s  '><Link to='/About'>About  </Link></label>
                  
                </div>
                <div  className='hover-underline-animation dropdown dropdown-hover'>
                  <label tabIndex={3} href="" className=' text-[#111047] hover:text-[#FF9900] transition-transform ease-out duration-300s  '><Link to='/Contacts'>Contact</Link></label>
                  
                </div>
                <div>
                  <button> <FiSearch style={{color:'#111047', fontSize:'20px'}} /></button>
                </div>
              </ul>
            </div>
            
          </div>
          <div className='flex gap-8 items-center'>
            <p className='font-bold'>+225 0987 36778 83</p>
            <button className=' w-auto px-6 h-[50px] bg-[#FF9900] text-[#111047] font-extrabold tracking-wide hover:bg-[#fcd190] transition ease-in-out duration-300  '> Visiter Safer </button>
            <a href="" className=' w-auto px-6 h-[50px] bg-[#FF9900] text-[#111047] font-extrabold tracking-wide hover:bg-[#fcd190] transition ease-in-out duration-300 flex items-center text-xl'><Link to='/loginForm/Login'>Connexion/Inscription</Link></a>
          </div>

        </div>
      </nav>
    )
  }

  export default Navbar