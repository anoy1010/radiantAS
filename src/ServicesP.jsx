import React from 'react'
import { Footer, Navbar } from './components'
import {FaCheck} from 'react-icons/fa'
import { cam1, t1 } from './constants/images'


function HeaderSE() {
  return (
    <>
      <div className='h-screen'>
        <div className='  flex flex-col gap-y-4 w-[50%] px-32 py-32'>
          <h3 className='text-lg text-firstColor font-semibold'>we supply protection</h3>
          <h1 className='text-5xl font-bold'>Personal Bodyguard <br /> for your safety</h1>
          <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud dolore magna aliqua.</p>
          <div className='flex gap-x-8'>
            <button className='px-8 py-4 bg-firstColor'> Get started</button>
            <button className='px-8 py-4 bg-firstColor'>Read more</button>
          </div>
        </div>
      </div>
    </>
  )
};

function Firstsect (){
  return(
    <>
      <div className='bg-firstColor py-24 grid grid-cols-2 gap-x-4 px-32'>
        <div className='flex flex-col gap-y-4 w-[85%]  justify-center '>
            <h3 className='text-lg text-firstColor font-semibold'>About Ormas</h3>
            <h1 className='text-5xl font-bold'>We Will Provide Top Class <br /> Protection To Clients</h1>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud dolore magna aliqua.</p>
            <div className='grid grid-cols-3 gap-x-4'>
              <div className='bg-secondColor gap-y-4 text-white w-auto h-auto px-4 py-6 flex flex-col justify-center items-center'>
                <i class="fa-solid fa-person-shelter"></i>
                <h2 className='font-semibold'> Personal Guard</h2>
                <p className='text-xs text-center'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className='bg-secondColor gap-y-4 text-white w-auto h-auto px-4 py-6 flex flex-col justify-center items-center'>
                <i class="fa-solid fa-person-shelter"></i>
                <h2 className='font-semibold'> Personal Guard</h2>
                <p className='text-xs text-center'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className='bg-secondColor gap-y-4 text-white w-auto h-auto px-4 py-6 flex flex-col justify-center items-center'>
                <i class="fa-solid fa-person-shelter"></i>
                <h2 className='font-semibold'> Personal Guard</h2>
                <p className='text-xs text-center'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
        </div>
        <div className='h-[80%]'>
          <img src={cam1} className='object-cover' alt="" />
        </div>
      </div>
    </>
  )
};

function Secondsect (){
  return (
    <>
      <div className='py-12 bg-secondColor text-white'>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col gap-y-4 px-32 w-[75%] text-center py-8 justify-center items-center '>
              <h3 className='text-lg text-firstColor font-semibold'>About Ormas</h3>
              <h1 className='text-5xl font-bold'>We Will Provide Top Class <br /> Protection To Clients</h1>
              <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud dolore magna aliqua.</p>
          </div>
          <div className='grid grid-cols-3 place-content-center place-items-center gap-8'>
            <div className='bg-firstColor flex flex-col justify-center items-center text-white h-[300px] w-[350px]'>
              <i class="fa-solid fa-person-shelter"></i>
              <h2 className='font-semibold'> Personal Guard</h2>
              <p className='text-xs text-center'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='bg-firstColor flex flex-col justify-center items-center text-white h-[300px] w-[350px]'>
              <i class="fa-solid fa-person-shelter"></i>
              <h2 className='font-semibold'> Personal Guard</h2>
              <p className='text-xs text-center'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='bg-firstColor flex flex-col justify-center items-center text-white h-[300px] w-[350px]'>
              <i class="fa-solid fa-person-shelter"></i>
              <h2 className='font-semibold'> Personal Guard</h2>
              <p className='text-xs text-center'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='bg-firstColor flex flex-col justify-center items-center text-white h-[300px] w-[350px]'>
              <i class="fa-solid fa-person-shelter"></i>
              <h2 className='font-semibold'> Personal Guard</h2>
              <p className='text-xs text-center'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='bg-firstColor flex flex-col justify-center items-center text-white h-[300px] w-[350px]'>
              <i class="fa-solid fa-person-shelter"></i>
              <h2 className='font-semibold'> Personal Guard</h2>
              <p className='text-xs text-center'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='bg-firstColor flex flex-col justify-center items-center text-white h-[300px] w-[350px]'>
              <i class="fa-solid fa-person-shelter"></i>
              <h2 className='font-semibold'> Personal Guard</h2>
              <p className='text-xs text-center'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Thirdsect () {

  const imageUrl = {t1};

  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // Ajoutez ici d'autres styles si nécessaire.
  };
  return (
    <>
      
      <div className='bg-white py-24 grid grid-cols-2 gap-x-4 px-32'>
        <div className='flex flex-col gap-y-4 w-[85%]  text-center justify-center '>
            <h3 className='text-lg text-firstColor text-center font-semibold'>About Ormas</h3>
            <h1 className='text-5xl font-bold text-center'>We Will Provide Top Class <br /> Protection To Clients</h1>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud dolore magna aliqua.</p>
            <div className=''>
              <div className=' grid grid-cols-2 place-content-center place-items-center w-[600px] px-6 py-12 shadow-2xl  bg-[#FF9900] gap-4'>
                  <div className='font-semibold flex gap-4 text-[#111047]'><FaCheck className='font-bold '/>Make key systems</div>
                  <div className='font-semibold flex gap-4 text-[#111047]'><FaCheck className='font-bold '/>Make key systems</div>
                  <div className='font-semibold flex gap-4 text-[#111047]'><FaCheck className='font-bold '/>Make key systems</div>
                  <div className='font-semibold flex gap-4 text-[#111047]'><FaCheck className='font-bold '/>Make key systems</div>
                  <div className='font-semibold flex gap-4 text-[#111047]'><FaCheck className='font-bold '/>Make key systems</div>
                  <div className='font-semibold flex gap-4 text-[#111047]'><FaCheck className='font-bold '/>Make key systems</div>
                  <div className='font-semibold flex gap-4 text-[#111047]'><FaCheck className='font-bold '/>Make key systems</div>
                  <div className='font-semibold flex gap-4 text-[#111047]'><FaCheck className='font-bold '/>Make key systems</div>
              </div>
            </div>
          </div>
          <div className='pt-24 flex text-center flex-col gap-y-4 w-[85%] justify-center '>
            <h3 className='text-lg text-firstColor text-center font-semibold'>About Ormas</h3>
            <h1 className='text-5xl font-bold text-center'>We Will Provide Top Class <br /> Protection To Clients</h1>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud dolore magna aliqua.</p>
            <div className=''>
              <div className=' grid grid-cols-2 place-content-center place-items-center w-[600px] px-6 py-12 shadow-2xl  bg-[#FF9900] gap-4'>
                  <div className='font-semibold flex flex-col justify-center items-center gap-4 text-[#111047]'><FaCheck className='font-bold '/>Make key systems</div>
                  <div className='font-semibold flex flex-col justify-center items-center gap-4 text-[#111047]'><FaCheck className='font-bold '/>Make key systems</div>
                  <div className='font-semibold flex flex-col justify-center items-center gap-4 text-[#111047]'><FaCheck className='font-bold '/>Make key systems</div>
                  <div className='font-semibold flex flex-col justify-center items-center gap-4 text-[#111047]'><FaCheck className='font-bold '/>Make key systems</div>
                  <div className='font-semibold flex flex-col justify-center items-center gap-4 text-[#111047]'><FaCheck className='font-bold '/>Make key systems</div>
                  <div className='font-semibold flex flex-col justify-center items-center gap-4 text-[#111047]'><FaCheck className='font-bold '/>Make key systems</div>
            </div>
          </div>
      </div>
      
      </div>
      <div className=''>
        <div class="container mx-auto relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://mdbcdn.b-cdn.net/img/new/slides/006.webp')] h-[500px]">
          
          <div class="mb-32 text-center absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
            <div class="px-6 py-12 Flex flex-col justify-center items-center md:px-12">
              <h3 className='text-lg text-firstColor text-center font-semibold'>About Ormas</h3>
              <h2 class="my-8 text-5xl text-white font-bold tracking-tight">
                Are you ready <br />
                <span class="text-white dark:text-secondColor-400">for an adventure?</span>
              </h2>
              <p className='text-center text-white px-32 mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud dolore magna aliqua.</p>
              
                <a class="mb-2 inline-block rounded bg-firstColor px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-secondColor-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-secondColor-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-secondColor-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                  data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">
                    Get started
                </a>
                <a class="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-firstColor transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-secondColor-600 focus:text-secondColor-600 focus:outline-none focus:ring-0 active:text-secondColor-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
                data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">
                    Learn more
                </a>
             
            </div>
          </div>
          
        </div>
      </div>
   
    </>
  ) 
}


const ServicesP = () => {
  return (
    <div>
      <Navbar />
      <HeaderSE />
      <Firstsect />
      <Secondsect />
      <Thirdsect />
      <Footer/>
    </div>
  )
}

export default ServicesP
