import React from "react";
import phoneImage from '../assets/phone.jpg';

function Banner() {
  return (
        <header
          className="h-96 bg-contain bg-center flex justify-center items-center mt-9"
          style={{
            backgroundImage:
              `url(${phoneImage})`
          }}
        >
        <div className="text-center"> 
        <h2 className="text-white text-6xl font-bold">iPhone 17 Pro</h2>
        <h2 className="text-white text-4xl">All out Pro</h2>
        <div className="flex gap-4 mt-3 justify-center">
          <button className="border border-blue-600 bg-blue-600 text-white rounded-3xl py-2 px-4">Learn more</button>
          <button className="border-2 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer rounded-3xl py-2 px-4">Buy</button>
        </div>
        </div> 
        </header>
  );
}

export default Banner;
