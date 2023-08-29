import React, { useDebugValue,useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { ScrollToPlugin } from 'gsap/all' 
import { Footer, Navbar } from './components'

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'


import { motion } from "framer-motion"; 
import './App.css'


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function HeroContact() {


  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }
    
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
              whileTap={{ scale: 0.8 }}
              animate={{
                
                opacity:1, scale:1, 
                  transition:{
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17,
                    duration:1,
                    repeatDelay:1
                }
              }}
              >
                <motion.svg
                initial= {{ hidden: { y: 20, opacity: 0 },}}
                animate={{visible: {
                  y: 0,
                  opacity: 1
                }}}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-24 h-24 hover:text-[#FF9900] cursor-pointer transition ease-in-out duration-300 ">
                  <motion.path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    variants={icon}
                    initial="hidden"s
                    animate="visible"
                    transition={{
                      default: { duration: 3, ease: "easeInOut" },
                      fill: { duration: 3, ease: [1, 0, 0.8, 1] }
                    }}
                    />
                </motion.svg>
              </motion.div>

              <motion.div className='rounded-full bg-white text-secondColor text-2xl'
              initial={{
                hidden:{ opacity: 1, scale: 0
                }
              }}
              whileTap={{ scale: 0.8 }}
              animate={{
                
                opacity:1, scale:1, 
                  transition:{
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17,
                    duration:1,
                    repeatDelay:1
                }
              }}
              >
                <motion.svg
                initial= {{ hidden: { y: 20, opacity: 0 },}}
                animate={{visible: {
                  y: 0,
                  opacity: 1
                }}}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-24 h-24 hover:text-[#FF9900] cursor-pointer transition ease-in-out duration-300 ">
                  <motion.path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    variants={icon}
                    initial="hidden"s
                    animate="visible"
                    transition={{
                      default: { duration: 2, ease: "easeInOut" },
                      fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }}
                    />
                </motion.svg>
              </motion.div>

              <motion.div className='rounded-full bg-white text-secondColor text-2xl'
              initial={{
                hidden:{ opacity: 1, scale: 0
                }
              }}
              whileTap={{ scale: 0.8 }}
              animate={{
                
                opacity:1, scale:1, 
                  transition:{
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17,
                    duration:1,
                    repeatDelay:1
                }
              }}
              >
                <motion.svg
                initial= {{ hidden: { y: 20, opacity: 0 },}}
                animate={{visible: {
                  y: 0,
                  opacity: 1
                }}}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-24 h-24 hover:text-[#FF9900] cursor-pointer transition ease-in-out duration-300 ">
                  <motion.path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    variants={icon}
                    initial="hidden"s
                    animate="visible"
                    transition={{
                      default: { duration: 3, ease: "easeInOut" },
                      fill: { duration: 3, ease: [1, 0, 0.8, 1] }
                    }}
                    />
                </motion.svg>
              </motion.div>
            </div>
          </div>
      </div>
    </div>
  )
  
}

function FeaturesContact () {
  const [agreed, setAgreed] = useState(false)
  return (
    <div>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Nom 
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Prenom
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
      </div>
    </div>
  )
}

const Contacts = () => {
  return (
    
    <div>
      <Navbar/>
      <HeroContact />
      <FeaturesContact />
      <Footer />
    </div>
  )
}

export default Contacts
