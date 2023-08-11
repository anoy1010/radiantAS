/* eslint-disable jsx-a11y/alt-text */
import React, { useDebugValue } from 'react'
import { Navbar } from './components'
import { cam6 } from './constants/images'
import {FaCheck} from 'react-icons/fa' 
import {PiDotsThreeOutlineFill} from 'react-icons/pi'
import {GiCalculator} from 'react-icons/gi'

const Services = () => {
  return (
    <div>
      <Navbar/>
      <Hero 
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
            titre1="Want to know about our  ofter first"
            titre2="suscribe to our newsletter"
        />

    </div>
  )
}

function Hero({titre1, text1, buttonText1, buttonText2 }) {
        return (
            <div>
                <div className=''>
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
        <div className='h-screen grid grid-cols-2 place-content-center px-24 gap-x-12'>
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
            <div className='flex flex-col  gap-y-8'>
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
        <div>
            <div className='py-8 flex flex-col justify-around items-center gap-y-8'>
                    <h3 className='text-[#64748b] text-[12px] uppercase'>{sousTitre1}</h3>
                    <h2 className='text-5xl w-[700px] text-center capitalize'>{titre1}<span className='font-bold'>{titre2}</span></h2>
                </div>
            <div>
                <div></div>
            </div>

        </div>
    )
    
}

export default Services
