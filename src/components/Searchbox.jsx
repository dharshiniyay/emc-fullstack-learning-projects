import React from 'react'
import {SearchContext} from '../App'
import {useContext} from "react"

const Searchbox = () => {
  const {search,setSearch}=useContext(SearchContext)
  return (
    <div className='flex justify-center'>
        <input onChange={(e)=>{setSearch(e.target.value)}}type="text" placeholder="Search for movies..." className="border-2 border-gray-500 rounded-lg p-2 w-3/4 bg-gray-400 text-amber-50 bg-opacity-60 backdrop-blur-md fixed top-20 z-10"/>
    </div>
  )
}

export default Searchbox
