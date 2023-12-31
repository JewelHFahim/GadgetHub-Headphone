"use client"

import React, { useContext } from 'react'
import styles from "./BlogPost.module.css"
import Image from 'next/image'
import { BsFillReplyAllFill } from 'react-icons/bs';
import FollowUs from '@/utils/FollowUs/FollowUs';
import { ThemeContext } from '@/Context/AppContext';


const BlogPost = () => {

    const { isDarkmode } = useContext(ThemeContext)


    return (
        <div className={`relative ${isDarkmode ? "bg-bgPrimary" : "bg-white"}`}>

            {/* <div className='hidden lg:block absolute right-[-150px] top-[500px]'>
                <FollowUs />
            </div> */}

            {/* Header */}
            <div className={isDarkmode ? `${styles.commonCont}` : `${styles.commonContLight}`}>
                <div className={styles.commonImgCont}>
                    <Image src="/blogPost.png" alt='' width={1715} height={700} className={styles.commonImg} />
                </div>
                <div className={`pb-[10px] mx-[10px] lg:mx-[100px] font-poppins ${isDarkmode ? "text-white text-opacity-[80%]" : "text-bgPrimary"}`}>
                    <h1 className='text-[25px] lg:text-[80px] font-[600] lg:leading-[100px]'>Headphone Daily Use As A Blogger </h1>

                    <div className='flex items-center gap-[10px]'>
                        <div className={`w-[41px] h-[41px] rounded-full bg-[#D9D9D9] ${isDarkmode ? "bg-bgOffWhite" : "bg-bgSecondary"}`}></div>
                        <p className='text-[15px]'>J H Fahim</p>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className='flex justify-center mx-[20px] lg:mx-[300px] my-[40px] font-poppins '>
                <div>
                    <h2 className={`text-[30px] lg:text-[40px] font-[700] ${isDarkmode ? "text-white" : "text-bgPrimary"}`}>Lorem Ipsum</h2>
                    <p className={`text-[20px] ${isDarkmode ? "text-[#8E8E8E]" : "text-bgSecondary"}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, molestiae accusamus aliquam, accusantium vel laboriosam, sapiente dolorem commodi sed cum eius incidunt magnam molestias facilis obcaecati ad veniam vitae expedita? Molestiae laudantium illum eum esse nulla ratione sapiente accusantium, accusamus cum debitis voluptates voluptatum ipsam, sit atque dolore libero mollitia!</p>

                    <div className=' lg:flex items-center my-[30px]'>
                        <div className='w-2/3'>
                            <h2 className={`text-[30px] lg:text-[40px] font-[700] ${isDarkmode ? "text-white" : "text-bgPrimary"}`}>Why do we use it?</h2>
                            <p className={`text-[20px] ${isDarkmode ? "text-[#8E8E8E]" : "text-bgSecondary"}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, molestiae accusamus aliquam, accusantium vel laboriosam, sapiente dolorem commodi sed cum eius incidunt magnam molestias facilis obcaecati ad veniam vitae expedita? Molestiae laudantium illum eum esse nulla ratione sapiente accusantium, accusamus cum debitis voluptates voluptatum ipsam, sit atque dolore libero mollitia!</p>
                        </div>

                        <div className=' lg:w-1/3 h-[300px] relative'>
                            <Image src="/blogPost.png" alt="" fill />
                        </div>
                    </div>

                    <div className=''>
                        <h2 className={`text-[30px] lg:text-[40px] font-[700] ${isDarkmode ? "text-white" : "text-bgPrimary"}`}>Where dose it come from?</h2>
                        <p className={`text-[20px] ${isDarkmode ? "text-[#8E8E8E]" : "text-bgSecondary"}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, molestiae accusamus aliquam, accusantium vel laboriosam, sapiente dolorem commodi sed cum eius incidunt magnam molestias facilis obcaecati ad veniam vitae expedita? Molestiae laudantium illum eum esse nulla ratione sapiente accusantium, accusamus cum debitis voluptates voluptatum ipsam, sit atque dolore libero mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iusto quod nobis! A provident non commodi accusantium? Quos repellat reprehenderit nam doloremque! Voluptatem repellat dignissimos recusandae atque ex explicabo officia quasi eveniet sapiente dolores. Nemo eius placeat ex nisi temporibus nulla odit nesciunt libero! Hic inventore quisquam sint aliquam maxime?</p>
                    </div>

                    <div className='my-[10px]'>
                        <h2 className={`text-[30px] lg:text-[40px] font-[700] ${isDarkmode ? "text-white" : "text-bgPrimary"}`}>Where can get some</h2>
                        <p className={`text-[20px] ${isDarkmode ? "text-[#8E8E8E]" : "text-bgSecondary"}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, molestiae accusamus aliquam, accusantium vel laboriosam, sapiente dolorem commodi sed cum eius incidunt magnam molestias facilis obcaecati ad veniam vitae expedita? Molestiae laudantium illum eum esse nulla ratione sapiente accusantium, accusamus cum debitis voluptates voluptatum ipsam, sit atque dolore libero mollitia!</p>
                    </div>
                </div>
            </div>

            {/* Next and Prev Btn */}
            <div className={`flex justify-around items-center py-[40px] ${isDarkmode ? "bg-bgSecondary " : "bg-white"}`}>

                <div className='flex items-center gap-[10px]'>
                    <div className='w-[51px] h-[41px] relative'>

                        {
                            isDarkmode ?
                                <Image src="/leftIcon.png" alt="" fill />
                                :
                                <Image src="/leftIconDark.png" alt="" fill />
                        }

                    </div>
                    <p className={`${isDarkmode ? "text-white text-opacity-[50%]" : "text-bgPrimary"}`}>Previous Blog</p>
                </div>


                <div className='flex items-center gap-[10px]'>
                    <p className={`${isDarkmode ? "text-white text-opacity-[50%]" : "text-bgPrimary"}`}>Next Blog</p>
                    <div className='w-[51px] h-[41px] relative'>
                        {isDarkmode ?
                            <Image src="/rightIcon.png" alt="" fill />
                            :
                            <Image src="/rightIconDark.png" alt="" fill />
                        }
                    </div>

                </div>
            </div>

            {/* Comment Section */}
            <div className='font-poppins mx-[20px] lg:mx-[300px]'>
                <h1 className={`text-[35px] lg:text-[100px] font-[700] ${isDarkmode ? "text-white" : "text-bgPrimary"}`}>Commnets</h1>

                <div>
                    <div className='flex items-center gap-[10px]'>
                        <div className={`w-[76px] h-[76px] rounded-full ${isDarkmode ? "bg-bgOffWhite" : "bg-bgSecondary"}`}></div>
                        <p className={`text-[30px] ${isDarkmode ? "text-white" : "text-bgPrimary"}`}>Mack Torus</p>
                    </div>
                    <div className='ml-[85px]'>
                        <p className={` text-[20px] ${isDarkmode ? "text-[#8E8E8E]" : "text-bgPrimary"}`}>There a re many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or rand omised</p>
                        <p className={`text-[20px] font-[600] flex items-center gap-[8px] ${isDarkmode ? "text-white " : "text-bgPrimary"}`}> <BsFillReplyAllFill /> Reply</p>
                    </div>
                </div>

                <div className='ml-[100px] mt-[10px]'>

                    <div className='flex items-center gap-[10px]'>
                        <div className={`w-[76px] h-[76px] rounded-full ${isDarkmode ? "bg-bgOffWhite" : "bg-bgSecondary"}`}></div>
                        <p className={`text-[30px] ${isDarkmode ? "text-white" : "text-bgPrimary"}`}>Mack Torus</p>
                    </div>

                    <div className='ml-[85px]'>
                        <p className={` text-[20px] ${isDarkmode ? "text-[#8E8E8E]" : "text-bgPrimary"}`}>There a re many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or rand omised</p>
                        <p className={`text-[20px] font-[600] flex items-center gap-[8px] ${isDarkmode ? "text-white " : "text-bgPrimary"}`}> <BsFillReplyAllFill /> Reply</p>
                    </div>

                </div>

                <div className='mt-[20px]'>
                    <div className='flex items-center gap-[10px]'>
                        <div className={`w-[76px] h-[76px] rounded-full ${isDarkmode ? "bg-bgOffWhite" : "bg-bgSecondary"}`}></div>
                        <p className={`text-[30px] ${isDarkmode ? "text-white" : "text-bgPrimary"}`}>Mack Torus</p>
                    </div>

                    <div className='ml-[85px]'>
                        <p className={` text-[20px] ${isDarkmode ? "text-[#8E8E8E]" : "text-bgPrimary"}`}>There a re many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or rand omised</p>
                        <p className={`text-[20px] font-[600] flex items-center gap-[8px] ${isDarkmode ? "text-white " : "text-bgPrimary"}`}> <BsFillReplyAllFill /> Reply</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default BlogPost