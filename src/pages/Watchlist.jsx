import React from "react";
import Searchbox from "../components/Searchbox";
import MovieCard from "../components/MovieCard";
import {useContext, useEffect, useState} from "react";
import PageButtons from "../components/PageButtons"
import Dropdown from "../components/Dropdown"
import {WatchListContext} from '../components/WatchListProvider'
import {SearchContext} from '../App'
import Loading from "../components/Loading";

const Watchlist = () => {
  const { watchList} = useContext(WatchListContext);
  const {search}=useContext(SearchContext)
  console.log(search)


  const [isLoading, setIsLoading] = useState(true);
  const [genre, setGenre]=useState([])
  const [gid, setgid]=useState(0)
  console.log("gid",gid)

 //Handling Genres 
 // Simpler Implementation with API key directly in there
   const API_Key = "780b08b68e2e2d2a79b234375fc49a5e";
 
   useEffect(() => {
     let url=`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_Key}`
     fetch(url)
       .then((res) => res.json())
       .then((genredata) => {
         console.log("genre", genredata);
         setGenre(genredata)
       })
       .catch((err) => {
         console.error("Failed to fetch movies:", err);
       })
       .finally(() => {
         setIsLoading(false);
       });
   }, []);
  
  if (isLoading) {
    return <Loading />;
  }
  //Filter by search and by genres
  const filterMovies=watchList
                    // .filter((m)=>m.title.toLowerCase().includes(search.toLowerCase()))
                    .filter((m)=>{ return gid==0 || m.genre_ids.includes(Number(gid))})
  console.log("filter",filterMovies)                  
  return (
    <div className="mt-20">
      <Searchbox/>
      <div className="mt-16 flex justify-center">
      <Dropdown genre={genre} setgid={setgid}/>
      </div>
      <MovieCard movies={filterMovies}/>
      <div className="fixed bottom-0 w-full">
      <PageButtons/>
      </div>
      
    </div>
  );
};

export default Watchlist;

