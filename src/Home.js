import React from 'react'
import { Navbar, Slider, Stats, Testim } from './components'
import Banner from './components/banner/Banner'
import { Footer, Hero } from './container'
import Services from './container/services/Services'
import Features from './container/features/Features'

const Home = () => {
  return (
    <div>
      <Slider />
      <Banner />
      <Hero />
      <Services />
      <Features />
      <Stats />
      <Testim />
    </div>
  )
}

export default Home
