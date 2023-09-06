import React from 'react'
import {AiFillFacebook, AiFillTwitterSquare, AiFillGooglePlusSquare} from 'react-icons/ai'
import {FaGitSquare} from 'react-icons/fa'

const Register2 = () => {
  return (
    <div>
      <div className='flex justify-center '>
        <div className='w-[450px] flex flex-col px-8 justify-center bg-white shadow-lg shadow-firstColor ring-1 ring-firstColor rounded-2xl  h-auto py-8 items-center gap-y-8'>
            <div className='text-center'>
                <h2 className='font-bold text-xl'>Sign up 2 </h2>
            </div>
            <div className='flex flex-col w-[90%]'>
              <label htmlFor="Nom" className='text-sm font-semibold'> Nom: </label>
                <input type="text" placeholder='Veuillez remplir ce champ' className='rounded-lg border-firstColor focus:ring-firstColor focus:ring-2  contrast-more:placeholder-firstColor' />
            </div>
            <div className='flex flex-col w-[90%]'>
              <label htmlFor="Prenom" className='text-sm font-semibold'> Prenom: </label>
                <input type="text" placeholder='Veuillez remplir ce champ' className='rounded-lg border-firstColor focus:ring-firstColor focus:ring-2  contrast-more:placeholder-firstColor' />
            </div>
            <div className='flex flex-col w-[90%]'>
              <label htmlFor="Email" className='text-sm font-semibold'> Email: </label>
                <input type="email" placeholder='Veuillez remplir ce champ' className='rounded-lg border-firstColor focus:ring-firstColor focus:ring-2  contrast-more:placeholder-firstColor' />
            </div>
            <div className='flex flex-col w-[90%]'>
              <label htmlFor="Password" className='text-sm font-semibold'> Password: </label>
                <input type="password" placeholder='Veuillez rzmplir ce champ' className='rounded-lg border-firstColor focus:ring-firstColor focus:ring-2  contrast-more:placeholder-firstColor' />
            </div>
            
            
        </div>
    </div>
</div>
  )
}

export default Register2