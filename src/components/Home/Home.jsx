import React from 'react'
import HeaderSlider from '../HomePageContent/HeaderSlider/HeaderSlider'
import NavDesk from '../Navbar/NavDesk/NavDesk'
import HeaderBottom from '../HeaderBottom/HeaderBottom'
import BestHeadphone from '../BestHeadphone/BestHeadphone'
import Feature from '../Feature/Feature'
import BestService from '../BestService/BestService'
import Latest from '../Latest/Latest'
import ParallaxBg from '../ParallaxBg/ParallaxBg'
import Review from '../Review/Review'
import PublicSec from '../PublicSec/PublicSec'
import Blog from '../Blog/Blog'
import Footer from '../Footer/Footer'
import Title from '@/utils/Title'

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