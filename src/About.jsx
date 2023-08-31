
import React from 'react'
import { Footer, Navbar } from './components'
import { logo } from './constants/images'


function HeaderAbout() {
    return (
        <div>
            <div class="h-screen bg-neutral-50 py-24 px-6 text-center dark:bg-neutral-900">
                <h1 class="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                    The best offer on the market <br /><span class="text-firstColor">for your business</span>
                </h1>
                <a class="mb-2 inline-block rounded bg-firstColor px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-firstColor-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-firstColor-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-firstColor-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                    data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
                <a class="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-firstColor transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-firstColor-600 focus:text-firstColor-600 focus:outline-none focus:ring-0 active:text-firstColor-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
                    data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a>
            </div>
        </div>
    )
}

function Section1 () {
    return(
        <div>
            <div class="container my-24 mx-auto md:px-6">

                <section class="mb-32">
                    <div class="flex flex-wrap">
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
                        <div class="flex lg:py-12">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/people/058.jpg"
                            class="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]" alt="image" />
                        </div>
                    </div>

                    <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                        <div
                        class="flex h-full items-center rounded-lg bg-yellow-600 p-6 text-center text-white lg:pl-12 lg:text-left">
                        <div class="lg:pl-12">
                            <h2 class="mb-8 text-3xl font-bold">Let it surprise you</h2>
                            <p class="mb-8 pb-2 lg:pb-0">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Maxime, sint, repellat vel quo quisquam accusamus in qui at
                            ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum
                            distinctio eum neque!
                            </p>

                            <div class="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
                            <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="mr-2 h-5 w-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Best team
                            </p>

                            <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="mr-2 h-5 w-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Best quality
                            </p>

                            <p class="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="mr-2 h-5 w-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Best experience
                            </p>
                            </div>

                            <p>
                            Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                            porta dui, sit amet rutrum enim massa in ante. Curabitur in
                            justo at lorem laoreet ultricies. Nunc ligula felis, sagittis
                            eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
                            ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis
                            faucibus sapien eget tortor finibus, a eleifend lectus dictum.
                            Cras tempor convallis magna id rhoncus. Suspendisse potenti.
                            Nam mattis faucibus imperdiet. Proin tempor lorem at neque
                            tempus aliquet. Phasellus at ex volutpat, varius arcu id,
                            aliquam lectus. Vestibulum mattis felis quis ex pharetra
                            luctus. Etiam luctus sagittis massa, sed iaculis est vehicula
                            ut.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

            </div>

        </div>
    )
}

function Banner1() {
    return (
        <div>
           
            <div class="container my-24 mx-auto md:px-6">
            
            <section class="mb-32 text-center md:text-left">
                <div class="flex flex-wrap justify-center">
                <div class="w-full shrink-0 grow-0 basis-auto px-3 lg:w-10/12">
                    <div class="grid items-center gap-x-6 md:grid-cols-2">
                    <div class="mb-6 md:mb-0">
                        <h2 class="text-3xl font-bold">
                        Let's stay in touch
                        <br />
                        <span class="text-firstColor dark:text-firstColor-400">Join our social media</span>
                        </h2>
                    </div>
                    
                    <div class="mb-6 md:mb-0 md:ml-auto">
                        
                        <button  type="button" data-te-ripple-init data-te-ripple-color="light"
                        className="mb-2 inline-block rounded-full bg-[#1877f2] p-3 text-xs hover:-translate-y-6 font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-4 w-4">
                            <path fill="currentColor"
                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                        </button>

                    
                        <button  type="button" data-te-ripple-init data-te-ripple-color="light"
                        className="mb-2 inline-block rounded-full bg-[#1da1f2] p-3 text-xs hover:-translate-y-6 font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-4 w-4">
                            <path fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                        </button>

                    
                        <button  type="button" data-te-ripple-init data-te-ripple-color="light"
                        className="mb-2 inline-block rounded-full bg-[#ea4335] p-3 text-xs hover:-translate-y-6 font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" class="h-4 w-4">
                            <path fill="currentColor"
                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                        </svg>
                        </button>

                        
                        <button  type="button" data-te-ripple-init data-te-ripple-color="light"
                        className="mb-2 inline-block rounded-full bg-[#c13584] p-3 text-xs hover:-translate-y-6 font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-4 w-4">
                            <path fill="currentColor"
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                        </button>

                        
                        <button  type="button" data-te-ripple-init data-te-ripple-color="light"
                        className="mb-2 inline-block rounded-full bg-[#0077b5] p-3 text-xs hover:-translate-y-6 font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-4 w-4">
                            <path fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                        </button>

                        
                        <button  type="button" data-te-ripple-init data-te-ripple-color="light"
                        className="mb-2 inline-block rounded-full bg-[#e60023] p-3 text-xs hover:-translate-y-6 font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="h-4 w-4">
                            <path fill="currentColor"
                            d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                        </svg>
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            </div>

        </div>
    )
}
function Team() {
    return (
        <div className='h-screen bg-secondColor text-white py-4 flex flex-col gap-y-24'>
            <div className='py-8'>
                <h1 className='text-4xl font-bold uppercase text-center'>Our leadership team</h1>
            </div>
            <div className='grid grid-cols-2 gap-8   px-8 h-[350px]'>
                <div className='text-center space-y-4 grid place-content-around'>
                    <div>
                        <h2 className='text-2xl font-semibold capitalize'>Monsieur</h2>
                        <h3>Chef de Sécurité</h3>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold capitalize'>Monsieur</h2>
                        <h3>Chef de Sécurité</h3>   
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold capitalize'>Monsieur</h2>
                        <h3>Chef de Sécurité</h3>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold capitalize'>Monsieur</h2>
                        <h3>Chef de Sécurité</h3>
                    </div>
                </div>
                <div className='text-center space-y-4 grid place-content-around'>
                    <div>
                        <h2 className='text-2xl font-semibold capitalize'>Monsieur</h2>
                        <h3>Chef de Sécurité</h3>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold capitalize'>Monsieur</h2>
                        <h3>Chef de Sécurité</h3>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold capitalize'>Monsieur</h2>
                        <h3>Chef de Sécurité</h3>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold capitalize'>Monsieur</h2>
                        <h3>Chef de Sécurité</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
function OurWork (){
    return(
        <div className='h-screen bg-firstColor'>
            <div className='flex flex-col'>
                <div className='py-8'>
                    <h1 className='text-4xl font-bold uppercase text-center'>Our Workplace</h1>
                </div>
                <div className='grid grid-cols-3 px-24 gap-x-8 place-content-center place-items-strecth mt-24'>
                    <div className='h-[418px] bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex flex-col justify-center gap-4 p-8 items-center text-center rounded-3xl'>
                        <div className="image">
                            <img src={logo} className='h-32' alt="" />
                        </div>
                        <div className="titre">
                        <h1 className='text-2xl font-bold'>60%</h1> 
                        </div>
                        <div className="para">
                            <p className='font-light'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid deleniti consectetur dicta necessitatibus, saepe modi, enim quia architecto corporis quo cum ipsum nulla cupiditate iste et accusantium. Explicabo, eligendi.
                            </p>
                        </div>
                    </div>
                    <div className='h-[418px] bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex flex-col justify-center gap-4 p-8 items-center text-center rounded-3xl'>
                        <div className="image">
                            <img src={logo} className='h-32' alt="" />
                        </div>
                        <div className="titre">
                          <h1 className='text-2xl font-bold'>60%</h1>  
                        </div>
                        <div className="para">
                            <p className='font-light'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid deleniti consectetur dicta necessitatibus, saepe modi, enim quia architecto corporis quo cum ipsum nulla cupiditate iste et accusantium. Explicabo, eligendi.
                            </p>
                        </div>
                    </div>
                    <div className='h-[418px] bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex flex-col justify-center gap-4 p-8 items-center text-center rounded-3xl'>
                        <div className="image">
                            <img src={logo} className='h-32' alt="" />
                        </div>
                        <div className="titre">
                          <h1 className='text-2xl font-bold'>60%</h1>  
                        </div>
                        <div className="para">
                            <p className='font-light'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid deleniti consectetur dicta necessitatibus, saepe modi, enim quia architecto corporis quo cum ipsum nulla cupiditate iste et accusantium. Explicabo, eligendi.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

const About =() => {
    return (
            <><Navbar />
               
                    <HeaderAbout/>
                    <Section1/>
                    <Banner1 />
                    <Team />
                    <OurWork />
                
                <Footer />
            </>  
    )
} 

export default About