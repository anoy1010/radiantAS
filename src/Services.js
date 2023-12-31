/* eslint-disable jsx-a11y/alt-text */
import React, { useDebugValue, useRef,useEffect, useState } from 'react'
import { Footer, Navbar } from './components'
import { cam6 } from './constants/images'
import {FaCheck} from 'react-icons/fa' 
import {PiDotsThreeOutlineFill} from 'react-icons/pi'
import {GiCalculator} from 'react-icons/gi'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { video } from './constants/images'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import animation from './constants/animation'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const Services = () => {

useEffect(() => {
    const triggers = [
        {}
    ]
}

)


  return (

    <div>
      <Navbar />
      <HeroSection />   

      <BannersHero
        titre1="We Offer, "
        text1="Professional and exception Services"
        buttonText1="Make an appointement"
        />
        <ServP 
            sousTitre1="Absolute Safety"
            sousTitre2="What we do"

            titre1="Our Services "
            titre2="Makes your Business Secure"
            image1={cam6}
            image2={cam6}
            image3={cam6}
            imageTitle1="Home CCTYV stysems"
            imageSousTitle1="Nous avons tout a vous offrir"
            imageTitle2="Office securtiy system"
            imageSousTitle2="Nous avons tout a vous offrir"
            imageTitle3="Car parking surveillance"
            imageSousTitle3="Nous avons tout a vous offrir"
        />
        <WhatWeDo 
            sousTitre2="What we do"
            titre1="We provide service for multiple "
            titre2="custom in various industries"
            image2={cam6}

        />
        <PreniumServ 
            sousTitre1="Prenium service"
            titre1="our service "
            titre2="make your life comfortable"
        />
        <NewSletter
            sousTitre1=""
            titre1="Want to know about our  ofter first "
            titre2="suscribe to our newsletter"
        />
        <BannersFeat
            titre1="We Offer, "
            text1="Professional and exception Services"
            buttonText1="Make an appointement "
            buttonText2="Contact us online"
            image3={cam6}
        />
        <PreniumServScroll 
            sousTitre1="Prenium service"
            titre1="our service "
            titre2="make your life comfortable"
        />
        <Footer/>
    </div>
  )
}


function HeroSection(params) {
    return (
        <div>
            <div className='border rounded-lg p-8'>
                <video
                    src={video}
                    type="video/mp4"
                    className="clip w-full rounded-2xl "
                    autoplay loop controls muted>
                </video>
            </div>
        </div>
    )
    
}

function BannersHero({titre1, text1, buttonText1, buttonText2 }) {
        return (
            <div>
                <div className=''>
                    <div className='h-[200px] px-[150px] flex justify-around items-center bg-[#FF9900]'>
                        <div className='w-[600px]'>
                            <h2 className='text-4xl  capitalize'>{titre1} <span className='font-bold'>{text1}</span></h2>
                        </div>
                        <div className='space-x-8 '>
                            <button className='px-6 py-4 bg-[#111047] text-[#FF9900] hover:bg-[#25244e] uppercase font-semibold transition ease-in-out duration-300'>{buttonText1}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

function ServP({sousTitre1, titre1, titre2, image1,image2,image3, imageTitle1, imageTitle2, imageTitle3, imageSousTitle1, imageSousTitle2, imageSousTitle3}) {
    return (
        <div className='bg-gray-100'>
            <div className='my-4  h-screen flex flex-col justify-around'>
                <div className='flex flex-col items-center gap-8  text-center w-[100%]'>
                    <h3 className='text-[#64748b] text-[12px] uppercase'>{sousTitre1}</h3>
                    <h2 className='text-5xl w-[700px] text-center   capitalize'>{titre1}<span className='font-bold'>{titre2}</span></h2>
                </div>
                <div className='grid grid-cols-3 px-32 place-items-center gap-8 h-[400px]'>
                    <div className=' bg-cover bg-center flex brightness-50 h-[400px] flex-col justify-end items-center' style={{backgroundImage:`url(${image1})`, width: '100%', height: '100%'}}>
                        <div className='mb-8 absolute'>
                            <h1 className='font-bold text-3xl text-white'>{imageTitle1}</h1>
                            <h4 className='font-semibold text-white text-center'> {imageSousTitle2} </h4>
                        </div>
                    </div>
                    <div className=' bg-cover bg-center flex brightness-50 h-[400px] flex-col justify-end items-center'style={{backgroundImage:`url(${image2})`, width: '100%', height: '100%'}}>
                        <div className='mb-8 absolute'>
                            <h1 className='font-bold text-3xl text-white'>{imageTitle1}</h1>
                            <h4 className='font-semibold text-white text-center'> {imageSousTitle3} </h4>
                        </div>
                    </div>
                    <div className=' bg-cover bg-center flex brightness-50 h-[400px] flex-col justify-end items-center'style={{backgroundImage:`url(${image3})`, width: '100%', height: '100%'}}>
                        <div className='mb-8 absolute'>
                            <h1 className='font-bold text-3xl text-white'>{imageTitle1}</h1>
                            <h4 className='font-semibold text-white text-center'> {imageSousTitle1} </h4>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
    
}
function WhatWeDo ({sousTitre2, titre1, titre2, image2}) {
    const stats = [
        { id: 1, name: 'People', value: '100+' },
        { id: 2, name: 'Word offices', value: '16' },
        
      ]

    return (
        <div className='h-screen grid grid-cols-2 place-content-center px-24 gap-x-12 gs_reveal gs_reveal_fromLeft'>
            <div className='bg-cover bg-center relative' style={{backgroundImage:`url(${image2})`, width: '70%', height: '100%'}}>
                    <div className="absolute left-[90px] bottom-8 w-[500px] py-4 sm:py-8 bg-firstColor ">
                        <div className="px-6  lg:px-4 gap-8 ">
                            <dl className="grid grid-cols-2 gap-x-8 gap-y-16 text-center lg:grid-cols-2">
                                {stats.map((stat) => (
                                <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 gap-x-4">
                                    <dt className="order-first text-left leading-7 text-secondColor">{stat.name}</dt>
                                    <dd className=" text-3xl font-semibold tracking-tight text-secondColor sm:text-5xl">
                                    {stat.value}
                                    </dd>
                                </div>
                                ))}
                            </dl>
                        </div>
                    </div>
            </div>
            <div className='flex flex-col  gap-y-8 gs_reveal gs_reveal'>
                <h3 className='text-[#64748b] text-[12px] uppercase'>{sousTitre2}</h3>
                <h2 className='text-5xl w-[700px] text-left   capitalize'>{titre1}<span className='font-bold'>{titre2}</span></h2>
                <p className=''>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux </p>
                <div className='bottom-0 right-60 grid grid-cols-2 place-content-center place-items-center w-[600px] px-6 py-4 shadow-2xl  shadow-firstColor-500/40 gap-4'>
                    <div className='font-semibold flex gap-4 text-[#111047]'><FaCheck className='font-bold ' style={{color:"#FF9900"}}/>Make key systems</div>
                    <div className='font-semibold flex gap-4 text-[#111047]'><FaCheck className='font-bold ' style={{color:"#FF9900"}}/>Make key systems</div>
                    <div className='font-semibold flex gap-4 text-[#111047]'><FaCheck className='font-bold ' style={{color:"#FF9900"}}/>Make key systems</div>
                    <div className='font-semibold flex gap-4 text-[#111047]'><FaCheck className='font-bold ' style={{color:"#FF9900"}}/>Make key systems</div>
                    <div className='font-semibold flex gap-4 text-[#111047]'><FaCheck className='font-bold ' style={{color:"#FF9900"}}/>Make key systems</div>
                    <div className='font-semibold flex gap-4 text-[#111047]'><FaCheck className='font-bold ' style={{color:"#FF9900"}}/>Make key systems</div>
                    <div className='font-semibold flex gap-4 text-[#111047]'><FaCheck className='font-bold ' style={{color:"#FF9900"}}/>Make key systems</div>
                    <div className='font-semibold flex gap-4 text-[#111047]'><FaCheck className='font-bold ' style={{color:"#FF9900"}}/>Make key systems</div>
                  </div>
            </div>
        </div>
    )
    
}

function PreniumServ({sousTitre1, titre1, titre2}) {
    return(
        <div className='h-screen'>
            <div>
                <div className='py-8 flex flex-col justify-center items-center gap-y-8'>
                    <h3 className='text-[#64748b] text-[12px] uppercase'>{sousTitre1}</h3>
                    <h2 className='text-5xl w-[700px] text-center capitalize'>{titre1}<span className='font-bold'>{titre2}</span></h2>
                </div>
                <div className='py-4 grid grid-cols-1 px-24 gap-4 md:grid-cols-2 lg:grid-cols-4 '>
                    <div className='bg-white shadow-2xl text-center flex flex-col items-center gap-y-2 py-4'>
                        <div className='p-4'>
                            <GiCalculator className='font-bold text-[150px] text-firstColor'/>
                        </div>
                        <h2 className='font-bold text-3xl capitalize '>ip camera</h2>
                        <p>sod des esium od tempor </p>
                        <PiDotsThreeOutlineFill className=' font-bold text-secondColor/50 text-4xl'/>
                    </div>
                    <div className='bg-white shadow-2xl text-center flex flex-col items-center gap-y-2 py-4'>
                        <div className='p-4'>
                            <GiCalculator className='font-bold text-[150px] text-firstColor'/>
                        </div>
                        <h2 className='font-bold text-3xl capitalize '>ip camera</h2>
                        <p>sod des esium od tempor </p>
                        <PiDotsThreeOutlineFill className=' font-bold text-secondColor/50 text-4xl'/>
                    </div>
                    <div className='bg-white shadow-2xl text-center flex flex-col items-center gap-y-2 py-4'>
                        <div className='p-4'>
                            <GiCalculator className='font-bold text-[150px] text-firstColor'/>
                        </div>
                        <h2 className='font-bold text-3xl capitalize '>ip camera</h2>
                        <p>sod des esium od tempor </p>
                        <PiDotsThreeOutlineFill className=' font-bold text-secondColor/50 text-4xl'/>
                    </div>
                    <div className='bg-white shadow-2xl text-center flex flex-col items-center gap-y-2 py-4'>
                        <div className='p-4'>
                            <GiCalculator className='font-bold text-[150px] text-firstColor'/>
                        </div>
                        <h2 className='font-bold text-3xl capitalize '>ip camera</h2>
                        <p>sod des esium od tempor </p>
                        <PiDotsThreeOutlineFill className=' font-bold text-secondColor/50 text-4xl'/>
                    </div>
                </div>
                <div className='flex justify-center items-center my-8 '>
                    <a className="m-16 relative group cursor-pointer">
                        <a>View all services</a>
                        <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-firstColor duration-300 ease-in-out group-hover:w-1/2 group-hover:transition-all"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-firstColor duration-300 ease-in-out group-hover:w-1/2 group-hover:transition-all"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

function NewSletter({sousTitre1, titre1,titre2}) {
    return(
        <div className=''>
            <div className=''>
                <div className="relative isolate overflow-hidden bg-white  py-16 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                            <div className="max-w-xl lg:max-w-lg">
                                <h2 className='text-3xl w-[500px] text-left sm:text-4xl capitalize'>{titre1}<span className='font-bold'>{titre2}</span></h2>
                                <p className="mt-4 text-lg leading-8 text-secondColor">
                                Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                                dolore.
                                </p>
                                <div className="mt-6 flex max-w-md gap-x-4">
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="min-w-0 flex-auto rounded-md border-0 bg-firstColor/25 px-3.5 py-2 text-secondColor shadow-sm ring-1 ring-inset ring-firstColor/40 focus:ring-2 focus:ring-inset focus:ring-firstColor sm:text-sm sm:leading-6"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        type="submit"
                                        className="flex-none rounded-md bg-firstColor px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition ease-in duration-200 hover:bg-firstColor/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-firstColor"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                                    <div className="flex flex-col items-start">
                                        <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                            <CalendarDaysIcon className="h-6 w-6 text-firstColor" aria-hidden="true" />
                                        </div>
                                        <dt className="mt-4 font-semibold text-secondColor">Weekly articles</dt>
                                        <dd className="mt-2 leading-7 text-secondColor/70">
                                            Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                                        </dd>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                            <HandRaisedIcon className="h-6 w-6 text-firstColor" aria-hidden="true" />
                                        </div>
                                        <dt className="mt-4 font-semibold text-secondColor">No spam</dt>
                                        <dd className="mt-2 leading-7 text-secondColor/70">
                                            Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                            <div
                            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-firstColor/60 to-firstColor opacity-30"
                            style={{
                                clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            />
                        </div>
                    </div>
                </div>
        </div>
    )
}

function BannersFeat({titre1, text1, buttonText1, buttonText2, image3 }) {
    return (
        <div>
            <div className=''>
                <div class="container mx-auto py-2 ">
                    <div class="-m-1 flex flex-wrap h-[1000px] md:-m-2">
                        <div class="flex w-1/2 h-4/4 flex-wrap">
                            <div class=" w-full  h-full cursor-pointer relative overflow-hidden bg-cover2">
                                <img  data-popover-target="popover-description" 
                                alt="gallery"
                                class="block h-full w-full  object-cover object-center transition duration-300 ease-in-out hover:scale-110"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                                <div data-popover id="popover-description" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                                    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                                    </div>
                                    <div class="px-3 py-2">
                                        <p>And here's some amazing content. It's very engaging. Right?</p>
                                    </div>
                                    <div data-popper-arrow></div>
                                </div>

                            </div>
                        </div>
                        <div class="flex w-1/2 flex-wrap">
                            <div data-popover-target="popover-default" class=" w-1/2 cursor-pointer relative overflow-hidden bg-cover">
                                <img 
                                alt="gallery"
                                class="block h-full w-full  object-cover object-center transition duration-300 ease-in-out hover:scale-110"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                                <div data-popover id="popover-default" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                                    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                                    </div>
                                    <div class="px-3 py-2">
                                        <p>And here's some amazing content. It's very engaging. Right?</p>
                                    </div>
                                    <div data-popper-arrow></div>
                                </div>

                            </div>
                            <div data-popover-target="popover-default" class=" w-1/2 cursor-pointer relative overflow-hidden bg-cover">
                                <img 
                                alt="gallery"
                                class="block h-full w-full  object-cover object-center transition duration-300 ease-in-out hover:scale-110"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                                <div data-popover id="popover-default" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                                    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                                    </div>
                                    <div class="px-3 py-2">
                                        <p>And here's some amazing content. It's very engaging. Right?</p>
                                    </div>
                                    <div data-popper-arrow></div>
                                </div>

                            </div>
                            <div data-popover-target="popover-default" class=" w-1/2 cursor-pointer relative overflow-hidden bg-cover">
                                <img 
                                alt="gallery"
                                class="block h-full w-full  object-cover object-center transition duration-300 ease-in-out hover:scale-110"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                                <div data-popover id="popover-default" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                                    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                                    </div>
                                    <div class="px-3 py-2">
                                        <p>And here's some amazing content. It's very engaging. Right?</p>
                                    </div>
                                    <div data-popper-arrow></div>
                                </div>

                            </div>
                            <div data-popover-target="popover-default" class=" w-1/2 cursor-pointer relative overflow-hidden bg-cover">
                                <img 
                                alt="gallery"
                                class="block h-full w-full  object-cover object-center transition duration-300 ease-in-out hover:scale-110"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                                <div data-popover id="popover-default" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                                    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                                    </div>
                                    <div class="px-3 py-2">
                                        <p>And here's some amazing content. It's very engaging. Right?</p>
                                    </div>
                                    <div data-popper-arrow></div>
                                </div>

                            </div>  
                        </div>
                    </div>                          
                </div>
                <div className='h-[200px] px-[150px] flex justify-around items-center bg-[#FF9900]'>
                    <div className='w-[600px]'>
                        <h2 className='text-4xl  capitalize'>{titre1} <span className='font-bold'>{text1}</span></h2>
                    </div>
                    <div className='space-x-8 '>
                        <button className='px-6 py-4 bg-[#111047] text-[#FF9900] hover:bg-[#25244e] uppercase font-semibold transition ease-in-out duration-300'>{buttonText1}</button>
                        <button className='px-6 py-4 bg-[#FF9900] text-[#111047]  ring-2 ring-[#111047] uppercase font-semibold hover:text-[#FF9900] hover:bg-[#111047] transition ease-in-out duration-300'>{buttonText2}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
function PreniumServScroll({sousTitre1, titre1, titre2}) {

    const [swiperRef, setSwiperRef] = useState(null);

  


    return(
        <div className='h-[100%]'>
            <div>
                <div className='p-14 flex flex-col justify-center items-center gap-y-8'>
                    <h3 className='text-[#64748b] text-[12px] uppercase'>{sousTitre1}</h3>
                    <h2 className='text-5xl w-[700px] text-center capitalize'>{titre1}<span className='font-bold'>{titre2}</span></h2>
                </div>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    spaceBetween={10}
                    
                    breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 50,
                        },
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                <div >
                
                    <SwiperSlide className='py-4 grid grid-cols-1 px-24 gap-4 md:grid-cols-2 lg:grid-cols-4  hover:origin-top'>
                        <div className='group bg-white shadow-2xl text-center flex flex-col items-center gap-y-2 py-4 transition ease-in-out duration-300 hover:-translate-y-6'>
                            <div className='p-4'>
                                <GiCalculator className='font-bold text-[150px] text-firstColor transition ease-in  duration-300 group-hover:text-secondColor'/>
                            </div>
                            <h2 className='font-bold text-3xl capitalize '>ip camera</h2>
                            <p>sod des esium od tempor </p>
                            <PiDotsThreeOutlineFill className=' text-4xl font-bold text-secondColor/50 transition ease-in-out duration-300  group-hover:text-firstColor '/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-4 grid grid-cols-1 px-24 gap-4 md:grid-cols-2 lg:grid-cols-4  hover:origin-top'>
                        <div className='group bg-white shadow-2xl text-center flex flex-col items-center gap-y-2 py-4 transition ease-in-out duration-300 hover:-translate-y-6'>
                            <div className='p-4'>
                                <GiCalculator className='font-bold text-[150px] text-firstColor transition ease-in  duration-300 group-hover:text-secondColor'/>
                            </div>
                            <h2 className='font-bold text-3xl capitalize '>ip camera</h2>
                            <p>sod des esium od tempor </p>
                            <PiDotsThreeOutlineFill className=' text-4xl font-bold text-secondColor/50 transition ease-in-out duration-300  group-hover:text-firstColor '/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-4 grid grid-cols-1 px-24 gap-4 md:grid-cols-2 lg:grid-cols-4  hover:origin-top'>
                        <div className='group bg-white shadow-2xl text-center flex flex-col items-center gap-y-2 py-4 transition ease-in-out duration-300 hover:-translate-y-6'>
                            <div className='p-4'>
                                <GiCalculator className='font-bold text-[150px] text-firstColor transition ease-in  duration-300 group-hover:text-secondColor'/>
                            </div>
                            <h2 className='font-bold text-3xl capitalize '>ip camera</h2>
                            <p>sod des esium od tempor </p>
                            <PiDotsThreeOutlineFill className=' text-4xl font-bold text-secondColor/50 transition ease-in-out duration-300  group-hover:text-firstColor '/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-4 grid grid-cols-1 px-24 gap-4 md:grid-cols-2 lg:grid-cols-4  hover:origin-top'>
                        <div className='group bg-white shadow-2xl text-center flex flex-col items-center gap-y-2 py-4 transition ease-in-out duration-300 hover:-translate-y-6'>
                            <div className='p-4'>
                                <GiCalculator className='font-bold text-[150px] text-firstColor transition ease-in  duration-300 group-hover:text-secondColor'/>
                            </div>
                            <h2 className='font-bold text-3xl capitalize '>ip camera</h2>
                            <p>sod des esium od tempor </p>
                            <PiDotsThreeOutlineFill className=' text-4xl font-bold text-secondColor/50 transition ease-in-out duration-300  group-hover:text-firstColor '/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-4 grid grid-cols-1 px-24 gap-4 md:grid-cols-2 lg:grid-cols-4  hover:origin-top'>
                        <div className='group bg-white shadow-2xl text-center flex flex-col items-center gap-y-2 py-4 transition ease-in-out duration-300 hover:-translate-y-6'>
                            <div className='p-4'>
                                <GiCalculator className='font-bold text-[150px] text-firstColor transition ease-in  duration-300 group-hover:text-secondColor'/>
                            </div>
                            <h2 className='font-bold text-3xl capitalize '>ip camera</h2>
                            <p>sod des esium od tempor </p>
                            <PiDotsThreeOutlineFill className=' text-4xl font-bold text-secondColor/50 transition ease-in-out duration-300  group-hover:text-firstColor '/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-4 grid grid-cols-1 px-24 gap-4 md:grid-cols-2 lg:grid-cols-4  hover:origin-top'>
                        <div className='group bg-white shadow-2xl text-center flex flex-col items-center gap-y-2 py-4 transition ease-in-out duration-300 hover:-translate-y-6'>
                            <div className='p-4'>
                                <GiCalculator className='font-bold text-[150px] text-firstColor transition ease-in  duration-300 group-hover:text-secondColor'/>
                            </div>
                            <h2 className='font-bold text-3xl capitalize '>ip camera</h2>
                            <p>sod des esium od tempor </p>
                            <PiDotsThreeOutlineFill className=' text-4xl font-bold text-secondColor/50 transition ease-in-out duration-300  group-hover:text-firstColor '/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-4 grid grid-cols-1 px-24 gap-4 md:grid-cols-2 lg:grid-cols-4  hover:origin-top'>
                        <div className='group bg-white shadow-2xl text-center flex flex-col items-center gap-y-2 py-4 transition ease-in-out duration-300 hover:-translate-y-6'>
                            <div className='p-4'>
                                <GiCalculator className='font-bold text-[150px] text-firstColor transition ease-in  duration-300 group-hover:text-secondColor'/>
                            </div>
                            <h2 className='font-bold text-3xl capitalize '>ip camera</h2>
                            <p>sod des esium od tempor </p>
                            <PiDotsThreeOutlineFill className=' text-4xl font-bold text-secondColor/50 transition ease-in-out duration-300  group-hover:text-firstColor '/>
                        </div>
                    </SwiperSlide>
                    
                </div>
                </Swiper>

                <div className='flex justify-center items-center my-8 '>
                    <a className="m-16 relative group cursor-pointer">
                        <a>View all services</a>
                        <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-firstColor duration-300 ease-in-out group-hover:w-1/2 group-hover:transition-all"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-firstColor duration-300 ease-in-out group-hover:w-1/2 group-hover:transition-all"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Services
