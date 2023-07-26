import React, { useContext } from 'react';
import "./NavDesk.modul.css";
import Image from 'next/image';
import PrimaryTitle from '@/utils/PrimaryTitle';
import Link from 'next/link';
import ToggoleBtn from '@/components/ToggoleBtn/ToggoleBtn';
import { ThemeContext } from '@/Context/AppContext';

const NavDesk = () => {

  const { isDarkmode } = useContext(ThemeContext)

  return (

    <div className={`flex items-center justify-between py-[15px] pr-[200px] ${isDarkmode ? "bg-bgPrimary" : "bg-white"}`}>

      <div>
        <Link href="/">
          <div className={`flex items-center gap-[8px] ml-[30px] lg:ml-[48px] `}>

            {isDarkmode ?
              <Image src="/logo.png" alt="" width={49} height={49} />
              :
              <Image src="/darkLogo.png" alt="" width={49} height={49} />
            }

            <PrimaryTitle className="text-[20px] lg:text-[41px] font-[900] font-poppins">Music Buddy</PrimaryTitle>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default NavDesk