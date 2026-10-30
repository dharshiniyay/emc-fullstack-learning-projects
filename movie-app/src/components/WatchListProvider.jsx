import React from 'react'
import {createContext, useState} from "react";

export const WatchListContext= createContext()

const WatchListProvider = ({children}) => {
  const [watchList, setWatchlist]=useState([]) 

  const toggleList=(movies)=>{
        const index=watchList.findIndex((m)=>{return m.id===movies.id}) //returns -1 when false, else the index of first element of the array that satifies the context if true 

        if(index==-1){
            setWatchlist([...watchList, movies]);

    
        }
        else{
            setWatchlist([
                ...watchList.slice(0, index),  //if index=2 and array is [0,1,2,3,4] then returns [0,1]
                ...watchList.slice(index+1),   //if index=2 and array is [0,1,2,3,4] then returns [3,4]  hence finally a new array of [0,1,3,4]
            ]
            )
        }

  }
  
  return (
    <WatchListContext.Provider value={{ watchList, toggleList}}>
      {children}
    </WatchListContext.Provider>
  )
}

export default WatchListProvider
