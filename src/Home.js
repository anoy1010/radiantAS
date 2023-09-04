import React from 'react'
import { Footer, Navbar} from './components'



import {Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { cam1, cam2, cam3, cam4,cam6 } from './constants/images';
import {FaCheck} from 'react-icons/fa' 
import {MdSecurity} from 'react-icons/md'

function SliderHome (){
  return (
    <section>
      <Swiper
            spaceBetween={30}
            centeredSlides={true}
            effect={'fade'}
            autoplay={{
            delay: 5500,
            disableOnInteraction: false,
            }}
            speed={600}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[ EffectFade ,Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
          <SwiperSlide>
            <div className='image relative'>
                <img src={cam4} className='h-screen w-screen object-cover' alt="" />
                <div className='tilte-content absolute top-[25%] space-y-5 mx-28 flex flex-col justify-center w-[700px] items-start '>
                    <h3 className='text-[16px] text-white text-center'>
                        we are always on guard foryor family and business
                    </h3>
                    <h2 className=' text-[50px] text-white font-[700] text-left'>
                        Security service for your safe personality
                    </h2>
                    <button className=' w-auto px-6 h-[50px] bg-[#FF9900] text-[#111047] font-extrabold tracking-wide hover:bg-[#fcd190] transition ease-in-out duration-300  '> 
                        More information 
                    </button>
                </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='image relative'>
              <img src={cam1} className='h-screen w-screen object-cover hover:scale-125 transition ease-in-out duration-10000' alt="" />
              <div className='tilte-content absolute top-[25%] space-y-5 mx-28 flex flex-col justify-center w-[700px] items-start '>
                  <h3 className='text-[16px] text-white text-center'>
                      Nous somme là pour vous
                  </h3>
                  <h2 className=' text-[50px] text-white font-[700] text-left'>
                      Security service for your safe personality
                  </h2>
                  <button className=' w-auto px-6 h-[50px] bg-[#FF9900] text-[#111047] font-extrabold tracking-wide hover:bg-[#fcd190] transition ease-in-out duration-300  '> 
                      More information 
                  </button>
              </div>

          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='image relative'>
              <img src={cam2} className='h-screen w-screen object-cover hover:scale-125 transition ease-in-out duration-10000' alt="" />
              <div className='tilte-content absolute top-[25%] space-y-5 mx-28 flex flex-col justify-center w-[700px] items-start '>
                  <h3 className='text-[16px] text-white text-center'>
                      we are always on guard foryor family and business
                  </h3>
                  <h2 className=' text-[50px] text-white font-[700] text-left'>
                      Security service for your safe personality
                  </h2>
                  <button className=' w-auto px-6 h-[50px] bg-[#FF9900] text-[#111047] font-extrabold tracking-wide hover:bg-[#fcd190] transition ease-in-out duration-300  '> 
                      More information 
                  </button>
              </div>

          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='image relative'>
              <img src={cam3} className='h-screen w-screen object-cover backdrop-contrast-125 bg-black/30 hover:scale-125 transition ease-in-out duration-10000' alt="" />
              <div className='tilte-content absolute top-[25%] space-y-5 mx-28 flex flex-col justify-center w-[700px] items-start '>
                  <h3 className='text-[16px] text-white text-center'>
                      we are always on guard foryor family and business
                  </h3>
                  <h2 className=' text-[50px] text-white font-[700] text-left'>
                      Security service for your safe personality
                  </h2>
                  <button className=' w-auto px-6  h-[50px] bg-[#FF9900] text-[#111047] font-extrabold tracking-wide hover:bg-[#fcd190] transition ease-in-out duration-300  '> 
                      More information 
                  </button>
              </div>

          </div>
          </SwiperSlide>
      </Swiper>
    </section>
  )
}

function BannerHome (){
  return (
    <>
      <section>
        <div className='h-[200px] px-[150px] flex justify-around items-center bg-[#FF9900]'>
            <div className='w-[600px]'>
                <h2 className='text-4xl  capitalize'>We offer fast, <span className='font-bold'>Professional and exceptional services</span></h2>
            </div>
            <div className='space-x-8 '>
                <button className='px-6 py-4 bg-[#111047] text-[#FF9900] hover:bg-[#25244e] uppercase font-semibold transition ease-in-out duration-300'>make an appointment</button>
                <button className='px-6 py-4 bg-[#FF9900] text-[#111047]  ring-2 ring-[#111047] uppercase font-semibold hover:text-[#FF9900] hover:bg-[#111047] transition ease-in-out duration-300'>contact us online</button>
            </div>
        </div>
      </section>
    </>
  )
}

function HeroHome (){
  return (
    <>
      <section>
        <div className='px-40 py-32 flex justify-around '>
          <div className='w-[400px] h-[500px]  '>
            <img src={cam3} alt="" className='w-screen h-full object-cover' />
          </div>
          <div className='w-[40%] flex flex-col justify-center gap-4 items-start'>
            <h3 className='text-[#64748b] uppercase text-[12px]'>What we do</h3>
            <h2 className=' text-5xl capitalize'>We provid services for multiple <span className='font-bold'>customers in various industries worldwide</span> </h2>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima tempora quos, facere quae perferendis dolorum aperiam eius molestiae. Id pariatur facilis veritatis ducimus libero illum dolor inventore soluta ex illo.</p>
            <button className='px-8 py-4 bg-[#FF9900] text-[#111047] font-semibold hover:bg-[#ffc164] transition ease-in-out duration-300'>About our company</button>
          </div>
        </div>
      </section>
    </>
  )
}

function ServicesHome (){
  return (
    <>
      <section className='bg-[#e0eafb] '>
        <div className='px-32 py-14 grid grid-cols-4 gap-8 h-screen'>
            <div className='flex flex-col gap-2 pb-8 col-span-2 justify-around'>
                <h3 className='text-[#64748b] text-[12px] uppercase'>prenium services</h3>
                <h2 className='text-5xl w-[90%] capitalize'>Our services <span className='font-bold'>make your bussiness secure</span></h2>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore doloribus et iste fugiat, voluptatem dignissimos delectus.</p>
            </div>
            <div  className='group flex flex-col space-y-2 px-10 bg-white justify-center hover:bg-[#FF9900] transition ease-in-out duration-300'>
                <MdSecurity style={{fontSize:80}} className='my-4 text-[#FF9900] group-hover:text-[#111047]  transition ease-in-out duration-300' />
                <h2 className=' capitalize font-bold text-[#111047] text-2xl'>Housing protection</h2>
                <p className='text-[#111047]    '>Consecteur adipiscing elit</p>
            </div>
            <div  className='group flex flex-col space-y-2 px-10 bg-white justify-center hover:bg-[#FF9900] transition ease-in-out duration-300'>
                <MdSecurity style={{fontSize:80}} className='my-4 text-[#FF9900] group-hover:text-[#111047]  transition ease-in-out duration-300' />
                <h2 className=' capitalize font-bold text-[#111047] text-2xl'>Housing protection</h2>
                <p className='text-[#111047]    '>Consecteur adipiscing elit</p>
            </div>
            <div  className='group flex flex-col space-y-2 px-10 bg-white justify-center hover:bg-[#FF9900] transition ease-in-out duration-300'>
                <MdSecurity style={{fontSize:80}} className='my-4 text-[#FF9900] group-hover:text-[#111047]  transition ease-in-out duration-300' />
                <h2 className=' capitalize font-bold text-[#111047] text-2xl'>Housing protection</h2>
                <p className='text-[#111047]    '>Consecteur adipiscing elit</p>
            </div>
            <div  className='group flex flex-col space-y-2 px-10 bg-white justify-center hover:bg-[#FF9900] transition ease-in-out duration-300'>
                <MdSecurity style={{fontSize:80}} className='my-4 text-[#FF9900] group-hover:text-[#111047]  transition ease-in-out duration-300' />
                <h2 className=' capitalize font-bold text-[#111047] text-2xl'>Housing protection</h2>
                <p className='text-[#111047]    '>Consecteur adipiscing elit</p>
            </div>
            <div  className='group flex flex-col space-y-2 px-10 bg-white justify-center hover:bg-[#FF9900] transition ease-in-out duration-300'>
                <MdSecurity style={{fontSize:80}} className='my-4 text-[#FF9900] group-hover:text-[#111047]  transition ease-in-out duration-300' />
                <h2 className=' capitalize font-bold text-[#111047] text-2xl'>Housing protection</h2>
                <p className='text-[#111047]    '>Consecteur adipiscing elit</p>
            </div>
            <div  className='group flex flex-col space-y-2 px-10 bg-white justify-center hover:bg-[#FF9900] transition ease-in-out duration-300'>
                <MdSecurity style={{fontSize:80}} className='my-4 text-[#FF9900] group-hover:text-[#111047]  transition ease-in-out duration-300' />
                <h2 className=' capitalize font-bold text-[#111047] text-2xl'>Housing protection</h2>
                <p className='text-[#111047]    '>Consecteur adipiscing elit</p>
            </div>
        </div>
      </section>
    </>
  )
}


function FeaturesHome (){
  return (
    <>
      <section className='w-screen h-screen mb-24'>
        <div className='px-32 py-24 gap-12 w-screen flex flex-col relative '>
            <div className='flex flex-col gap-y-6 w-[90%]'>
                <h3 className='text-[#64748b] text-[12px] uppercase'>locksmithing services</h3>
                <h2 className='text-5xl w-[90%] capitalize'>Our technicians are aquiped with the latest <span className='font-bold'>modern technology and are avaible 24/7 at your request</span></h2>
            </div>
            <div className=' flex gap-14 justify-around items-start'    >
                <img src={cam6} alt="" className='w-[700px]' />
                <p className='mt-14 text-[#94a3b8] '>Lorem ipsum dolor amet consectetur adipisicing elit. Dolorum cupiditate suscipit, eveniet non corporis consequuntur. Illum consectetur <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloribus, quia, velit, illum culpa explicabo corrupti suscipit ratione veritatis obcaecati aspernatur cum ex fugit voluptatibus quasi provident praesentium alias eum.dolorum ipsam, minima dignissimos, laborum fugit sint fuga doloribus temporibus repudiandae, labore voluptas!</p>
                <div className='absolute bottom-0 right-60 grid grid-cols-2 place-content-center place-items-center w-[600px] px-6 py-12 shadow-2xl  bg-[#FF9900] gap-4'>
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
      </section>
    </>
  )
}

function StatsHome (){

  const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  )
}

function TestimHome (){
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-24 sm:my-8 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#ff9900ba] shadow-xl shadow-[#FF9900]/10 ring-1 ring-[#FF9900] sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-[#111047] sm:text-2xl sm:leading-9">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                molestiae. Numquam corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Judith Black</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">CEO of Workcation</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  )
}


const Home = () => {
  return (
    <div>
      <Navbar/>
      <SliderHome /> 
      <BannerHome />
      <HeroHome />
      <ServicesHome />
      <FeaturesHome />
      <StatsHome />
      <TestimHome />
      <Footer/>
    </div>
  )
}

export default Home
