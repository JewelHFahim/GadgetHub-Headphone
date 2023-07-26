import { ThemeContext } from '@/Context/AppContext';
import { useContext } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';


const ToggleBtn = () => {
    const { isDarkmode, setIsDarkmode } = useContext(ThemeContext)

    const darkIcon = (
        <BsFillMoonFill className='text-[20px]' />
    );

    const lightIcon = (
        <BsFillSunFill className='text-[20px]' />
    );


    function toggleTheme() {
        setIsDarkmode(!isDarkmode);
    }

    return (
        <div className=' lg:rotate-[-90deg]'>

            <button
                className={`w-[70px] h-[30px] rounded-full bg-[#0F121A] flex items-center transition duration-300 border border-white border-opacity-[10%]  focus:outline-none shadow ${isDarkmode ? 'dark' : ''
                    }`} onClick={toggleTheme}>

                <div id="switch-toggle"
                    className={`w-[35px] h-[35px] relative rounded-full transition duration-500 transform ${isDarkmode ? 'bg-gray-700 translate-x-full' : 'bg-yellow-500 -translate-x-2'
                        } p-1 text-white flex justify-center items-center`}>

                    {isDarkmode ? darkIcon : lightIcon}

                </div>
            </button>

        </div>
    );
};

export default ToggleBtn;