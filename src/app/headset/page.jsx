import CommonHeader from '@/utils/CommonHeader'
import PrimaryTitle from '@/utils/PrimaryTitle'
import Test from '@/utils/PrimaryTitle'
import React from 'react'

const Headset = () => {
  return (
    <div className='bg-[#131313] w-[100vw] h-[93vh] overflow-x-hidden'>
      {/* Common Header */}
      <CommonHeader />



      <div className='flex items-center justify-center gap-[314px] py-[40px]'>
        <p className='text-[33px] font-poppins font-[600] text-white'>Wired</p>
        <p className='text-[33px] font-poppins font-[600] text-white'>Wireless</p>
        <p className='text-[33px] font-poppins font-[600] text-white'>Bluetooth</p>
      </div>

      <div className='text-[120px] font-poppins'>
        <PrimaryTitle >Hello</PrimaryTitle>
      </div>

    </div>
  )
}

export default Headset