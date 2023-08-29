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

function Newsletter(params) {
  return(

    <div className="container my-24 mx-auto md:px-6">

      <section className="mb-32">
        <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')]"></div>
        <div className="container px-6 md:px-12">
          <div
            className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-firstColor data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-firstColor [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput90" placeholder="Name" />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.4rem] peer-focus:scale-[0.7] peer-focus:text-firstColor peer-data-[te-input-state-active]:-translate-y-[1.4rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-firstColor"
                      for="exampleInput90">Name
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input type="email"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-firstColor data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-firstColor [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput91" placeholder="Email address" />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.4rem] peer-focus:scale-[0.7] peer-focus:text-firstColor peer-data-[te-input-state-active]:-translate-y-[1.4rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-firstColor"
                      for="exampleInput91">Email address
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                    <label for="exampleFormControlTextarea1"
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.4rem] peer-focus:scale-[0.7] peer-focus:text-firstColor peer-data-[te-input-state-active]:-translate-y-[1.4rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-firstColor">Message</label>
                  </div>
                  <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                    <input
                      className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-firstColor checked:bg-firstColor checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-firstColor dark:checked:bg-firstColor dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="checkbox" value="" id="exampleCheck96" checked />
                    <label className="inline-block pl-[0.15rem] hover:cursor-pointer" for="exampleCheck96">
                      Send me a copy of this message
                    </label>
                  </div>
                  <button type="button" data-te-ripple-init data-te-ripple-color="light"
                    className="mb-6 inline-block w-full rounded bg-firstColor px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-firstColor-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-firstColor-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-firstColor-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0">
                    Send
                  </button>
                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-firstColor-100 p-4 text-firstColor">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">
                          Technical support
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          support@example.com
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          +1 234-567-89
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-firstColor-100 p-4 text-firstColor">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">
                          Sales questions
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          sales@example.com
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          +1 234-567-89
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                    <div class="align-start flex">
                      <div class="shrink-0">
                        <div class="inline-block rounded-md bg-firstColor-100 p-4 text-firstColor">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                          </svg>
                        </div>
                      </div>
                      <div class="ml-6 grow">
                        <p class="mb-2 font-bold dark:text-white">Press</p>
                        <p class="text-neutral-500 dark:text-neutral-200">
                          press@example.com
                        </p>
                        <p class="text-neutral-500 dark:text-neutral-200">
                          +1 234-567-89
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                    <div class="align-start flex">
                      <div class="shrink-0">
                        <div class="inline-block rounded-md bg-firstColor-100 p-4 text-firstColor">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                          </svg>
                        </div>
                      </div>
                      <div class="ml-6 grow">
                        <p class="mb-2 font-bold dark:text-white">Bug report</p>
                        <p class="text-neutral-500 dark:text-neutral-200">
                          bugs@example.com
                        </p>
                        <p class="text-neutral-500 dark:text-neutral-200">
                          +1 234-567-89
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </div>


  )
  
}

function About() {
 return (
    <div>
    
      <div class="container my-24 mx-auto md:px-6">
        <section class="mb-32">
          <div class="container mx-auto text-center lg:text-left xl:px-32">
            <div class="flex grid items-center lg:grid-cols-2">
              <div class="mb-12 lg:mb-0">
                <div
                  class="block rounded-lg bg-[#e49341] px-8 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-14 lg:-mr-14 backdrop-blur-[30px]">
                  <h3 class="mb-3 text-2xl font-bold">
                    We know how valuable your time is
                  </h3>
                  <h5 class="mb-12 text-lg font-bold text-white dark:text-firstColor lg:mb-10 xl:mb-12">
                    Let us answer your questions
                  </h5>

                  <p class="mb-4 font-bold">
                    Anim pariatur cliche reprehenderit?
                  </p>
                  <p class="mb-6 text-secondColor dark:text-neutral-300">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                    autem numquam dolore molestias aperiam culpa alias veritatis
                    architecto eos, molestiae vitae ex eligendi libero eveniet
                    dolorem, doloremque rem aliquid perferendis.
                  </p>

                  <p class="mb-4 font-bold">
                    Non cupidatat skateboard dolor brunch?
                  </p>
                  <p class="mb-6 text-secondColor dark:text-neutral-300">
                    Distinctio corporis, iure facere ducimus quos consectetur ipsa
                    ut magnam autem doloremque ex! Id, sequi. Voluptatum magnam
                    sed fugit iusto minus et suscipit? Minima sunt at nulla
                    tenetur, numquam unde quod modi magnam ab deserunt ipsam sint
                    aliquid dolores libero repellendus cupiditate mollitia quidem
                    dolorem odit
                  </p>

                  <p class="mb-4 font-bold">
                    Praesentium voluptatibus temporibus consequatur non
                    aspernatur?
                  </p>
                  <p class="text-secondColor dark:text-neutral-300">
                    Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
                    deserunt ipsam sint aliquid dolores libero repellendus
                    cupiditate mollitia quidem dolorem.
                  </p>
                </div>
              </div>

              <div  className="w-full bg-[#6f6e6e] px-8 py-12 rounded-lg dark:bg-[hsla(0,0%,5%,0.55)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-black/20 md:px-14 lg:-mr-14 backdrop-blur-[30px]">
              <h3 class="mb-3 text-2xl font-bold">
                    We know how valuable your time is
                  </h3>
                  <h5 class="mb-12 text-lg font-bold text-white dark:text-firstColor lg:mb-10 xl:mb-12">
                    Let us answer your questions
                  </h5>

                  <p class="mb-4 font-bold">
                    Anim pariatur cliche reprehenderit?
                  </p>
                  <p class="mb-6 text-secondColor dark:text-neutral-300">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                    autem numquam dolore molestias aperiam culpa alias veritatis
                    architecto eos, molestiae vitae ex eligendi libero eveniet
                    dolorem, doloremque rem aliquid perferendis.
                  </p>

                  <p class="mb-4 font-bold">
                    Non cupidatat skateboard dolor brunch?
                  </p>
                  <p class="mb-6 text-secondColor dark:text-neutral-300">
                    Distinctio corporis, iure facere ducimus quos consectetur ipsa
                    ut magnam autem doloremque ex! Id, sequi. Voluptatum magnam
                    sed fugit iusto minus et suscipit? Minima sunt at nulla
                    tenetur, numquam unde quod modi magnam ab deserunt ipsam sint
                    aliquid dolores libero repellendus cupiditate mollitia quidem
                    dolorem odit
                  </p>

                  <p class="mb-4 font-bold">
                    Praesentium voluptatibus temporibus consequatur non
                    aspernatur?
                  </p>
                  <p class="text-secondColor dark:text-neutral-300">
                    Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
                    deserunt ipsam sint aliquid dolores libero repellendus
                    cupiditate mollitia quidem dolorem.
                  </p>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
 )
  
}
function Patner() {
  return(
    <div>
    <div class="container my-24 mx-auto md:px-6"> 
      <section class="mb-32">
        <h2 class="mb-12 text-center text-3xl font-bold">
          Ils ont <u class="">Confiances</u> en nous
        </h2>
        <div class="grid gap-6 lg:grid-cols-3">
          <div class="mb-6 lg:mb-0">
            <div
              class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div class="p-6">
                <div class="flex flex-wrap items-center">
                  <div class="flex-basis w-full shrink-0 grow-0 px-3 lg:w-5/12">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo4-1.png"
                      alt="Trendy Pants and Shoes" class="mb-6 dark:brightness-150 lg:mb-0" />
                  </div>
                  <div class="flex-basis w-full shrink-0 grow-0 px-3 lg:w-7/12">
                    <h5 class="mb-4 font-bold">Mattle</h5>
                    <ul class="mb-0 flex list-inside flex-row">
                      <a href="#!" class="pr-2">
                       
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-neutral-500 dark:text-neutral-300"
                          fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                      <a href="#!" class="px-2">
                      
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          class="h-4 w-4 text-neutral-500 dark:text-neutral-300">
                          <path fill="currentColor"
                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      <a href="#!" class="px-2">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          class="h-3.5 w-3.5 text-neutral-500 dark:text-neutral-300">
                          <path fill="currentColor"
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div class="mb-6 lg:mb-0">
            <div
              class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div class="p-6">
                <div class="flex flex-wrap items-center">
                  <div class="flex-basis w-full shrink-0 grow-0 px-3 lg:w-5/12">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo3-1.png"
                      alt="Trendy Pants and Shoes" class="mb-6 dark:brightness-150 lg:mb-0" />
                  </div>
                  <div class="flex-basis w-full shrink-0 grow-0 px-3 lg:w-7/12">
                    <h5 class="mb-4 font-bold">Coutiquee</h5>
                    <ul class="mb-0 flex list-inside flex-row">
                      <a href="#!" class="pr-2">

                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-neutral-500 dark:text-neutral-300"
                          fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                      <a href="#!" class="px-2">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          class="h-4 w-4 text-neutral-500 dark:text-neutral-300">
                          <path fill="currentColor"
                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      <a href="#!" class="px-2">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          class="h-3.5 w-3.5 text-neutral-500 dark:text-neutral-300">
                          <path fill="currentColor"
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div class="mb-6 lg:mb-0">
            <div
              class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div class="p-6">
                <div class="flex flex-wrap items-center">
                  <div class="flex-basis w-full shrink-0 grow-0 px-3 lg:w-5/12">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo1-1.png"
                      alt="Trendy Pants and Shoes" class="mb-6 dark:brightness-150 lg:mb-0" />
                  </div>
                  <div class="flex-basis w-full shrink-0 grow-0 px-3 lg:w-7/12">
                    <h5 class="mb-4 font-bold">Bpoint</h5>
                    <ul class="mb-0 flex list-inside flex-row">
                      <a href="#!" class="pr-2">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-neutral-500 dark:text-neutral-300"
                          fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                      <a href="#!" class="px-2">
                       
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          class="h-4 w-4 text-neutral-500 dark:text-neutral-300">
                          <path fill="currentColor"
                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      <a href="#!" class="px-2">
                       
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          class="h-3.5 w-3.5 text-neutral-500 dark:text-neutral-300">
                          <path fill="currentColor"
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
    
    </div>
  )
}


const Contacts = () => {
  return (
    
    <div>
      <Navbar/>
      <HeroContact />
      <About />
      <Patner/>
      <Newsletter/>
      <Footer />
    </div>
  )
}

export default Contacts
