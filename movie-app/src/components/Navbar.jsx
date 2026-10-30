import React from 'react'
import { Link } from 'react-router-dom'
import {useContext} from "react"
import {WatchListContext} from '../components/WatchListProvider'

 

const Navbar = () => {
  const {watchList} = useContext(WatchListContext);
  console.log("count", watchList.length)
  return (
   <nav className="navbar bg-blue-950 p-4 flex justify-between text-white text-lg font-bold top-0 fixed w-full z-10">
    <Link to="/">Movie App</Link>
    <Link to="/watchlist">WatchList({watchList.length})</Link>
   </nav>
  )
}

export default Navbar
