import React from 'react'
import {MdSecurity} from 'react-icons/md'
import './Services.css'

const Services = () => {
  return (
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
  )
}

export default Services