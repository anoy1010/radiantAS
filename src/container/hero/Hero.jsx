import React from 'react'
import './Hero.css'
import { cam3, cam5 } from '../../constants/images'

const Hero = () => {
  return (
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
  )
}

export default Hero