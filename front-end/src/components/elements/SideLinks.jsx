
// import React from 'react'
// import { NavLink } from "react-router-dom"

import { FaUserTag } from "react-icons/fa6";
import { FaUserSlash } from "react-icons/fa6";
import { FaUsersGear } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { MdSettings } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { IoIosAddCircle } from "react-icons/io";



const SideLinks = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className="w-full h-20 px-4 py-3 mb-5">
        <h1 className="text-[20px] text-[#f06d2c] font-bold">AIHRS Outsourcing</h1>
      </div>
      <ul className="w-full text-[15px] divide-y">
        <li className="w-full h-12 py-4 px-3 flex justify-start items-center gap-8 hover:bg-[#fef6eb8a] hover:text-[#f06d2c]  hover:border-[#f06d2c] hover:border-b-[#F0f0f0] border-l-4 hover:border-l-4 hover:cursor-pointer"><span><GoHomeFill size={20} /></span><span>Accueil</span></li>
        <li className="w-full h-12 py-4 px-3 flex justify-start items-center gap-8 hover:bg-[#fef6eb8a] hover:text-[#f06d2c]  hover:border-[#f06d2c] hover:border-b-[#F0f0f0] border-l-4 hover:border-l-4 hover:cursor-pointer"><span><IoIosAddCircle size={20} /></span><span>Ajouter Agent</span></li>
        <li className="w-full h-12 py-4 px-3 flex justify-start items-center gap-8 hover:bg-[#fef6eb8a] hover:text-[#f06d2c]  hover:border-[#f06d2c] hover:border-b-[#F0f0f0] border-l-4 hover:border-l-4 hover:cursor-pointer"><span><FaUserTag size={20} /></span><span>Indicateur </span></li>
        <li className="w-full h-12 py-4 px-3 flex justify-start items-center gap-8 hover:bg-[#fef6eb8a] hover:text-[#f06d2c]  hover:border-[#f06d2c] hover:border-b-[#F0f0f0] border-l-4 hover:border-l-4 hover:cursor-pointer"><span><FaUserSlash size={20} /></span><span>Absence </span></li>
        <li className="w-full h-12 py-4 px-3 flex justify-start items-center gap-8 hover:bg-[#fef6eb8a] hover:text-[#f06d2c]  hover:border-[#f06d2c] hover:border-b-[#F0f0f0] border-l-4 hover:border-l-4 hover:cursor-pointer"><span><FaUsersGear size={20} /></span><span>Suivi Effectif Global </span></li>
        <li className="w-full h-12 py-4 px-3 flex justify-start items-center gap-8 hover:bg-[#fef6eb8a] hover:text-[#f06d2c]  hover:border-[#f06d2c] hover:border-b-[#F0f0f0] border-l-4 hover:border-l-4 hover:cursor-pointer"><span><FaUsers size={20} /></span><span>Effectifs </span></li>
        <li className="w-full h-12 py-4 px-3 flex justify-start items-center gap-8 hover:bg-[#fef6eb8a] hover:text-[#f06d2c]  hover:border-[#f06d2c]hover:border-b-[#F0f0f0] border-l-4 hover:border-l-4 hover:cursor-pointer"><span><MdSettings size={20} /></span><span>Réglage</span></li>
        
      </ul>
    </div>
  )
}

export default SideLinks
