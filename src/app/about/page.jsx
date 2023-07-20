import Image from 'next/image'
import React from 'react'
import styles from "./about.module.css"
import FeatureSlider from '@/components/HomePage/Feature/FeatureSlider'
import Latest from '@/components/HomePage/Latest/Latest'
import SubTitle from '@/utils/Subtitle'
import PrimaryTitle from '@/utils/PrimaryTitle'
import LatestSlider from '@/components/HomePage/Latest/LatestSlider'

const About = () => {

    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus odio nec  Lorem ipsum dolor sit amet, cdipiscing elit. Sed cursus odio nec tincidunt cidunt pellentesque. Fu fringilla,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus odio nec  Lorem ipsum dolor sit amet, cdipiscing elit. Sed cursus odio nec tincidunt cidunt pellentesque. Fu fringilla,"



    const datas = [
        {
            title: 'Gaming',
            model: 'HEADSET HG250',
            img: "/LatestHP1.png"
        },
        {
            title: 'Music',
            model: 'HEADPHONE  H60 ',
            img: "/LatestHP2.png"
        },
        {
            title: 'Gaming',
            model: 'HEADSET Hk250',
            img: "/LatestHP1.png"
        },
        {
            title: 'Gaming',
            model: 'HEADSET HG250',
            img: "/LatestHP1.png"
        },
        {
            title: 'Music',
            model: 'HEADPHONE  H60 ',
            img: "/LatestHP2.png"
        },
        {
            title: 'Gaming',
            model: 'HEADSET Hk250',
            img: "/LatestHP1.png"
        },
    ]


    return (
        <div>

            {/* Header */}
            <div className={styles.commonCont}>
                <div className={styles.commonImgCont}>
                    <Image src="/blogPost.png" alt='' width={1715} height={700} className={styles.commonImg} />
                </div>
                <div className=' mx-[10px] lg:mx-[100px] '>
                    <h1 className='text-[25px] lg:text-[80px] font-[600] lg:leading-[120px] uppercase text-white'>About Us</h1>
                </div>
            </div>

            {/* two display image */}
            <div className='flex justify-center gap-[20px] md:gap-[50px] lg:gap-[100px] mt-[25px] md:mt-[45px] lg:mt-[70px] mx-[10pz]'>

                <div className='md:w-[296px] lg:w-[592px] mt-[80px] md:mt-[120px] lg:mt-[157px]'>
                    <h2 className='text-[15px] md:text-[25px] lg:text-[80px] font-[700] font-inter text-white uppercase lg:leading-[90px]'>Headphone</h2>
                    <p className='text-white text-opacity-[50%]'>Headphone</p>
                    <p className='hidden md:hidden lg:block text-[15px] text-white text-opacity-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit doloribus adipisci pariatur deleniti, optio eum, sint eos temporibus ratione dolorem perferendis ipsam blanditiis? Harum.</p>
                    <div className='w-[172px] h-[218px] md:w-[296px] md:h-[333px] lg:w-[592px] lg:h-[666px] relative'>
                        <Image src="/aboutH1.png" alt="" fill />
                    </div>
                </div>

                <div className='md:w-[296px] lg:w-[592px]'>
                    <div className='w-[172px] h-[218px] md:w-[296px] md:h-[333px] lg:w-[592px] lg:h-[666px] relative'>
                        <Image src="/aboutH2.png" alt="" fill />
                    </div>

                    <h2 className='text-[15px] md:text-[25px] lg:text-[80px] font-[700] font-inter text-white uppercase lg:leading-[90px]'>Headphone</h2>
                    <p className='text-white text-opacity-[50%] lg:hidden'>Headphone</p>
                    <p className='hidden md:hidden lg:block text-[15px] text-white text-opacity-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit doloribus adipisci pariatur deleniti, optio eum, sint eos temporibus ratione dolorem perferendis ipsam blanditiis? Harum.</p>
                </div>

            </div>

            {/* Desktop Service Section */}
            <div className='hidden  lg:grid lg:grid-cols-3 justify-center md:gap-[20px] lg:gap-[37px] md:px-[150px] lg:px-[300px] my-[85px] py-[85px] bg-bgSecondary'>
                {
                    [1, , 2, 3, 4, 5, 6].map((item, i) => (
                        <div key={i} className='w-[409px] h-[458px] border border-white border-opacity-[50%] p-[35px]'>
                            <div className='flex items-center gap-[32px]'>
                                <Image src="/GHeadphone.svg" alt="" width={85} height={80} />
                                <h2 className='text-[30px] font-[800] font-poppins text-white'>Gaming Headphone</h2>
                            </div>
                            <p className='mt-[58px] text-[12px] font-[300] text-white text-opacity-[50%]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus odio nec  Lorem ipsum dolor
                                sit amet, cdipiscing elit. Sed cursus odio nec tincidunt cidunt pellentesque. Fu fringilla,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus odio nec  Lorem ipsum dolor sit amet, cdipiscing elit. Sed cursus odio nec tincidunt cidunt pellentesque. Fu fringilla,
                            </p>

                            <button className='flex items-center gap-[10px] mt-[53px]'>
                                <Image src="/rightIcon.png" alt="" width={44} height={44} className='p-2 rounded-full bg-[#191919]' />
                                <p className='text-[15px] font-poppins text-white'>View All Feature</p>
                            </button>
                        </div>
                    ))
                }

            </div>

            {/* Mobile Service Section */}
            <div className=' lg:hidden mx-[10px] my-[40px]'>
                <FeatureSlider datas={datas} />
            </div>

            {/* WE BUILD YOUR DEMAND */}
            <div className='relative font-poppins flex flex-col items-center mb-[150px]'>

                <div className='w-[250px] h-[239px] md:w-[500px] md:h-[200px] lg:w-[1285px] lg:h-[393px]  absolute z-[1] bg-gradient-to-t from-[#191919] from-30% bottom-[-100px] flex flex-col items-center justify-center px-[20px]'>

                    <h3 className=' text-[25px] md:text-[40px] lg:text-[90px] text-[#D9D9D9] font-[800] uppercase leading-[50px] lg:leading-[100px]'>WE BUILD YOUR DEMAND</h3>

                    <p className='text-[15px] text-white text-opacity-[50%] text-center'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
                        <span className='hidden md:hidden lg:block'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text
                            ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard
                            dummy text ever since the 1500s,
                        </span>
                    </p>

                </div>

                <div className='w-[100%] h-[250px] md:h-[424px] lg:h-[848px] relative'>
                    <Image src="/aboutBg1.png" alt="" fill />
                </div>

            </div>


            {/* Best Headphone */}
            <div className=' lg:ml-[315px] mt-[26px] lg:mt-[180px]'>
                <div className='flex justify-between items-center lg:mr-[315px]'>

                    <div className=''>
                        <SubTitle className="text-[30px] lg:text-[60px] leading-[70px]">OUR BEST</SubTitle>
                        <PrimaryTitle className="text-[60px] mt-[-30px] lg:mt-[0px] lg:text-[120px] font-poppins leading-[100px]" >HEADSET</PrimaryTitle>
                    </div>

                    <button className='hidden lg:flex items-center gap-[10px]'>
                        <Image src="/rightIcon.png" alt="" width={44} height={44} className='p-2 rounded-full bg-[#191919]' />
                        <p className='text-[15px] font-poppins text-white'>View All</p>
                    </button>
                </div>

                <div className='mt-[20px]'>
                    <LatestSlider datas={datas} />
                </div>

            </div>

        </div>
    )
}

export default About