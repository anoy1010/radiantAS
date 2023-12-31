  import React, {useState, useEffect, useRef} from 'react'
  import { logo, logo1, logo2 } from '../../constants/images';
  import './Navbar.css';
  import {FiSearch} from 'react-icons/fi'
  import { gsap } from 'gsap';
  
  import ScrollTrigger from 'gsap/ScrollTrigger';

  const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const navHead = useRef (null)
    
    function Anim() {
      useEffect (() => {

        gsap.To( ".navHead", {
          y:1000,
          duration:3,
          ScrollTrigger: {
              trigger:"navHead",
              start:"top top",
              end:"bottom bottom",
              makers:true,
              scrub:true,
              toggleAction:"restart none none none"
              
          },
        })
      },[])
      
    }


    return (
      <nav className='navback navHead' >
        <div className='px-14 py-0 my-0 flex justify-between items-center'>
          <div className='flex  w-[500px] h-[100px] justify-between items-center gap-8  '>
            <img className='c w-[100px]' src={logo1} alt="Radiant" />
            <div className='flex justify-center items-center'>
              <ul className='flex gap-8 '>
              <div  className='hover-underline-animation dropdown dropdown-hover'>
                  <label tabIndex={0} href="" className=' text-[#111047] hover:text-[#FF9900] transition-transform ease-out duration-300s  '>Home</label>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 mt-2 shadow bg-[#111047] w-52">
                    <li className=''><a className='w-[90px] text-[#FF9900] hover:text-[#FF9900] hover-underline-animation'>Item 1</a></li>
                    <li className=''><a className='w-[90px] text-[#FF9900] hover:text-[#FF9900] hover-underline-animation'>Item 2</a></li>
                  </ul>
                </div>
                <div  className='hover-underline-animation dropdown dropdown-hover'>
                  <label tabIndex={1} href="" className=' text-[#111047] hover:text-[#FF9900] transition-transform ease-out duration-300s  '>Services</label>
                  <ul tabIndex={1} className="dropdown-content z-[1] menu p-2 mt-2 shadow bg-[#111047] w-52">
                    <li className=''><a className='w-[90px] text-[#FF9900] hover:text-[#FF9900] hover-underline-animation'>Item 1</a></li>
                    <li className=''><a className='w-[90px] text-[#FF9900] hover:text-[#FF9900] hover-underline-animation'>Item 2</a></li>
                  </ul>
                </div>
                <div  className='hover-underline-animation dropdown dropdown-hover'>
                  <label tabIndex={2} href="" className=' text-[#111047] hover:text-[#FF9900] transition-transform ease-out duration-300s  '>Pages</label>
                  <ul tabIndex={2} className="dropdown-content z-[1] menu p-2 mt-2 shadow bg-[#111047] w-52">
                    <li className=''><a className='w-[90px] text-[#FF9900] hover:text-[#FF9900] hover-underline-animation'>Item 1</a></li>
                    <li className=''><a className='w-[90px] text-[#FF9900] hover:text-[#FF9900] hover-underline-animation'>Item 2</a></li>
                  </ul>
                </div>
                <div  className='hover-underline-animation dropdown dropdown-hover'>
                  <label tabIndex={3} href="" className=' text-[#111047] hover:text-[#FF9900] transition-transform ease-out duration-300s  '>Contacts</label>
                  <ul tabIndex={3} className="dropdown-content z-[1] menu p-2 mt-2 shadow bg-[#111047] w-52">
                    <li className=''><a className='w-[90px] text-[#FF9900] hover:text-[#FF9900] hover-underline-animation'>Item 1</a></li>
                    <li className=''><a className='w-[90px] text-[#FF9900] hover:text-[#FF9900] hover-underline-animation'>Item 2</a></li>
                  </ul>
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
          </div>
        </div>
      </nav>
    )
  }

  export default Navbar