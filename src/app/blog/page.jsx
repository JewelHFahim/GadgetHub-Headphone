import CommonHeader from '@/utils/CommonHeader'
import PrimaryTitle from '@/utils/PrimaryTitle'
import Image from 'next/image'
import React from 'react'

const Blog = () => {

    const blogContainerH = "flex justify-between min-w-[200px] max-w-[547px] w-[10vw] md:w-[25vw] lg:w-[28.85vw] min-h-[200px] max-h-[550px] h-[15vh] md:h-[22vh] lg:h-[50.9vh] relative";

    const blogContainerV = "flex justify-between min-w-[200px] max-w-[554px] w-[10vw] md:w-[25vw] lg:w-[28.85vw] min-h-[200px] max-h-[345px] h-[15vh] md:h-[22vh] lg:h-[31.9vh] relative"


    return (
        <div>
            <CommonHeader />
            <div className='text-left lg:py-2 lg:pl-[94px] bg-[#191919]'>
                <p className="font-poppins HeadsetSTitle" >Our</p>
                <div className="headsetPTitle" >
                    <PrimaryTitle>Blog</PrimaryTitle>
                </div>
            </div>


            <div className='flex justify-center my-[40px] lg:my-[75px] px-[10px] lg:px-[100px]'>

                <div className='grid items-center grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[100px]'>

                    {/* 1st */}
                    <div className={blogContainerV}>

                        <div className='w-[40px] md:w-[50px] lg:w-[66px]  h-full '>
                            <div className='text-white uppercase font-inter absolute
                                left-[-63px] 
                                md:left-[-63px] 
                                lg:left-[-107px] 

                                bottom-[61px] 
                                md:bottom-[60px] 
                                lg:bottom-[104px]
                                -rotate-90'>

                                <h3 className='text-[1.56rem] lg:text-[2.68rem] font-[700] whitespace-nowrap 
                                leading-[20px]
                                md:leading-[24px]
                                lg:leading-[40px]
                                '>
                                    Headphone
                                </h3>

                                <h3 className='text-[.93rem] lg:text-[1.56rem] font-[700]
                                leading-[12px]
                                md:leading-[12px]
                                lg:leading-[20px]
                                '>
                                    Headphone
                                </h3>
                            </div>
                        </div>

                        <div className=' w-[83%] h-[100%] relative'>
                            <Image src="/gamingH1.png" alt='' fill />
                        </div>
                    </div>

                    {/* 2nd- horizontal */}
                    <div className={blogContainerH}>

                        <div className='w-[40px] md:w-[50px] lg:w-[66px]  h-full '>
                            <div className='text-white uppercase font-inter absolute
                                left-[-63px] 
                                md:left-[-63px] 
                                lg:left-[-107px] 

                                bottom-[61px] 
                                md:bottom-[60px] 
                                lg:bottom-[104px]
                                -rotate-90'>

                                <h3 className='text-[1.56rem] lg:text-[2.68rem] font-[700] whitespace-nowrap 
                                leading-[20px]
                                md:leading-[24px]
                                lg:leading-[40px]
                                '>
                                    Headphone
                                </h3>

                                <h3 className='text-[.93rem] lg:text-[1.56rem] font-[700]
                                leading-[12px]
                                md:leading-[12px]
                                lg:leading-[20px]
                                '>
                                    Headphone
                                </h3>
                            </div>
                        </div>

                        <div className=' w-[84%] h-[100%] relative'>
                            <Image src="/gamingH1.png" alt='' fill />
                        </div>
                    </div>

                    {/* 3rd */}
                    <div className=' flex justify-between 
                    min-w-[200px] 
                    max-w-[554px]
                    w-[10vw] 
                    md:w-[25vw] 
                    lg:w-[28.85vw]
                    
                    min-h-[200px] 
                    max-h-[345px]
                    h-[15vh] 
                    md:h-[22vh] 
                    lg:h-[31.9vh]

                    relative'>

                        <div className='w-[40px] md:w-[50px] lg:w-[66px]  h-full '>
                            <div className='text-white uppercase font-inter absolute
                                left-[-63px] 
                                md:left-[-63px] 
                                lg:left-[-107px] 

                                bottom-[61px] 
                                md:bottom-[60px] 
                                lg:bottom-[104px]
                                -rotate-90'>

                                <h3 className='text-[1.56rem] lg:text-[2.68rem] font-[700] whitespace-nowrap 
                                leading-[20px]
                                md:leading-[24px]
                                lg:leading-[40px]
                                '>
                                    Headphone
                                </h3>

                                <h3 className='text-[.93rem] lg:text-[1.56rem] font-[700]
                                leading-[12px]
                                md:leading-[12px]
                                lg:leading-[20px]
                                '>
                                    Headphone
                                </h3>
                            </div>
                        </div>

                        <div className=' w-[83%] h-[100%] relative'>
                            <Image src="/gamingH1.png" alt='' fill />
                        </div>
                    </div>

                    {/* 4th - horizontal*/}
                    <div className=' flex justify-between 
                    min-w-[200px] 
                    max-w-[547px]
                    w-[10vw] 
                    md:w-[25vw] 
                    lg:w-[28.85vw]
                    
                    min-h-[200px] 
                    max-h-[550px]
                    h-[15vh] 
                    md:h-[22vh] 
                    lg:h-[50.9vh]

                    relative
                    
                    '>

                        <div className='w-[40px] md:w-[50px] lg:w-[66px]  h-full '>
                            <div className='text-white uppercase font-inter absolute
                                left-[-63px] 
                                md:left-[-63px] 
                                lg:left-[-107px] 

                                bottom-[61px] 
                                md:bottom-[60px] 
                                lg:bottom-[104px]
                                -rotate-90'>

                                <h3 className='text-[1.56rem] lg:text-[2.68rem] font-[700] whitespace-nowrap 
                                leading-[20px]
                                md:leading-[24px]
                                lg:leading-[40px]
                                '>
                                    Headphone
                                </h3>

                                <h3 className='text-[.93rem] lg:text-[1.56rem] font-[700]
                                leading-[12px]
                                md:leading-[12px]
                                lg:leading-[20px]
                                '>
                                    Headphone
                                </h3>
                            </div>
                        </div>

                        <div className=' w-[84%] h-[100%] relative'>
                            <Image src="/gamingH1.png" alt='' fill />
                        </div>
                    </div>

                    {/* 5th */}
                    <div className=' flex justify-between 
                    min-w-[200px] 
                    max-w-[554px]
                    w-[10vw] 
                    md:w-[25vw] 
                    lg:w-[28.85vw]
                    
                    min-h-[200px] 
                    max-h-[345px]
                    h-[15vh] 
                    md:h-[22vh] 
                    lg:h-[31.9vh]

                    relative'>

                        <div className='w-[40px] md:w-[50px] lg:w-[66px]  h-full '>
                            <div className='text-white uppercase font-inter absolute
                                left-[-63px] 
                                md:left-[-63px] 
                                lg:left-[-107px] 

                                bottom-[61px] 
                                md:bottom-[60px] 
                                lg:bottom-[104px]
                                -rotate-90'>

                                <h3 className='text-[1.56rem] lg:text-[2.68rem] font-[700] whitespace-nowrap 
                                leading-[20px]
                                md:leading-[24px]
                                lg:leading-[40px]
                                '>
                                    Headphone
                                </h3>

                                <h3 className='text-[.93rem] lg:text-[1.56rem] font-[700]
                                leading-[12px]
                                md:leading-[12px]
                                lg:leading-[20px]
                                '>
                                    Headphone
                                </h3>
                            </div>
                        </div>

                        <div className=' w-[83%] h-[100%] relative'>
                            <Image src="/gamingH1.png" alt='' fill />
                        </div>
                    </div>

                    {/* 6th - horizontal*/}
                    <div className=' flex justify-between 
                    min-w-[200px] 
                    max-w-[547px]
                    w-[10vw] 
                    md:w-[25vw] 
                    lg:w-[28.85vw]
                    
                    min-h-[200px] 
                    max-h-[550px]
                    h-[15vh] 
                    md:h-[22vh] 
                    lg:h-[50.9vh]

                    relative
                    
                    '>

                        <div className='w-[40px] md:w-[50px] lg:w-[66px]  h-full '>
                            <div className='text-white uppercase font-inter absolute
                                left-[-63px] 
                                md:left-[-63px] 
                                lg:left-[-107px] 

                                bottom-[61px] 
                                md:bottom-[60px] 
                                lg:bottom-[104px]
                                -rotate-90'>

                                <h3 className='text-[1.56rem] lg:text-[2.68rem] font-[700] whitespace-nowrap 
                                leading-[20px]
                                md:leading-[24px]
                                lg:leading-[40px]
                                '>
                                    Headphone
                                </h3>

                                <h3 className='text-[.93rem] lg:text-[1.56rem] font-[700]
                                leading-[12px]
                                md:leading-[12px]
                                lg:leading-[20px]
                                '>
                                    Headphone
                                </h3>
                            </div>
                        </div>

                        <div className=' w-[84%] h-[100%] relative'>
                            <Image src="/gamingH1.png" alt='' fill />
                        </div>
                    </div>

                    {/* 7th */}
                    <div className=' flex justify-between 
                    min-w-[200px] 
                    max-w-[554px]
                    w-[10vw] 
                    md:w-[25vw] 
                    lg:w-[28.85vw]
                    
                    min-h-[200px] 
                    max-h-[345px]
                    h-[15vh] 
                    md:h-[22vh] 
                    lg:h-[31.9vh]

                    relative'>

                        <div className='w-[40px] md:w-[50px] lg:w-[66px]  h-full '>
                            <div className='text-white uppercase font-inter absolute
                                left-[-63px] 
                                md:left-[-63px] 
                                lg:left-[-107px] 

                                bottom-[61px] 
                                md:bottom-[60px] 
                                lg:bottom-[104px]
                                -rotate-90'>

                                <h3 className='text-[1.56rem] lg:text-[2.68rem] font-[700] whitespace-nowrap 
                                leading-[20px]
                                md:leading-[24px]
                                lg:leading-[40px]
                                '>
                                    Headphone
                                </h3>

                                <h3 className='text-[.93rem] lg:text-[1.56rem] font-[700]
                                leading-[12px]
                                md:leading-[12px]
                                lg:leading-[20px]
                                '>
                                    Headphone
                                </h3>
                            </div>
                        </div>

                        <div className=' w-[83%] h-[100%] relative'>
                            <Image src="/gamingH1.png" alt='' fill />
                        </div>
                    </div>

                     {/* 8th - horizontal*/}
                     <div className=' flex justify-between 
                    min-w-[200px] 
                    max-w-[547px]
                    w-[10vw] 
                    md:w-[25vw] 
                    lg:w-[28.85vw]
                    
                    min-h-[200px] 
                    max-h-[550px]
                    h-[15vh] 
                    md:h-[22vh] 
                    lg:h-[50.9vh]

                    relative
                    
                    '>

                        <div className='w-[40px] md:w-[50px] lg:w-[66px]  h-full '>
                            <div className='text-white uppercase font-inter absolute
                                left-[-63px] 
                                md:left-[-63px] 
                                lg:left-[-107px] 

                                bottom-[61px] 
                                md:bottom-[60px] 
                                lg:bottom-[104px]
                                -rotate-90'>

                                <h3 className='text-[1.56rem] lg:text-[2.68rem] font-[700] whitespace-nowrap 
                                leading-[20px]
                                md:leading-[24px]
                                lg:leading-[40px]
                                '>
                                    Headphone
                                </h3>

                                <h3 className='text-[.93rem] lg:text-[1.56rem] font-[700]
                                leading-[12px]
                                md:leading-[12px]
                                lg:leading-[20px]
                                '>
                                    Headphone
                                </h3>
                            </div>
                        </div>

                        <div className=' w-[84%] h-[100%] relative'>
                            <Image src="/gamingH1.png" alt='' fill />
                        </div>
                    </div>

                    {/* 9th */}
                    <div className=' flex justify-between 
                    min-w-[200px] 
                    max-w-[554px]
                    w-[10vw] 
                    md:w-[25vw] 
                    lg:w-[28.85vw]
                    
                    min-h-[200px] 
                    max-h-[345px]
                    h-[15vh] 
                    md:h-[22vh] 
                    lg:h-[31.9vh]

                    relative'>

                        <div className='w-[40px] md:w-[50px] lg:w-[66px]  h-full '>
                            <div className='text-white uppercase font-inter absolute
                                left-[-63px] 
                                md:left-[-63px] 
                                lg:left-[-107px] 

                                bottom-[61px] 
                                md:bottom-[60px] 
                                lg:bottom-[104px]
                                -rotate-90'>

                                <h3 className='text-[1.56rem] lg:text-[2.68rem] font-[700] whitespace-nowrap 
                                leading-[20px]
                                md:leading-[24px]
                                lg:leading-[40px]
                                '>
                                    Headphone
                                </h3>

                                <h3 className='text-[.93rem] lg:text-[1.56rem] font-[700]
                                leading-[12px]
                                md:leading-[12px]
                                lg:leading-[20px]
                                '>
                                    Headphone
                                </h3>
                            </div>
                        </div>

                        <div className=' w-[83%] h-[100%] relative'>
                            <Image src="/gamingH1.png" alt='' fill />
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Blog