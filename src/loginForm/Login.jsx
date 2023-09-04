import React, { useEffect, useRef}from 'react'
import { gsap } from 'gsap'
import {FaUserTie, FaUserShield, FaUsersGear, FaGitSquare} from 'react-icons/fa'
import {AiFillFacebook, AiFillTwitterSquare, AiFillGooglePlusSquare} from 'react-icons/ai'
import { ScrollTrigger } from 'gsap/all'
import { ScrollToPlugin } from 'gsap/all'
import { logo, logo1, logo2, pont, t1 } from '../constants/images'

import './Login.css'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function Login() {

    const slideOnTop = ( elem, delay, duration) => {
        gsap.from(
            elem, {
                opacity: 0,
                x:-200
            },{
                x:0,
                opacity:1,
                scrollTrigger:{
                    trigger:elem
                }
            }
        )
    }

    useEffect(() => {
      {/*slideOnTop("","1.5","1");*/}
    }, [])
    

  return (
    <div className='h-screen w-full  bg-cover'  style={{backgroundImage:`url(${t1})`}}>
        <div className='bg-black/50 h-screen'>
            <Logo />
            <Form />
            </div>
    </div>
  )
}
function Logo() {
    return (
        <div>
            <div className='px-24 pt-8'>
                <Link to="/"><img className='h-16' src={logo2} alt="Logo" /></Link>
            </div>
        </div>
    )
}
function Form() { 
    return(
        <div className='flex justify-between '>
            <div className='h-[500px] px-24 flex flex-col gap-y-8 justify-end'>
                <div className='flex flex-col w-[400px] text-white'>
                    <h2 className='text-xl font-semibold uppercase '>join your enterprise</h2>
                    <h1 className='text-6xl font-bold p-0 uppercase'>Company</h1>
                    <h3 className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem distinctio quae totam dolor deleniti deserunt, sapiente, minus ipsa temporibus asperiores officia, dolores dolorum? Beatae, laboriosam ipsa. Nesciunt quasi aliquam vel.</h3>
                </div>
                <div>
                    <div className='flex items-center'>

                    <Link to ='/loginForm/login'>
                        <button className='px-14 py-4 rounded-l-2xl bg-firstColor text-white hover:bg-white hover:text-firstColor  transition ease-in duration-200 '>Login</button>
                    </Link>

                    <Link to ='/loginForm/Register'>
                        <button className='px-14 py-4 rounded-r-2xl bg-white text-firstColor   hover:bg-firstColor hover:text-white hover:border-white   transition ease-in duration-200'>Register</button>
                    </Link>
                       
                        
                    </div>
                </div>
            </div>
            <div className='w-[450px] flex flex-col px-8 mr-32 justify-center bg-white rounded-2xl  h-[600px] items-center gap-y-8'>
                    <div className='text-center'>
                    <h2 className='font-bold text-xl'> Account Login</h2>
                </div>
                <div className='flex flex-col w-[90%] gap-y-8'>
                    <input type="text" placeholder='username and email' className='rounded-lg border-firstColor focus:ring-firstColor focus:ring-2  contrast-more:placeholder-firstColor' />
                    <input type="text" placeholder='password' className='rounded-lg border-firstColor focus:ring-firstColor focus:ring-2   contrast-more:placeholder-firstColor' />
                </div>
                <div className='flex w-[90%] justify-between'>
                    <div className='flex gap-x-2 items-center'>
                        <input type="checkbox" name="RememberMe" id="RememberMe" className='' />
                        <label htmlFor="RememberMe" className='font-semibold'> Remember Me </label>
                    </div>
                    <a className='text-[#11049] font-bold opacity-[0.7] text-sm hover:text-[#FF9900]' href="">forgot password</a>
                </div>
                <div className='w-[100%]'>
                    <button className='text-xl w-[100%] py-4 rounded-xl border-firstColor border-2  text-white bg-firstColor font-bold hover:bg-white hover:text-firstColor transition ease-in-out duration-100'>
                        login four you account
                    </button>
                </div>
                <div className='flex flex-col gap-y-8'>
                    <p>login with your social account</p>
                    <div className='flex gap-x-4 justify-center'>
                        <a href=""> <button><AiFillFacebook className='font-bold text-5xl text-blue-700  hover:-translate-y-4 transition ease-out duration-150'/></button></a>
                        <a href=""> <button><AiFillTwitterSquare className='font-bold text-5xl text-blue-500  hover:-translate-y-4 transition ease-out duration-150'/></button></a>
                        <a href=""> <button><AiFillGooglePlusSquare className='font-bold text-5xl text-red-500  hover:-translate-y-4 transition ease-out duration-150'/></button></a>
                        <a href=""> <button><FaGitSquare className='font-bold text-5xl  hover:-translate-y-4 transition ease-out duration-150'/></button></a>
                    </div>
                </div>
            </div>
        </div>
    )
        
}


export default Login