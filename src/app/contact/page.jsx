import PrimaryTitle from '@/utils/PrimaryTitle'
import Image from 'next/image'
import React from 'react'
import { BsFillBuildingFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { MdCall } from 'react-icons/md';


const Contact = () => {

    return (
        <div className='relative mt-[20px]'>

            <div className=''>
                <PrimaryTitle className="text-[30px] lg:text-[100px] lg:text-center lg:mr-[350px]">Contact</PrimaryTitle>
            </div>


            <div className='lg:bg-bgSecondary md:bg-bgSecondary lg:mr-[600px] md:pb-[200px] lg:pb-[400px] lg:mt-[-30px] absolute md:relative lg:relative z-[2] md-z[0] lg:z-[0]'>

                <div className='bg-bgSecondary lg:pl-[250px] pb-[20px] lg:pb-0 pt-[40px] px-[20px] text-white'>

                    <div className='flex flex-col lg:flex lg:flex-row gap-[15px] lg:gap-[25px]'>

                        <input type="text" placeholder='Enter your name...' className='border w-[307px] h-[51px] lg:w-[350px] lg:h-[78px] px-[10px] bg-transparent rounded-[5px] border-white border-opacity-[50%]' />

                        <input type="text" placeholder='Enter your name...' className='border w-[307px] h-[51px] lg:w-[350px] lg:h-[78px] px-[10px] bg-transparent rounded-[5px] border-white border-opacity-[50%]' />

                    </div>

                    <br />

                    <textarea id="message" rows="4" class="block p-2.5 w-[307px] lg:w-[730px] rounded-[5px] border border-white border-opacity-[50%] bg-transparent focus:none " placeholder="Write your thoughts here...">
                    </textarea>

                    <div className=' w-[307px] md:w-[350px] lg:w-[730px] flex justify-end mt-[20px] '>
                        <button className='flex  items-center gap-[10px] border p-1.5 rounded-md border-white border-opacity-[50%]'>
                            <div className="w-[25px] h-[25px] lg:w-[44px] lg:h-[44px] relative">
                                <Image src="/rightIcon.png" alt="" fill className='p-1 rounded-full bg-[#191919]' />
                            </div>
                            <p className='text-[12px] lg:text-[15px] font-poppins text-white'>View All</p>
                        </button>
                    </div>

                </div>

                <div className='hidden md:block lg:block md:w-[330px] md:h-[] lg:w-[517px] lg:h-[695px] border bg-white absolute md:right-[0px] lg:right-[-250px] top-[-40px] lg:top-[-80px]'>

                    <p className='text-[30px] lg:text-[100px] font-[800] leading-[30px] lg:leading-[75px] text-[#000]'>US</p>


                    <div className='flex flex-col justify-center items-center gap-[20px] lg:mx-[120px] text-center'>
                        <BsFillBuildingFill className='text-[#646464] text-[32px]' />
                        <p className='text-[19px] font-poppins text-[#000]'>House: 00, Road: 00, Block: 0, XYZ, Dhaka </p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-[20px] lg:mx-[120px] text-center mt-[40px]'>
                        <HiMail className='text-[#646464] text-[42px]' />
                        <p className='text-[19px] font-poppins text-[#000]'>musicbuddy@mail.com</p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-[20px] lg:mx-[120px] text-center mt-[40px]'>
                        <MdCall className='text-[#646464] text-[42px]' />
                        <p className='text-[19px] font-poppins text-[#000]'>+00 000 000 000</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mt-[30px]'>
                        <div className='w-[117px] h-[117px] relative'>
                            <Image src="/logoContact.svg" alt="" fill />
                        </div>
                        <PrimaryTitle className="text-[41px]">Music Buddy</PrimaryTitle>
                    </div>

                </div>
            </div>

            <div className=' md:hidden lg:hidden w-[230px] h-[700px] bg-white absolute right-0 top-0 z-[1] '>
                <p className='text-[30px] font-[800]'>US</p>

                <div className='mt-[400px]'>

                    <div className='flex flex-col justify-center items-center gap-[20px] lg:mx-[120px] text-center'>
                        <BsFillBuildingFill className='text-[#646464] text-[32px]' />
                        <p className='text-[19px] font-poppins text-[#000]'>House: 00, Road: 00, Block: 0, XYZ, Dhaka </p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-[20px] lg:mx-[120px] text-center mt-[40px]'>
                        <HiMail className='text-[#646464] text-[42px]' />
                        <p className='text-[19px] font-poppins text-[#000]'>musicbuddy@mail.com</p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-[20px] lg:mx-[120px] text-center mt-[40px]'>
                        <MdCall className='text-[#646464] text-[42px]' />
                        <p className='text-[19px] font-poppins text-[#000]'>+00 000 000 000</p>
                    </div>
                </div>
            </div>

            <div className='w-[100vw] h-[1000px] relative pb-[20px] mt-[650px] md:mt-[0] lg:mt-[0]'>
                <Image src="/map.png" alt="" fill />
            </div>

        </div>
    )
}

export default Contact