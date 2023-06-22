import React from 'react'
import HeaderSlider from '../HomePageContent/HeaderSlider/HeaderSlider'
import NavDesk from '../Navbar/NavDesk/NavDesk'
import HeaderBottom from '../HeaderBottom/HeaderBottom'
import BestHeadphone from '../BestHeadphone/BestHeadphone'
import Feature from '../Feature/Feature'
import BestService from '../BestService/BestService'

const Home = () => {
  return (
    <div className='bg-[#131313] pb-32'>
      <NavDesk />
      <HeaderSlider />
      <HeaderBottom />
      <BestHeadphone />
      <Feature />
      <BestService />
    </div>
  )
}

export default Home