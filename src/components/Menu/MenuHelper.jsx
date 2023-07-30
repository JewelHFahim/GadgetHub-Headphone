import React, { useContext, useState } from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import Menu from './Menu'
import { ThemeContext } from '@/Context/AppContext'

const MenuHelper = () => {


    const { isDarkmode } = useContext(ThemeContext)

    const [isOpen, setIsOpen] = useState(true)

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <div>
            <button onClick={toggleDrawer} className='absolute right-[30px] top-[15px] lg:top-[70px] lg:right-[-30px] z-[99] rotate-[-90deg]'>
                <div className='flex items-center w-[40px] lg:w-[150px]'>
                    <h2 className='textStrock font-poppins hidden lg:block'>Menu</h2>
                    <HiMenuAlt1 className={`text-[40px] ${ isDarkmode ? "text-white" : "text-black"} text-opacity-[50%]`} />
                </div>
            </button>
            <Menu isOpen={isOpen} toggleDrawer={toggleDrawer} />
        </div>
    )
}

export default MenuHelper