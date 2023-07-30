import { ThemeContext } from '@/Context/AppContext'
import React, { useContext } from 'react'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

const FollowUs = () => {

    const { isDarkmode } = useContext(ThemeContext);

    const iConDark = "text-[20px] text-[#C5C5C5] rotate-[90deg]"
    const iConLight = "text-[20px] text-#000 rotate-[90deg]"

    return (
        <div>
            {/* Follow Us Icons */}
            <div className='rotate-[-90deg] lg:flex items-center gap-[20px] z-[99]'>

                <button>
                    <div className={`w-[61px] h-[31px] border-[3px] border-[#C5C5C5] border-opacity-[50%] rounded-[47px] flex justify-end items-center ${isDarkmode ? "border-[#C5C5C5]" : "border-[#000]"}`}>
                        <div className={`w-[14px] h-[3px] ${isDarkmode ? "bg-[#C5C5C5]" : "bg-[#000]"} bg-opacity-[50%] rounded-[30px] mr-4`}></div>
                    </div>
                </button>
                
                <div className='w-[342px] h-[24px] flex items-center gap-[14px]  rotate-[-360deg]'>
                    <p className={`text-[20px] font-[500] font-inter ${isDarkmode ? "text-[#C5C5C5]" : "text-[#000]"}`}>FOLLOW US</p>

                    <div className={`w-[91px] h-[1px] ${isDarkmode ? "bg-[#C5C5C5]" : "bg-[#000]"} `}></div>

                    <div className='flex items-center gap-[18px]'>
                        <button><FaFacebookF className={isDarkmode ? iConDark : iConLight} /></button>
                        <button><FaYoutube className={isDarkmode ? iConDark : iConLight} /></button>
                        <button> <FaTwitter className={isDarkmode ? iConDark : iConLight} /></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FollowUs