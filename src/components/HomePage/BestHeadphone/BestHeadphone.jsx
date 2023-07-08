import React from 'react'
import styles from './BestHeadphone.module.css'
import Image from 'next/image'
import PrimaryTitle from '@/utils/PrimaryTitle'

const BestHeadphone = () => {
    return (
        <div className=' lg:h-[1090px] bg-[#191919] mt-[40px] pb-[220px] lg:mt-[75px]'>

            <div className='flex justify-center pt-[50px] lg:pt-[77px] relative'>

                <div className='text-right relative lg:mt-[45px] z-10 w-1/2 lg:w-1/3'>

                    <PrimaryTitle className="text-[50px] lg:text-[150px] font-[900] leading-[33px] lg:leading-[100px]">BEST</PrimaryTitle>

                    <p className='text-[25px] lg:text-[101px] font-poppins font-[900] text-white lg:leading-[90px]'>HEADPHONE</p>

                    <div className='flex items-start justify-end mr-[-50px] lg:mr-[-165px]'>
                        <p className='text-[15px] lg:text-[35px] font-inter font-[900] text-white leading-[0px] lg:leading-[15px]'>FOR</p>
                        <PrimaryTitle className="text-[40px] lg:text-[150px] font-[900] leading-[18px] lg:leading-[95px] ">MUSIC</PrimaryTitle>
                    </div>

                    <p className='mt-2 lg:mt-5 text-[8px] lg:text-[12px] font-poppins text-white text-opacity-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus odio nec  Lorem <br /> ipsum dolor sit amet, cdipiscing elit. Sed cursus odio nec tincidunt <span className='hidden lg:block'>cidunt <br /> pellentesque.  Fu fringilla,</span></p>
                </div>

                <div className={`${styles.bestOneImgContainer} z-[5]`}>
                    <Image src="/Best1.png" alt="" fill={true} className={styles.bestOneImg} />
                </div>

                <div className='w-[280px] h-[95px] lg:w-[800px] lg:h-[280px] bg-[#131313] absolute bottom-0 z-[1]'></div>

            </div>

            <div className='flex justify-center  mt-[-40px] '>
                <div className='absolute z-[7] w-screen h-[167px] lg:w-[1087px] lg:h-[463px]'>
                    <Image src="/Best2.png" fill={true} alt='' className='' />
                </div>
            </div>

        </div>
    )
}

export default BestHeadphone