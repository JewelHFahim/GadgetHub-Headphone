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




const Menu = () => {

    const { isOpen, toggleDrawer } = useContext(ThemeContext);
    console.log(toggleDrawer)

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

    // Menus
    const menus = [
        {
            title: "Home",
            url: ""
        },
        {
            title: "Blog",
            url: ""
        },
        {
            title: "Headset",
            url: "",
            submenu: [
                {
                    subttitle: 'Gaming',
                    url: ""
                },
                {
                    subttitle: 'MUSIC',
                    url: ""
                },
            ]
        },
        {
            title: "About Us",
            url: ""
        },
        {
            title: "Contact Us",
            url: ""
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

                style={{ backgroundColor: "#131313" }}
            >
                <div className=' lg:flex w-[102vw] lg:pl-[95px] h-full relative'>

                    {/* Menu Close Button */}
                    <button onClick={toggleDrawer} className='absolute right-[20px] top-[10px]  lg:right-[80px] lg:top-[70px]'>
                        <CgCloseO className='text-[40px] text-white' />
                    </button>

                    {/* Left Side Menu COntent */}
                    <ul className='lg:w-[60%]'>

                        {/* Logo */}
                        <div className=' lg:mb-[150px] pt-[50px] lg:mt-[44px] ml-[-48px] lg:block flex justify-center'>
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
                        <li className="menu uppercase text-white text-[40px] lg:text-[60px] font-[700] font-inter flex flex-col gap-[40px] ">
                            {
                                menus.map((menu, i) => (
                                    <details key={i} open className='border-b border-white border-opacity-[5%] flex'>
                                        <summary className='mb-4 flex justify-between items-center'
                                            onClick={handleOpen}>

                                            {menu.title}

                                            {
                                                menu.submenu &&
                                                <div className='my-[-10px]'>
                                                    {
                                                        open ? <FiPlusCircle /> : <FaMinus />
                                                    }
                                                </div>
                                            }

                                        </summary>

                                        {
                                            menu.submenu &&

                                            <ul>
                                                <li>
                                                    {
                                                        <>
                                                            {
                                                                menu.submenu.map((sbm, i) => (
                                                                    <a key={i} href="" className='grid grid-cols-1 text-[30px] lg:text-[50px] ml-[10%] my-3'>{sbm.subttitle}</a>
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
                    <div className='lg:w-[40%] flex flex-col pl-[25px] mt-[10px] py-[40px] lg:mt-0 lg:py-0 items-start lg:pl-[60px] bg-bgSecondary f-full'>

                        {/* Descktop Searchbar */}
                        <div className='hidden mt-[30%] w-[90%] h-[74px] lg:flex items-center border border-white border-opacity-[50%] rounded-[37px] px-[28px]'>
                            <input type="text" placeholder='Search in Keyboard' className='w-full h-[74px] flex items-center rounded-[37px] text-[25px] font-inter bg-transparent focus:outline-none text-white placeholder:text-white placeholder:text-opacity-[50%]' />
                            <BiSearchAlt className='text-[40px] text-white text-opacity-[50%]' />
                        </div>

                        {/* Email Section */}
                        <div className='lg:mt-[30%]'>
                            <h2 className='text-[24px] lg:text-[40px] text-white font-inter'>Want to talk with us?</h2>
                            <span className='text-[30px] lg:text-[70px] font-[600] text-white leading-[20px] lg:leading-[60px] font-jaldi'>info@company.com</span>
                        </div>

                        {/* Social Icons */}
                        <div className='mt-[34px] lg:mt-[16%]'>
                            <h2 className='text-[20px] lg:text-[40px] text-white font-inter font-[700]'>FOLLOW US</h2>
                            <div className='flex items-center gap-[50px] lg:gap-[30px] text-[22px] text-white'>
                                <button><FaFacebookF /></button>
                                <button><FaInstagram /></button>
                                <button><FaTwitter /></button>
                                <button><FaTiktok /></button>
                                <button> <FaYoutube /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default Menu