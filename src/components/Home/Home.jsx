"use client"

import React from 'react'
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


    </div>
  )
}

export default Home