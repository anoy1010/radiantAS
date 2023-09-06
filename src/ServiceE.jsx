import React from 'react';
import { Footer, Navbar } from './components'

import 'aos/dist/aos.css';
import Aos from 'aos';
import { cam1, cam3, cam4 } from './constants/images';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'



function HeroService () {

    useEffect (()=> {
      Aos.init({duration: 2000});
    }, [])

  return (
    <>
      <div className='h-screen grid grid-cols-2 place-content-center place-items-center px-32'>
        <div className='  flex flex-col gap-y-4 w-auto  py-32'>
          <h3 data-aos="fade-right" className='text-lg text-firstColor font-semibold'>we supply protection</h3>
          <h1 data-aos="fade-left" className='text-5xl font-bold'>Personal Bodyguard <br /> for your safety</h1>
          <p data-aos="fade-left" className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud dolore magna aliqua.</p>
          <div data-aos="fade-right" className='flex gap-x-8'>
            <button className='px-8 py-4 bg-firstColor'> Get started</button>
          </div>
        </div>
        <div data-aos="fade-up" className=' h-[500px]  z-10'>
          <img src={cam3} alt="" className='w-screen h-full object-cover' />
        </div>
      </div>
    </>
  )
}

function Firstsect () {
  return (
    <>
      <div>
        <div className=' px-8 grid grid-rows-3 grid-flow-col gap-8 h-[700px]' >
          <div className=" row-span-3">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="bg-firstColor text-white flex w-full justify-between rounded-lg  transition ease-in-out durarion-200 px-4 py-2 text-left text-sm font-medium  hover:bg-secondColor focus:outline-none focus-visible:ring focus-visible:ring-firstColor focus-visible:ring-opacity-75">
                      <span>What is your refund policy?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-7 w-7 text-white`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      If you're unhappy with your purchase for any reason, email us
                      within 90 days and we'll refund you in full, no questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="bg-firstColor text-white flex w-full justify-between rounded-lg  px-4 py-2 transition ease-in-out durarion-200 text-left text-sm font-medium hover:bg-secondColor focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>Do you offer technical support?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-7 w-7 text-white`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      No.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="bg-firstColor text-white flex w-full justify-between rounded-lg  px-4 py-2 transition ease-in-out durarion-200 text-left text-sm font-medium hover:bg-secondColor focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>Do you offer technical support?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-7 w-7 text-white`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      No.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="bg-firstColor text-white flex w-full justify-between rounded-lg  px-4 py-2 transition ease-in-out durarion-200 text-left text-sm font-medium hover:bg-secondColor focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>Do you offer technical support?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-7 w-7 text-white`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      No.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="bg-firstColor text-white flex w-full justify-between rounded-lg  px-4 py-2 transition ease-in-out durarion-200 text-left text-sm font-medium hover:bg-secondColor focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>Do you offer technical support?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-7 w-7 text-white`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      No.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="bg-firstColor text-white flex w-full justify-between rounded-lg  px-4 py-2 transition ease-in-out durarion-200 text-left text-sm font-medium hover:bg-secondColor focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>Do you offer technical support?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-7 w-7 text-white`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      No.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
          <div className='col-span-2'>
            <p> 
              Nunc lectus malesuada duis hac imperdiet primis nullam metus semper. Consectetuer eget dignissim justo felis eleifend hac non condimentum. Netus sit maecenas sollicitudin vivamus nullam faucibus vulputate auctor conubia lacus sodales. Litora leo sit nascetur penatibus luctus tempor pharetra. Platea est urna phasellus primis quam tristique lorem placerat luctus orci. Eros vivamus risus sed vehicula tincidunt dictum malesuada lobortis quam. Montes tempor eu vehicula nunc et purus.
              <br />
              Metus justo mus pellentesque sit ex cubilia vel mi quisque vulputate eros. Tempor egestas facilisis curabitur nibh consectetur dolor lobortis phasellus. Dis feugiat sociosqu ullamcorper suscipit nam nunc ex posuere ante eros inceptos. Letius nulla faucibus finibus malesuada lorem ultrices est. Elementum sit fringilla iaculis montes convallis tellus. In a metus mattis dictum sollicitudin.
            </p>
          </div>
          <div className='row-span-1 col-span-2 '>
            <img src={cam4} alt="" className='w-screen h-full object-cover' />
          </div>
        </div>
      </div>
    </>
  )
}

function Barner(){
  return(
    <>
      <div>
        
          <div class="mb-12 lg:mb-24 flex justify-center items-center ">
            <div
              class="relative text-center w-[80%] z-[1] block rounded-lg bg-secondColor text-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mt-14 backdrop-blur-[30px]">
              <h2 class="mb-6 text-4xl font-bold">Why is it so great?</h2>
              <p class="mb-12 text-white dark:text-neutral-300">
                Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                neque iaculis malesuada. Aenean gravida magna orci, non
                efficitur est porta id. Donec magna diam.
              </p>

              <div class="grid gap-x-6 md:grid-cols-3">
                <div class="mb-12 md:mb-0">
                  <h2 class="text-dark mb-4 text-3xl font-bold">10%</h2>
                  <h5 class="mb-0 text-lg font-medium text-white dark:text-neutral-300">
                    Less sugar
                  </h5>
                </div>

                <div class="mb-12 md:mb-0">
                  <h2 class="text-dark mb-4 text-3xl font-bold">70%</h2>
                  <h5 class="mb-0 text-lg font-medium text-white dark:text-neutral-300">
                    More flavor
                  </h5>
                </div>

                <div class="">
                  <h2 class="text-dark mb-4 text-3xl font-bold">0%</h2>
                  <h5 class="mb-0 text-lg font-medium text-white dark:text-neutral-300">
                    Gluten
                  </h5>
                </div>
              </div>
            </div>
          </div>
   
      </div>
    </>
  )
}
function Herosection () {
  return (
    <>
      <div className='grid grid-cols-2 h-screen'>
        <div>
          <img src={cam1} className='bg-cover object-cover h-screen w-auto' alt="" />
        </div>
        <div>
          <div>
            <div className='h-screen  place-content-center place-items-center px-32'>
              <div className=' flex flex-col gap-y-4 w-auto  py-32'>
                <h3  className='text-lg text-firstColor font-semibold'>we supply protection</h3>
                <h1  className='text-5xl text-secondColor font-bold'>Personal Bodyguard <br /> for your safety</h1>
                <p  className='text-secondColor'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud dolore magna aliqua.</p>
                <div  className='flex gap-x-8'>
                  <button className='px-8 py-4 bg-firstColor'> Get started</button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Cardsection (){
  return (
    <>
      <div className=''>
        <div className="py-4 text-center space-y-4 flex flex-col items-center">
          <h3 className='text-[#64748b] text-[12px] uppercase'>prenium services</h3>
          <h2 className='text-5xl  capitalize text-secondColor'>Our services <span className='font-bold'>make your bussiness secure</span></h2>
          <p className='w-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore doloribus et iste fugiat, voluptatem dignissimos delectus.</p>
        </div>
        <div class="grid-cols-1 px-32 sm:grid md:grid-cols-3  pt-8">
          <div
            class="mx-3 mt-6 flex flex-col self-start cursor-pointer group rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                class="hover:origin-center hover:scale-75 hover:rotate-12 transition ease-in-out duration-300"
                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                alt="Hollywood Sign on The Hill" />
            </a>
            <div class="p-6">
              <h5
                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div
            class="mx-3 mt-6 flex flex-col self-start cursor-pointer group rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                class="hover:origin-center hover:scale-75 hover:rotate-12 transition ease-in-out duration-300"
                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                alt="Hollywood Sign on The Hill" />
            </a>
            <div class="p-6">
              <h5
                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div
            class="mx-3 mt-6 flex flex-col self-start cursor-pointer group rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                class="hover:origin-center hover:scale-75 hover:rotate-12 transition ease-in-out duration-300"
                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                alt="Hollywood Sign on The Hill" />
            </a>
            <div class="p-6">
              <h5
                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div
            class="mx-3 mt-6 flex flex-col self-start cursor-pointer group rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                class="hover:origin-center hover:scale-75 hover:rotate-12 transition ease-in-out duration-300"
                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                alt="Hollywood Sign on The Hill" />
            </a>
            <div class="p-6">
              <h5
                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div
            class="mx-3 mt-6 flex flex-col self-start cursor-pointer group rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                class="hover:origin-center hover:scale-75 hover:rotate-12 transition ease-in-out duration-300"
                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                alt="Hollywood Sign on The Hill" />
            </a>
            <div class="p-6">
              <h5
                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div
            class="mx-3 mt-6 flex flex-col self-start cursor-pointer group rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                class="hover:origin-center hover:scale-75 hover:rotate-12 transition ease-in-out duration-300"
                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                alt="Hollywood Sign on The Hill" />
            </a>
            <div class="p-6">
              <h5
                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
 }
function Secondsect () {
  return (
    <>
      <div className='py-8'>
        <div className="py-4 text-center space-y-4 flex flex-col items-center">
          <h3 className='text-[#64748b] text-[12px] uppercase'>prenium services</h3>
          <h2 className='text-5xl  capitalize text-secondColor'>Our services <span className='font-bold'>make your bussiness secure</span></h2>
          <p className='w-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore doloribus et iste fugiat, voluptatem dignissimos delectus.</p>
        </div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:py-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="group flex w-1/4 flex-wrap">
            <div
              data-te-ripple-init
              data-te-ripple-color="light"
              className=" group-hover:opacity-80 group-hover:scale-125 transition ease-in-out duration-300 w-full  ">
               <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
            </div>
            <div className=''>
              <p></p>
            </div>
          </div>
          <div className="group flex w-1/4 flex-wrap">
            <div
              data-te-ripple-init
              data-te-ripple-color="light"
              className=" group-hover:opacity-80 group-hover:scale-125 transition ease-in-out duration-300 w-full  ">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
            </div>
            <div className=''>
              <p></p>
            </div>
          </div>
          <div className="group flex w-1/4 flex-wrap">
            <div
              data-te-ripple-init
              data-te-ripple-color="light"
              className=" group-hover:opacity-80 group-hover:scale-125 transition ease-in-out duration-300 w-full ">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
            </div>
            <div className=''>
              <p></p>
            </div>
          </div>
          <div className="group flex w-1/4 flex-wrap">
            <div
              data-te-ripple-init
              data-te-ripple-color="light"
              className=" group-hover:opacity-80 group-hover:scale-125 transition ease-in-out duration-300 w-full">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
            </div>
            <div className=''>
              <p></p>
            </div>
          </div>
          <div className="group flex w-1/4 flex-wrap">
            <div
              data-te-ripple-init
              data-te-ripple-color="light"
              className=" group-hover:opacity-80 group-hover:scale-125 transition ease-in-out duration-300 w-full ">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
            </div>
            <div className=''>
              <p></p>
            </div>
          </div>
          <div
              data-te-ripple-init
              data-te-ripple-color="light"
            className="group flex w-1/4 flex-wrap">
            <div class="group-hover:opacity-80 group-hover:scale-125 transition ease-in-out duration-300 w-full ">
                <img
                  alt="gallery"
                  class="block h-full w-full rouect-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
            </div>
            <div className=''>
              <p></p>
            </div>
          </div>
          <div className="group flex w-1/4 flex-wrap">
            <div
              data-te-ripple-init
              data-te-ripple-color="light"
              className=" group-hover:opacity-80 group-hover:scale-125 transition ease-in-out duration-300 w-full ">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
            </div>
            <div className=''>
              <p></p>
            </div>
          </div>
          <div className="group flex w-1/4 flex-wrap">
            <div
              data-te-ripple-init
              data-te-ripple-color="light"
              className=" group-hover:opacity-80 group-hover:scale-125 transition ease-in-out duration-300 w-full ">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
            </div>
            <div className=''>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}


function Thirdsect () {
  return (
    <>
    </>
  )
}




const ServiceE = () => {
  return (
    <div>
      <Navbar />
      {/*<HeroService/>*/}
      <Herosection/>
      <Barner/>
      <Cardsection/>
      <Secondsect />
      <Thirdsect />
      <Footer/>
    </div>
  )
}

export default ServiceE
