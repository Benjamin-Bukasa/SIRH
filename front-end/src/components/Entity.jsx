import {Link} from "react-router-dom"
import { IoIosAddCircle } from "react-icons/io";
import { BsFillWalletFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";
import { RiUser2Fill } from "react-icons/ri";
import { RiUser3Fill } from "react-icons/ri";


const Entity = () => {
  return (
    <div className="w-full h-40 text-[14px] font-semibold">
      <ul className="w-full h-full flex justify-start items-start wrap gap-5">
        <li className="w-1/5 h-full flex justify-center items-center bg-white rounded-md hover:text-orange-600"><Link to='/ajouter'>
                <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
                    <IoIosAddCircle size={30}/>
                    <p>Nouveau</p>
                </div>
            </Link></li>
        <li className="w-1/5 h-full flex justify-center items-center bg-white rounded-md hover:text-orange-600"><Link to='/clients'>
                <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
                    <BsFillWalletFill size={30}/>
                    <p>Porte-feuilles</p>
                </div>
            </Link></li>
        <li className="w-1/5 h-full flex justify-center items-center bg-white rounded-md hover:text-orange-600"><Link to='/managers'>
                <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
                    <FaUserTie size={30}/>
                    <p>Manager</p>
                </div>
            </Link></li>
        <li className="w-1/5 h-full flex justify-center items-center bg-white rounded-md hover:text-orange-600"><Link to='/superviseurs'>
                <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
                    <RiUser2Fill size={30}/>
                    <p>Superviseurs</p>
                </div>
            </Link></li>
        <li className="w-1/5 h-full flex justify-center items-center bg-white rounded-md hover:text-orange-600"><Link to='/agents'>
                <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
                    <RiUser3Fill size={30}/>
                    <p>Agent MAD</p>
                </div>
            </Link></li>
      </ul>
    </div>
  );
}

export default Entity;
