import { useState } from 'react'
import NavBar from './components/NavBar'
import HeroCarousel from "./components/HeroCarousel"
import Banner from "./components/Banner"
import Section from "./components/Section"
import Footer from "./components/Footer"
import Footer2 from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <HeroCarousel/>
     <Banner/>
     <Section/>
     <Footer2/>
    </>
  )
}

export default App
