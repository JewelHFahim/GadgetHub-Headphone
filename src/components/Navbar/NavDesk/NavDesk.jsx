import React from 'react';
import "./NavDesk.modul.css";
import Image from 'next/image';

const NavDesk = () => {
  return (
    <div className='flex items-center gap-[8px] ml-[48px] pt-[15px]'>
      <Image src="/logo.png" alt="" width={49} height={49} />
      <Image src="/logotext.png" alt="" width={310} height={62} />
    </div>
  )
}

export default NavDesk