import React from 'react'
import HeaderSlider from '../HomePageContent/HeaderSlider/HeaderSlider'
import NavDesk from '../Navbar/NavDesk/NavDesk'

const Home = () => {
  return (
    <div className='bg-[#131313] pb-32'>
      <NavDesk />
      <HeaderSlider />
    </div>
  )
}

export default Home