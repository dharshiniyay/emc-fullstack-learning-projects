import React from "react";

function HeroCarousel() {
  return (
        <header
          className="h-96 bg-cover bg-center flex justify-center items-center mt-5"
          style={{
            backgroundImage:
              "url('https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/giftcard-og-202303?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1679597545112')",
          }}
        >
        <div className="flex-col text-center absolute top-80 ">
          <div className="bg-gray-300/50 rounded-2xl  space-y-3">
          <h2 className="text-5xl font-bold">Gifts full of Joy.</h2>
          <p className="text-2xl">
            Enjoy up to 10 000 instant cashabck on your favourite products with
            eligible cards
          </p>
          </div>
          <button className="mt-5 border-2 border-blue-500 rounded-3xl p-2 px-8 text-blue-500 text-lg hover:bg-blue-600 hover:text-white">Shop</button>
        </div>  
        </header>
  );
}

export default HeroCarousel;
