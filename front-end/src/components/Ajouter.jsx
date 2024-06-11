import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Data from "./Data"
// import { parsePath, useNavigate, useParams } from 'react-router-dom'
import Entity from './Entity'




function Ajouter() {


  return (
    <>
        <div className="w-full h-screen flex justify-start items-start">
        <Sidebar/>
        <div className="w-full h-screen flex flex-col justify-start gap-4 p-2 bg-[#f5f5f56b]">
            {/* <Navbar title={crumb}/> */}
            <Entity/>
            <Data/>
        </div>
      </div>
    </>
  )
}

export default Ajouter