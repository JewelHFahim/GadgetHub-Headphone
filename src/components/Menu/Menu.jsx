"use client"


import { ThemeContext } from '@/Context/AppContext'
import React, { useContext, useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import "./Menu.css"
import NavDesk from '../Navbar/NavDesk/NavDesk'
import { FiPlusCircle } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaMinus, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
import { CgCloseO } from 'react-icons/cg';
import Link from 'next/link'


const Menu = ({ isOpen, toggleDrawer }) => {



    const { isDarkmode } = useContext(ThemeContext)

    const [openMenuIndex, setOpenMenuIndex] = useState(null);

    const handleMenuToggle = (index) => {
        setOpenMenuIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };



    // Menus
    const menus = [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "Blog",
            url: "/blog"
        },
        {
            title: "Headset",
            url: "/headset",
            submenu: [
                {
                    subttitle: 'Gaming',
                    url: "/headset/gaming"
                },
                {
                    subttitle: 'MUSIC',
                    url: "/headset/music"
                },
            ]
        },
        {
            title: "About Us",
            url: "/about"
        },
        {
            title: "Contact Us",
            url: "contact"
        },
    ]


    return (
        <>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='top'
                size="100vh"
                className="w-screen"

            >
                <div className={`lg:flex w-[102vw] lg:pl-[95px] h-full relative ${ isDarkmode ? "bg-bgPrimary" : "bg-white"}`}>

                    {/* Menu Close Button */}
                    <button onClick={toggleDrawer} className='absolute right-[20px] top-[10px]  lg:right-[80px] lg:top-[70px]'>
                        {
                            isDarkmode ?
                                <CgCloseO className='text-[40px] text-white' />
                                :
                                <CgCloseO className='text-[40px] text-black' />
                        }
                    </button>

                    {/* Left Side Menu COntent */}
                    <ul className='lg:w-[60%]'>

                        {/* Logo */}
                        <div className=' lg:mb-[150px] pt-[10px] lg:mt-[44px] ml-[-48px] lg:block flex justify-center'>
                            <NavDesk />
                        </div>

                        {/* Small Device Search Bar */}
                        <div className='lg:hidden flex justify-center mb-[58px]'>
                            <div className='mt-[10px] lg:mt-[30%] w-[90%] h-[44px] lg:h-[74px] flex items-center border border-white border-opacity-[50%] rounded-[37px] px-[28px]'>
                                <input type="text" placeholder='Search in Keyboard' className='w-full h-[44px] lg:h-[74px] flex items-center rounded-[37px] text-[15px] lg:text-[25px] font-inter bg-transparent focus:outline-none text-white placeholder:text-white placeholder:text-opacity-[50%]' />
                                <BiSearchAlt className='text-[40px] text-white text-opacity-[50%]' />
                            </div>
                        </div>

                        {/* Menu and Submenu */}
                        <li className={`menu uppercase  text-[40px] lg:text-[60px] font-[700] font-inter flex flex-col gap-[40px] ${ isDarkmode ? "text-white" : "text-bgPrimary" }`}>
                            {
                                menus.map((menu, i) => (
                                    <details key={i} className={`border-b  border-opacity-[5%] flex ${ isDarkmode ? "border-white" : "border-bgPrimary" }`}>

                                        {
                                            menu.submenu ?

                                                < summary onClick={() => handleMenuToggle(i)} className='mb-4 flex justify-between items-center'>

                                                    <a href={menu.url}>{menu.title}</a>

                                                    {
                                                        menu.submenu && (
                                                            <div className='my-[-10px]'>
                                                                {openMenuIndex === i ? <FaMinus /> : <FiPlusCircle />}
                                                            </div>
                                                        )
                                                    }

                                                </summary>

                                                :
                                                <summary className='mb-4 flex justify-between items-center'>
                                                    <Link href={menu.url}>  {menu.title}  </Link>
                                                </summary>
                                        }

                                        {
                                            menu.submenu && openMenuIndex === i &&

                                            <ul>
                                                <li>
                                                    {
                                                        <>
                                                            {
                                                                menu.submenu.map((sbm, i) => (
                                                                    <a key={i} href={sbm.url} className='grid grid-cols-1 text-[30px] lg:text-[50px] ml-[10%] my-3'>{sbm.subttitle}</a>
                                                                ))
                                                            }
                                                        </>
                                                    }
                                                </li>

                                            </ul>
                                        }
                                    </details>
                                ))
                            }
                        </li>
                    </ul>

                    {/* Right Side Menu Content */}
                    <div className={`lg:w-[40%] flex flex-col pl-[25px] mt-[10px] py-[40px] lg:mt-0 lg:py-0 items-start lg:pl-[60px]  f-full ${ isDarkmode ? "bg-bgSecondary" : " bg-bgOffWhite"}`}>

                        {/* Descktop Searchbar */}
                        <div className={`hidden mt-[30%] w-[90%] h-[74px] lg:flex items-center border  rounded-[37px] px-[28px] ${ isDarkmode ? "border-white border-opacity-[50%]" : "border-bgPrimary"}`}>

                            <input type="text" placeholder='Search in Keyboard' className={`w-full h-[74px] flex items-center rounded-[37px] text-[25px] font-inter bg-transparent focus:outline-none  ${ isDarkmode ? "text-white placeholder:text-white placeholder:text-opacity-[50%]" : "text-bgPrimary placeholder:text-bgPrimary placeholder:text-opacity-[50%]"}`} />

                            <BiSearchAlt className={`text-[40px] ${isDarkmode ? "text-white text-opacity-[50%]" : "text-bgPrimary text-opacity-[50%]"}`} />
                        </div>

                        {/* Email Section */}
                        <div className='lg:mt-[30%]'>
                            <h2 className={`text-[24px] lg:text-[40px]  font-inter ${isDarkmode ? "text-white" : "text-bgPrimary"}`}>Want to talk with us?</h2>
                            <span className={`text-[30px] lg:text-[70px] font-[600]  leading-[20px] lg:leading-[60px] font-jaldi ${ isDarkmode ? "text-white" : "text-bgPrimary"}`}>info@company.com</span>
                        </div>

                        {/* Social Icons */}
                        <div className='mt-[34px] lg:mt-[16%]'>
                            <h2 className={`text-[20px] lg:text-[40px]  font-inter font-[700] ${ isDarkmode ? "text-white" : "text-bgPrimary"}`}>FOLLOW US</h2>
                            <div className={`flex items-center gap-[50px] lg:gap-[30px] text-[22px] text-white ${ isDarkmode ? "text-white" : "text-bgPrimary"}`}>
                                <button><FaFacebookF /></button>
                                <button><FaInstagram /></button>
                                <button><FaTwitter /></button>
                                <button><FaTiktok /></button>
                                <button> <FaYoutube /></button>
                            </div>
                        </div>
                    </div>

                </div>
            </Drawer >
        </>
    )
}

export default Menu