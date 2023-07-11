import CommonHeader from '@/utils/CommonHeader'
import PrimaryTitle from '@/utils/PrimaryTitle'
import Image from 'next/image'
import React from 'react'

const Gaming = () => {


    return (
        <div>
            <CommonHeader />
            <div className='text-left lg:py-2 lg:pl-[94px] bg-[#191919]'>
                <p className="font-poppins HeadsetSTitle" >HEADSET</p>
                <div className="headsetPTitle" >
                    <PrimaryTitle>Gaming</PrimaryTitle>
                </div>
            </div>


            <div className='flex justify-center my-[40px] lg:my-[75px]'>

                <div className='grid grid-cols-2 gap-[0px] lg:gap-[100px]'>

                    <div>
                        <div className='text-white uppercase font-inter mb-[50px] lg:mb-[0] mt-[80px] lg:mt-[0px]'>
                            <h3 className='text-[25px] lg:text-[43px] font-[700] leading-[20px] lg:leading-[40px] '>Headphone</h3>
                            <p className='text-[15px] lg:text-[25px] font-[500] leading-[20px] lg:leading-[25px] text-white text-opacity-[50%] lg:text-opacity-[100%]'>Headphone</p>
                        </div>


                        <div className='w-[172px] lg:w-[507px] h-[128px] lg:h-[378px] relative'>
                            <Image src="/gamingH1.png" alt='' fill />
                        </div>
                    </div>

                    <div className=' flex-col lg:flex lg:flex-row items-end w-[593px]'>

                        <div className='hidden lg:block text-white uppercase font-inter w-[70px] h-[290px] '>
                            <h3 className='text-[25px] lg:text-[43px] font-[700] rotate-[-90deg] mt-[230px] ml-[-30px] leading-[10px] '>Headphone</h3>
                            <p className='text-[15px] lg:text-[25px] font-[500] leading-[0px] mt-[25px] ml-[30px] rotate-[-90deg] text-white text-opacity-[50%] lg:text-opacity-[100%]'>Headphone</p>
                        </div>

                        <div className=' w-[171px] h-[203px] lg:w-[506px] lg:h-[599px] relative'>
                            <Image src="/gamingH2.png" alt='' fill />
                        </div>

                        <div className='lg:hidden mt-[50px] text-white uppercase font-inter mb-[50px] lg:mb-[0]'>
                            <h3 className='text-[25px] lg:text-[43px] font-[700] leading-[20px] lg:leading-[40px] '>Headphone</h3>
                            <p className='text-[15px] lg:text-[25px] font-[500] leading-[20px] lg:leading-[25px] text-white text-opacity-[50%] lg:text-opacity-[100%]'>Headphone</p>
                        </div>

                    </div>

                    <div className=' flex-col lg:flex lg:flex-row items-end w-[593px]'>

                        <div className='hidden lg:block text-white uppercase font-inter w-[70px] h-[290px] '>
                            <h3 className='text-[25px] lg:text-[43px] font-[700] rotate-[-90deg] mt-[230px] ml-[-30px] leading-[10px] '>Headphone</h3>
                            <p className='text-[15px] lg:text-[25px] font-[500] leading-[0px] mt-[25px] ml-[30px] rotate-[-90deg] text-white text-opacity-[50%] lg:text-opacity-[100%]'>Headphone</p>
                        </div>


                        <div className='lg:hidden mt-[50px] text-white uppercase font-inter mb-[50px] lg:mb-[0]'>
                            <h3 className='text-[25px] lg:text-[43px] font-[700] leading-[20px] lg:leading-[40px] '>Headphone</h3>
                            <p className='text-[15px] lg:text-[25px] font-[500] leading-[20px] lg:leading-[25px] text-white text-opacity-[50%] lg:text-opacity-[100%]'>Headphone</p>
                        </div>

                        <div className=' w-[171px] h-[203px] lg:w-[506px] lg:h-[599px] relative'>
                            <Image src="/gamingH3.png" alt='' fill />
                        </div>

                    </div>

                    <div className='flex flex-col lg:items-end'>

                        <div className=' w-[171px] h-[203px] lg:w-[507px] lg:h-[378px] relative'>
                            <Image src="/gamingH4.png" alt='' fill />
                        </div>

                        <div className='text-white uppercase font-inter  mt-[80px] lg:mt-[0px]'>
                            <h3 className='text-[25px] lg:text-[43px] font-[700] leading-[20px] lg:leading-[40px] '>Headphone</h3>
                            <p className='text-[15px] lg:text-[25px] font-[500] leading-[20px] lg:leading-[25px] text-white text-opacity-[50%] lg:text-opacity-[100%]'>Headphone</p>
                        </div>
                    </div>

                </div>

            </div>


            <div className='relative flex items-center font-poppins'>

                <div className=' w-[239px] h-[239px] lg:w-[767px] lg:h-[767px] pl-[10px] absolute z-[1] right-[40px]  lg:right-[150px] flex flex-col justify-center items-end text-right bg-gradient-to-l from-[#191919] from-30%'>

                    <h3 className='text-[30px] lg:text-[60px] text-[#D9D9D9] font-[800] uppercase leading-[20px] lg:leading-[60px]'>Headset</h3>
                    <PrimaryTitle className="text-[60px] lg:text-[180px] leading-[50px] lg:leading-[130px] ml-[-2px] lg:ml-[-6px]">Noice</PrimaryTitle>
                    <p className='text-[25px] lg:text-[89px] text-[#D9D9D9] font-[800] uppercase leading-[20px] lg:leading-[80px]'>Cancelling</p>
                    <p className='text-[10px] lg:text-[15px] text-white text-opacity-[50%] w-2/3'>Noise cancelling headphones are designed to prevent you from hearing ambient noise. <span className='hidden lg:block'>They use tiny microphones within the earpieces to sense</span>
                    </p>


                </div>

                <div className=' w-full h-[328px] lg:h-[1023px] relative ml-[-150px] lg:ml-[0px] lg:mr-[400px]'>
                    <Image src="/gamingNoice.png" alt='' fill />
                </div>

            </div>


            <div>
                <div className='relative mt-[50px]'>
                    <div className='w-full h-[130px] lg:h-[436px] relative'>
                        <Image src="/headsetMusicbg1.png" alt='' fill />
                    </div>
                    <p className='text-[30px] lg:text-[90px] font-[900] font-poppins text-white absolute bottom-[10%] left-[15%] uppercase' >7.1 Surrounded</p>
                </div>

                <div className='relative'>
                    <div className='w-full h-[130px] lg:h-[436px] relative'>
                        <Image src="/headsetMusicbg2.png" alt='' fill />
                    </div>
                    <p className='text-[30px] lg:text-[90px] font-[900] font-poppins text-white absolute bottom-[10%] left-[15%] lg:left-[45%] uppercase' >Music System</p>
                </div>
            </div>

        </div>
    )
}

export default Gaming