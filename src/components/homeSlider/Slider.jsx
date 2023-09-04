import React, { useEffect } from 'react'
import {Swiper, SwiperSlide } from 'swiper/react';

import './Slider.css'

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFade, Autoplay, Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
import { cam1,cam2, cam3, cam4 } from '../../constants/images';

export default function Slider() {

    

    return (
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
            <img src={cam1} className='h-screen w-screen object-cover' alt="" />
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
            <img src={cam2} className='h-screen w-screen object-cover' alt="" />
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
            <img src={cam3} className='h-screen w-screen object-cover backdrop-contrast-125 bg-black/30' alt="" />
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
    )
}