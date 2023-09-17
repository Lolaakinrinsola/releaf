import React from "react";
import { AiFillHome, AiFillProfile,AiFillBell } from "react-icons/ai";
import {
  BsFillFileBarGraphFill,
  BsPersonCircle,
  BsFillBookmarksFill,
  BsThreeDots
} from "react-icons/bs";
import { PiWalletFill,PiCardsFill } from "react-icons/pi";
import { RiVideoFill } from "react-icons/ri";
import {FiSettings} from 'react-icons/fi';
import profileDP from '../assets/profileDP.jpg'

const Sidebar = ({children}) => {
  return (
    <>
    <div className="relative z-50">
    <div className="bg-[#0F2218] h-screen w-[10em] fixed gap-2 ">
        <div className="pt-[4em] w-[5.5em] grid justify-center  m-auto text-[#6FFC2D]">
        <PiCardsFill size='3.5em'  />
        </div>
        <div className="grid justify-between h-full items-center  m-auto  w-full">
      <div className=" text-[1.8em] grid gap-[1.8em] text-[#7F7F7F] m-auto  w-[5.5em] justify-center">
        <AiFillHome size="1.8em" />
        <PiWalletFill size="1.8em" />
        <AiFillProfile size="1.8em" />
        <BsPersonCircle size="1.8em" color="#6FFC2D"/>
        <BsFillFileBarGraphFill size="1.8em" />
        <RiVideoFill size="1.8em" />
        <BsFillBookmarksFill size="1.8em" />
      </div>
      <div className=" text-[1.8em] grid justify-center gap-[1.8em] text-[#7F7F7F] ">
        <AiFillBell size='1.8em'/>
        <FiSettings size='2em'/>
      </div>

        </div>
    </div>
    <div className="absolute top-[3.5em] right-[5em]  text-[#7F7F7F] ">
        <div className="flex gap-[2em] items-center">
        <BsThreeDots size='3.5em' className="m-0" />
        <img src={profileDP} alt=""  className="w-[4em] rounded-full h-[4em]"/>

    </div>

        </div>
    </div>
<div className="grid w-[100%] pl-[15em] pt-[5em] pr-[5em]">
    {children}
    </div>
    
    </>
  );
};

export default Sidebar;
