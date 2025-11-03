import { useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import Navbar from "./components/Navbar";
import WatchListProvider from "./components/WatchListProvider"
// import './App.css'

export const SearchContext=createContext()
function App() {
  
  const [search, setSearch]=useState("")
  return ( 
    <SearchContext.Provider value={{search, setSearch}}>
      <WatchListProvider >
      <BrowserRouter> 
        <Navbar />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
      </BrowserRouter> 
      </WatchListProvider>
    </SearchContext.Provider>
  );
}
export default App;
