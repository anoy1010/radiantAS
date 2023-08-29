import React from 'react'
import {AiFillFacebook, AiFillTwitterSquare, AiFillGooglePlusSquare} from 'react-icons/ai'
import {FaGitSquare} from 'react-icons/fa'



const Clientlogin = () => {
  return (
    <div>
        <div className='flex justify-between '>
            <div className='w-[450px] flex flex-col px-8 mr-32 justify-center bg-slate-400 rounded-2xl  h-[600px] items-center gap-y-8'>
                <div className='text-center'>
                    <h2 className='font-bold text-xl'> Account Login Partenaire</h2>
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
    </div>
  )
}

export default Clientlogin