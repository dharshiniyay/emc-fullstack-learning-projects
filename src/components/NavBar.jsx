import React from 'react'
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

const nav=["Store","Mac","iPad","iPhone","Watch","Airpods", "TV & Home","Entertainment","Accessories","Support"]
function NavBar() {
  return (
    <div className="flex bg-gray-100 items-center justify-between px-20 py-3 sticky top-0" >
      <div className="text-2xl"><FaApple/></div>
      <div className="flex items-center space-x-10 ">
        {nav.map(function(item, index){
            return(<p className="cursor-pointer hover:font-bold">{item}</p>)
        })}
      </div>
      <div className="flex items-center space-x-6">
        <div className="text-2xl"><CiSearch/></div>
        <div className="text-2xl"><IoBagOutline/></div>
      </div>
    </div>
  )
}

export default NavBar
