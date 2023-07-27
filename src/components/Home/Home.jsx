"use client"

import React, { useContext } from 'react'
import HeaderBottom from '../HomePage/HeaderBottom/HeaderBottom'
import BestHeadphone from '../HomePage/BestHeadphone/BestHeadphone'
import Feature from '../HomePage/Feature/Feature'
import BestService from '../HomePage/BestService/BestService'
import Latest from '../HomePage/Latest/Latest'
import ParallaxBg from '../HomePage/ParallaxBg/ParallaxBg'
import Review from '../HomePage/Review/Review'
import PublicSec from '../HomePage/PublicSec/PublicSec'
import Blog from '../HomePage/Blog/Blog'
import HeaderSlider from '../HomePage/Header/Header'
import { ThemeContext } from '@/Context/AppContext'

const Home = () => {

  const { isDarkmode } = useContext(ThemeContext);



  return (
    <div className={` ${isDarkmode ? "bg-bgPrimary" : "bg-white"}  pb-10 mt-[-10px]`}>




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