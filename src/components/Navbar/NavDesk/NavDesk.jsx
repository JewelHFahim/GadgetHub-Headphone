import React from 'react';
import "./NavDesk.modul.css";
import Image from 'next/image';
import PrimaryTitle from '@/utils/PrimaryTitle';

const NavDesk = () => {
  return (
    <div className='flex items-center gap-[8px] ml-[30px] lg:ml-[48px]'>
      <Image src="/logo.png" alt="" width={49} height={49} />
      <PrimaryTitle className="text-[20px] lg:text-[41px] font-[900] font-poppins">Music Buddy</PrimaryTitle>
    </div>
  )
}

export default NavDesk