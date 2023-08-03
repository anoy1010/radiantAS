import React from 'react'

const Banner = () => {
  return (
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
  )
}

export default Banner