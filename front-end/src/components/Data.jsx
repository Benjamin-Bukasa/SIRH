import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { IoIosAddCircle } from "react-icons/io";


function Data() {
  return (
    <div className='w-full h-full flex justify-between items-start gap-2 bg-white p-2 rounded-md shadow-sm'>
        <ul className="w-1/4 h-full flex flex-col justify-between gap-2">
            <li className='w-full h-1/5 flex bg-[#94a3b833]  hover:bg-orange-50 active:bg-slate-700 active:text-white transition-all ease-in-out text-slate-500 rounded-md font-semibold text-[20px] p-2 shadow-md'>
                <Link to='/ajouter/portefeuille'className='flex gap-4 justify-start items-center w-full h-full'><IoIosAddCircle size={30}/> Nouveau Portefeuille</Link>
            </li>
            <li className='w-full h-1/5 flex bg-[#94a3b833]  hover:bg-orange-50 active:bg-slate-700 active:text-white transition-all ease-in-out text-slate-500 rounded-md font-semibold text-[20px] p-2 shadow-md'>
                <Link to='/ajouter/manager'className='flex gap-4 justify-start items-center w-full h-full'><IoIosAddCircle size={30}/> Nouveau Manager</Link>
            </li>
            <li className='w-full h-1/5 flex bg-[#94a3b833]  hover:bg-orange-50 active:bg-slate-700 active:text-white transition-all ease-in-out text-slate-500 rounded-md font-semibold text-[20px] p-2 shadow-md'>
                <Link to='/ajouter/superviseur'className='flex gap-4 justify-start items-center w-full h-full'><IoIosAddCircle size={30}/> Nouveau Superviseur</Link>
            </li>
            <li className='w-full h-1/5 flex bg-[#94a3b833]  hover:bg-orange-50 active:bg-slate-700 active:text-white transition-all ease-in-out text-slate-500 rounded-md font-semibold text-[20px] p-2 shadow-md'>
                <Link to='/ajouter/agent'className='flex gap-4 justify-start items-center w-full h-full'><IoIosAddCircle size={30}/> Nouveau Agent</Link>
            </li>
            <li className='w-full h-1/5 flex bg-[#94a3b833]  hover:bg-orange-50 active:bg-slate-700 active:text-white transition-all ease-in-out text-slate-500 rounded-md font-semibold text-[20px] p-2 shadow-md'>
                <Link to='/ajouter/fichier'className='flex gap-4 justify-start items-center w-full h-full'><IoIosAddCircle size={30}/> Nouveau Fichier</Link>
            </li>
        </ul>
        <div className="w-3/4 h-full bg-white shadow-md p-2 rounded-md">
            <Outlet/>
        </div>
    </div>
  )
}

export default Data