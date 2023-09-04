import React from 'react';
import { Footer, Navbar } from './components'

import 'aos/dist/aos.css';
import Aos from 'aos';
import { cam3, cam4 } from './constants/images';
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

function Secondsect () {
  return (
    <>
    
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
      <HeroService/>
      <Firstsect />
      <Secondsect />
      <Thirdsect />
      <Footer/>
    </div>
  )
}

export default ServiceE
