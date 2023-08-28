import React, { useDebugValue,useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { ScrollToPlugin } from 'gsap/all' 
import { Navbar } from './components'

import { motion } from "framer-motion"; 
import './App.css'


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function HeroContact() {
  return(
    <div className='Container h-screen'>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.div className='rounded-full bg-white text-secondColor text-2xl'
              initial={{
                hidden:{ opacity: 1, scale: 0
                }
              }}
              animate={{
                visible: {opacity:1, scale:1, 
                  transition:{
                    delaychildren:0.3,
                    staggerchildren:0.2
                }}
              }}
              >
                <motion.svg className={} 
                initial= {{ hidden: { y: 20, opacity: 0 },}}
                animate={{visible: {
                  y: 0,
                  opacity: 1
                }}}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </motion.svg>
              </motion.div>
            </div>
          </div>
      </div>
    </div>
  )
  
}

const Contacts = () => {
  return (
    
    <div>
      <Navbar/>
      <HeroContact />
    </div>
  )
}

export default Contacts
