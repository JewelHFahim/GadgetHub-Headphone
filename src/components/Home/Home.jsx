"use client"

import React from 'react'
import NavDesk from '../Navbar/NavDesk/NavDesk'
import HeaderBottom from '../HomePage/HeaderBottom/HeaderBottom'
import BestHeadphone from '../HomePage/BestHeadphone/BestHeadphone'
import Feature from '../HomePage/Feature/Feature'
import BestService from '../HomePage/BestService/BestService'
import Latest from '../HomePage/Latest/Latest'
import ParallaxBg from '../HomePage/ParallaxBg/ParallaxBg'
import Review from '../HomePage/Review/Review'
import PublicSec from '../HomePage/PublicSec/PublicSec'
import Blog from '../HomePage/Blog/Blog'
import Footer from '../Footer/Footer'
import HeaderSlider from '../HomePage/Header/Header'

const Home = () => {
  return (
    <div className='bg-[#131313] pb-10'>
      <NavDesk />
      <HeaderSlider />
      <HeaderBottom />
      <BestHeadphone />
      <Feature />
      <BestService />
      <Latest />
      <ParallaxBg />
      <Review />
      <PublicSec />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home