import Image from 'next/image'
import React from 'react'

const HeaderBottom = () => {
    return (
        <div className='mt-[25px] flex justify-center gap-[150px]'>

            <div className='flex items-center gap-[20px]'>
                <Image src="/Equalizer.svg" alt='' width={59} height={59} />
                <h3 className='w-[147px] text-[30px] font-[500] font-poppins text-white leading-[20px]'>Equalizer  <br />
                <span className='text-[12px] font-[500] font-poppins text-white text-opacity-[50%] leading-[1px]'>Customize Headphone Equalizer</span></h3>
            </div>

            <div className='flex items-center gap-[20px]'>
                <Image src="/Sound.svg" alt='' width={59} height={59} />
                <h3 className='w-[190px] text-[30px] font-[500] font-poppins text-white leading-[20px]'>7.1 Surround  <br />
                <span className='text-[12px] font-[500] font-poppins text-white text-opacity-[50%] leading-[1px]'>Customize Headphone Equalizer</span></h3>
            </div>

            <div className='flex items-center gap-[20px]'>
                <Image src="/Range.svg" alt='' width={59} height={59} />
                <h3 className='w-[147px] text-[30px] font-[500] font-poppins text-white leading-[20px]'>Range  <br />
                <span className='text-[12px] font-[500] font-poppins text-white text-opacity-[50%] leading-[1px]'>Customize Headphone Equalizer</span></h3>
            </div>

        </div>
    )
}

export default HeaderBottom