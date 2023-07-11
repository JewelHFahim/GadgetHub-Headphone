import CommonHeader from '@/utils/CommonHeader'
import PrimaryTitle from '@/utils/PrimaryTitle'
import Image from 'next/image'
import React from 'react'

const Headset = () => {

  return (
    <div className='bg-[#131313]  overflow-x-hidden'>
      <CommonHeader />
      <div className="headsetPTitle ml-[94px]" >
        <PrimaryTitle>Headset</PrimaryTitle>
      </div>




      <div className='flex justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-3 justify-center items-center text-center lg:gap-[314px] py-[40px]'>
          <p className='text-[33px] font-poppins font-[600] uppercase text-white'>Wired</p>
          <PrimaryTitle className="text-[33px]">Wireless</PrimaryTitle>
          <PrimaryTitle className="text-[33px]">Bluetooth</PrimaryTitle>
        </div>
      </div>


      <div className='flex flex-col justify-center items-center bg-bgSecondary px-[12px]'>

        <div className='py-[32px]  grid lg:grid-cols-2 gap-[48px] lg:gap-[145px]'>

          {
            [1, 2, 3, 4].map((item, i) => (

              <div key={i} className=''>

                <div className=' w-[100%] h-[317px] lg:w-[527px] lg:h-[456px] relative'>
                  <Image src="/headset1.png" alt='' fill className='rounded-[15px]' />
                </div>

                <div className='font-poppins w-3/4'>
                  <h2 className='text-[23px] lg:text-[33px] font-[600] text-white'>Headset Name</h2>
                  <h3 className=' text-[15px] lg:text-[19px] font-[500] text-white text-opacity-[73%]'>Model name</h3>
                  <p className='text-[13px] text-white text-opacity-[53%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.............</p>
                </div>
              </div>
            ))
          }


        </div>

        <div className='flex items-center w-full justify-between  lg:px-[320px]'>

          <button className='flex items-center opacity-[50%]'>
            <div className='w-[51px] h-[51px] relative'>
              <Image src="/headsetLeftBtn.svg" alt='' fill={true} className='p-1' />
            </div>
            <p className='text-[15px] text-white font-[500] font-poppins'>Previous</p>
          </button>

          <p className='text-[50px] font-poppins font-[900] text-white'>1
            <span className='text-[20px] font-poppins text-white text-opacity-[50%] font-[400]'>/4</span></p>

          <button className='flex items-center opacity-[50%]'>
            <p className='text-[15px] text-white font-[500] font-poppins'>Previous</p>
            <div className='w-[51px] h-[51px] relative'>
              <Image src="/headsetRightBtn.svg" alt='' fill={true} className='p-1' />
            </div>
          </button>

        </div>


      </div>

    </div>
  )
}

export default Headset