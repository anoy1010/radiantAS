import React from 'react'
import {FaCheck} from 'react-icons/fa' 
import { cam6 } from '../../constants/images'

const Features = () => {
  return (
    <section className='w-screen h-screen mb-24'>
        <div className='px-32 py-24 gap-12 w-screen flex flex-col relative '>
            <div className='flex flex-col gap-y-6 w-[90%]'>
                <h3 className='text-[#64748b] text-[12px] uppercase'>locksmithing services</h3>
                <h2 className='text-5xl w-[90%] capitalize'>Our technicians are aquiped with the latest <span className='font-bold'>modern technology and are avaible 24/7 at your request</span></h2>
            </div>
            <div className=' flex gap-14 justify-around items-start'    >
                <img src={cam6} alt="" className='w-[700px]' />
                <p className='mt-14 text-[#94a3b8] '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cupiditate suscipit, eveniet non corporis consequuntur. Illum consectetur <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloribus, quia, velit, illum culpa explicabo corrupti suscipit ratione veritatis obcaecati aspernatur cum ex fugit voluptatibus quasi provident praesentium alias eum.dolorum ipsam, minima dignissimos, laborum fugit sint fuga doloribus temporibus repudiandae, labore voluptas!</p>
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
  )
}

export default Features