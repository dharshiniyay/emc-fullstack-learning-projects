import React from "react";
import Searchbox from "../components/Searchbox";
import MovieCard from "../components/MovieCard";
import { useState, useEffect, useContext } from "react";
import Loading from "../components/Loading";
import PageButtons from "../components/PageButtons"
import {SearchContext} from '../App'

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages]=useState(1)
  const {search,setSearch}=useContext(SearchContext)
 
  // Simpler Implementation with API key directly in there
  const API_Key = "780b08b68e2e2d2a79b234375fc49a5e";

  useEffect(() => {
    let url=`https://api.themoviedb.org/3/movie/popular?page=${pages}&region=India&api_key=${API_Key}`
    if(search){
      url=`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_Key}`
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
      .catch((err) => {
        console.error("Failed to fetch movies:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [pages,search]);
  

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mt-20">
      <Searchbox setSearch={setSearch} />
      <MovieCard movies={movies}/>
      <PageButtons pages={pages} setPages={setPages}/>
      
    </div>
  );
};

export default Home;




//Complex way of getting data, might not work 
 //1. Define Auth token
//   const Auth =F
//     " Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODBiMDhiNjhlMmUyZDJhNzliMjM0Mzc1ZmM0OWE1ZSIsIm5iZiI6MTc2MTg0Mzg2Mi4zMTIsInN1YiI6IjY5MDM5YTk2ODVmMmM4YTU1ZWVjOWRlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x_BZ8h3noC6xV8G2rwqS5g0K-FqT0hAQHqGQjqPwPls";
// //  useEffect(() => {
//     const fetchmovies = async () => {
//       //try block for fetching data
//       try {
//         //2. Define the URL
//         const url =
//           "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
//         //3. Define option object
//         const options = {
//           method: "Get",
//           headers: {
//             Authentication: Auth,
//             accept: "application/json",
//           },
//         };
//         //4. Fetch url
//         const response = await fetch(url, options);

//         //Check url
//         if (!response) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         //5. get json data
//         const data = await res.json();
//         console.log(data);

//         //5. Set data
//         // setMovies(data);
//       } catch (err) {
//         console.error("Failed to fetch movies:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchmovies();
//   }, []);