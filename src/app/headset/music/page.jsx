import CommonHeader from '@/utils/CommonHeader'
import PrimaryTitle from '@/utils/PrimaryTitle'
import Image from 'next/image'
import React from 'react'


const Music = () => {


    return (
        <div>
            <CommonHeader />

            <div className='text-left lg:pt-2 lg:pl-[94px] pb-[5px] bg-[#191919]'>
                <p className="font-poppins HeadsetSTitle" >HEADSET</p>
                <div className="headsetPTitle" >
                    <PrimaryTitle>Music</PrimaryTitle>
                </div>
            </div>

            <div className='relative flex items-center font-poppins'>

                <div className=' w-[239px] h-[239px] lg:w-[767px] lg:h-[767px] pl-[10px] absolute z-[1] lg:left-[150px] flex flex-col justify-center bg-gradient-to-r from-[#191919] from-30%'>
                    <h3 className='text-[30px] lg:text-[60px] text-[#D9D9D9] font-[800] uppercase leading-[20px] lg:leading-[60px]'>Headset</h3>
                    <PrimaryTitle className="text-[60px] lg:text-[180px] leading-[50px] lg:leading-[130px] ml-[-2px] lg:ml-[-6px]">Noice</PrimaryTitle>
                    <p className='text-[25px] lg:text-[89px] text-[#D9D9D9] font-[800] uppercase leading-[20px] lg:leading-[80px]'>Cancelling</p>
                    <p className='text-[10px] lg:text-[15px] text-white text-opacity-[50%] w-2/3'>Noise cancelling headphones are designed to prevent you from hearing ambient noise. <span className='hidden lg:block'>They use tiny microphones
                        within the earpieces to sense</span> </p>
                </div>

                <div className='w-full h-[328px] lg:h-[1023px] relative lg:ml-[400px]'>
                    <Image src="/headsetMusicNoiseC.png" alt='' fill />
                </div>
            </div>

            <div className='mt-[44px] lg:mt-[56px] lg:bg-bgSecondary lg:py-[75px] px-[10px]'>

                {/* 1st one */}
                <div className='flex justify-center'>
                    <div className='w-[243px] h-[301px] lg:w-[521px] lg:h-[647px] relative'>
                        <Image src="/headphoneInAir.png" alt='' fill />
                    </div>

                    <div className=' lg:pr-[40px] mt-[40px] lg:mt-[70px] h-1/2 ml-[-100px] lg:ml-[0px] z-[10] lg:z-[0]'>

                        <div className='bg-gradient-to-l from-[#D9D9D9] from-10% p-[1px]'>
                            <h2 className='text-[30px] lg:text-[89px] text-[#D9D9D9] font-[800] font-poppins uppercase lg:leading-[90px] bg-gradient-to-l from-[#191919] from-90% pr-[10px]  lg:pr-[30px]'>Headphone</h2>
                        </div>

                        <PrimaryTitle className="text-[70px] lg:text-[180px] font-[900] text-white bg-bgPrimary   leading-[80px] lg:leading-[150px] ml-[-40px] lg:ml-[-70px] absolute">In Air</PrimaryTitle>
                    </div>
                </div>

                {/* 2nd one */}
                <div className='flex justify-center lg:ml-[350px] mt-[40px] lg:mt-[-20px] '>

                    <div className=' mt-[20px] lg:mt-[100px] h-1/2 mr-[-25px] lg:mr-[0px] z-[10]'>
                        <div className='bg-gradient-to-r from-[#D9D9D9] from-10% p-[1px]'>
                            <h2 className='text-[30px] lg:text-[89px] text-[#D9D9D9] font-[800] font-poppins uppercase lg:leading-[90px] bg-gradient-to-r from-[#191919] from-90% pl-[10px] lg:pl-[30px]'>In Build</h2>
                        </div>

                        <PrimaryTitle className="text-[70px] lg:text-[180px] font-[900] text-white bg-bgPrimary   leading-[80px] lg:leading-[150px] absolute z-[10] ml-[20px] lg:ml-[80px] ">Apps</PrimaryTitle>
                    </div>

                    <div className='w-[238px] h-[168px] lg:w-[607px] lg:h-[428px] relative'>
                        <Image src="/headphoneInBuild.png" alt='' fill />
                    </div>
                </div>

            </div>

            <div>
                <div className='relative mt-[40px] lg:mt-[0px]'>
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

export default Music

