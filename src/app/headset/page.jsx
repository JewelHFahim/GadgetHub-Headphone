"use client"

import { ThemeContext } from '@/Context/AppContext'
import CommonHeader from '@/utils/CommonHeader'
import PrimaryTitle from '@/utils/PrimaryTitle'
import Image from 'next/image'
import React, { useContext } from 'react'

const Headset = () => {

  const { isDarkmode } = useContext(ThemeContext)

  return (
    <div className={`overflow-x-hidden ${isDarkmode ? "bg-bgPrimary" : " bg-bgOffWhite"}`}>

      <CommonHeader />

      <div className={`headsetPTitle pl-[94px] ${isDarkmode ? "bg-bgSecondary" : " bg-bgOffWhite"}`} >
        <PrimaryTitle>Headset</PrimaryTitle>
      </div>

      <div className={`flex justify-center ${isDarkmode ? "bg-bgPrimary" : " bg-white"}`}>
        <div className='grid grid-cols-1 lg:grid-cols-3 justify-center items-center text-center lg:gap-[314px] py-[40px]'>
          <p className={`text-[33px] font-poppins font-[600] uppercase ${isDarkmode ? "text-white" : "text-bgPrimary"}`}>Wired</p>
          <PrimaryTitle className="text-[33px]">Wireless</PrimaryTitle>
          <PrimaryTitle className="text-[33px]">Bluetooth</PrimaryTitle>
        </div>
      </div>


      <div className={`flex flex-col justify-center items-center px-[12px] ${isDarkmode ? "bg-bgPrimary" : " bg-bgOffWhite"}`}>

        <div className='py-[32px]  grid lg:grid-cols-2 gap-[48px] lg:gap-[145px]'>

          {
            [1, 2, 3, 4].map((item, i) => (

              <div key={i} className=''>

                <div className=' w-[100%] h-[317px] lg:w-[527px] lg:h-[456px] relative'>
                  <Image src="/headset1.png" alt='' fill className='rounded-[15px]' />
                </div>

                <div className='font-poppins w-3/4'>
                  <h2 className={`text-[23px] lg:text-[33px] font-[600] ${isDarkmode ? "text-white" : "text-bgPrimary"}`}>Headset Name</h2>
                  <h3 className={`text-[15px] lg:text-[19px] font-[500] ${isDarkmode ? "text-white text-opacity-[73%]" : "text-bgPrimary"} `}>Model name</h3>
                  <p className={`text-[13px] ${isDarkmode ? "text-white text-opacity-[73%]" : "text-bgPrimary"}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.............</p>
                </div>
              </div>
            ))
          }


        </div>

        <div className='flex items-center w-full justify-between  lg:px-[320px]'>

          <button className='flex items-center opacity-[50%] gap-[10px]'>

            <div className='relative w-[25px] h-[25px] lg:w-[44px] lg:h-[44px]'>
              {isDarkmode ?
                <Image src="/leftIcon.png" fill={true} alt='' />
                :
                <Image src="/leftIconDark.png" fill={true} alt='' />
              }
            </div>

            <p className={`text-[10px]  lg:text-[15px] font-poppins  ${isDarkmode ? "text-white" : "text-[#000]"}`}>Previous</p>

          </button>

          <p className={`text-[50px] font-poppins font-[900] ${isDarkmode ? "text-white" : "text-bgPrimary"}`}>1
            <span className={`text-[20px] font-poppins font-[400] ${isDarkmode ? "text-white text-opacity-[50%]" : "text-bgPrimary"}`}>/4</span></p>




          <button className='flex items-center opacity-[50%] gap-[10px]'>

            <p className={`text-[10px]  lg:text-[15px] font-poppins  ${isDarkmode ? "text-white" : "text-[#000]"}`}>Next</p>

            <div className='relative w-[25px] h-[25px] lg:w-[44px] lg:h-[44px]'>
              {isDarkmode ?
                <Image src="/rightIcon.png" fill={true} alt='' />
                :
                <Image src="/rightIconDark.png" fill={true} alt='' />
              }
            </div>

          </button>

        </div>


      </div>

    </div>
  )
}

export default Headset