import React from 'react'
import { CiHeart} from "react-icons/ci";
import {FaHeart} from "react-icons/fa"
import {useState, useContext} from "react"
import {WatchListContext} from '../components/WatchListProvider'


const MovieCard = ({movies}) => {
 const { watchList, toggleList} = useContext(WatchListContext);
 console.log("watchlist", watchList)

  return (
    <div className="movieContainer mt-32 grid grid-cols-4">
      {
        movies.map((movies)=>{
          const isMovieInWatchlist = watchList.some((m) => m.id === movies.id);
          return(
            <div key={movies.id}className="movieCard bg-gray-800 p-4 m-4 rounded-lg shadow-lg flex flex-col justify-center relative">
            <button className=" absolute top-2 text-3xl mb-4 text-red-600 cursor-pointer right-3" onClick={()=>toggleList(movies)}> {isMovieInWatchlist? <FaHeart />:<CiHeart/> } </button>
            <img className=" w-full object-contain" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt="Movie Poster"/>
            <div className="movieInfo text-white mt-4">
                <h2 className="movieTitle text-l font-bold text-left">{movies.title}</h2>
                <p className="movieYear text-gray-400">{movies.release_date}</p>
            </div>
        </div>
          )
        })
      }
        
      
    </div>
  )
}

export default MovieCard
