/* eslint-disable jsx-a11y/alt-text */
import React, { useDebugValue } from 'react'
import { Navbar } from './components'
import { cam6 } from './constants/images'

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
            titre1="Our Services"
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
        <div>
            <div className='my-8'>
                <div className='flex flex-col my-8 justify-center items-center gap-y-8 w-[90%]'>
                    <h3 className='text-[#64748b] text-[12px] uppercase'>{sousTitre1}</h3>
                    <h2 className='text-5xl w-[700px] text-center   capitalize'>{titre1}<span className='font-bold'>{titre2}</span></h2>
                </div>
                <div className='grid grid-cols-3 px-32 place-items-center gap-8 h-[300px]'>
                    <div className=' bg-cover bg-center flex flex-col justify-end items-center' style={{backgroundImage:`url(${image1})`, width: '100%', height: '100%'}}>
                        <div className='mb-8'>
                            <h1>{imageTitle1}</h1>
                            <h4> {imageSousTitle1} </h4>
                        </div>
                    </div><div className=' bg-cover bg-center flex flex-col justify-end items-center'style={{backgroundImage:`url(${image2})`, width: '100%', height: '100%'}}>
                        <div className='mb-8'>
                            <h1>{imageTitle1}</h1>
                            <h4> {imageSousTitle1} </h4>
                        </div>
                    </div><div className=' bg-cover bg-center flex flex-col justify-end items-center'style={{backgroundImage:`url(${image})`, width: '100%', height: '100%'}}>
                        <div className='mb-8'>
                            <h1>{imageTitle1}</h1>
                            <h4> {imageSousTitle1} </h4>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
    
}


export default Services
