import Features from '@/components/sections/Features'
import Footer from '@/components/sections/Footer'
import Hero from '@/components/sections/Hero'
import Navbar from '@/components/sections/Navbar'
import Products from '@/components/sections/Products'
import Reviews from '@/components/sections/Reviews'
import Sale from '@/components/sections/Sale'
import React from 'react'

const Home = () => {
  return (
    <div className='text-slate-100'>
      <Navbar/>
      <Hero/>
      <Products/>
      <Features/>
      <Reviews/>
      <div className='bg-stone-800'>
        <Sale/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
