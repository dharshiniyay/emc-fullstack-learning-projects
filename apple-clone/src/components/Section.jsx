import React from "react";

const Section = () => {
  const object = [
    {
      id: 1,
      title: "Apple Watch Series",
      subtitle: "The ultimate watch for healthy life",
      url: "https://m.media-amazon.com/images/I/61sJ2wMUjRL._AC_SX679_.jpg",
    },
    {
      id: 2,
      title: "iPad Pro",
      subtitle: "Advanced AI performance and game-changing capabilities",
      url: "https://m.media-amazon.com/images/I/71OTzAMXQhL._AC_SX679_.jpg",
    },
    {
      id: 3,
      title: "AirPods Pro 3",
      subtitle: "The world's best in-ear Noise Cancellation",
      url: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509?wid=976&hei=916&fmt=jpeg&qlt=90&.v=cmp4MmZ6OWxOeHNNTXh4SzlBNUpEb1RucE9zZTI5eEREaWZpY29lSld3eWVDYXovZDMyN1dXU211bjZoVlVUcWJGcXNRQnFCV0w3WVRjTExvdm1ic1YxRUxFRmRlWDBITzhnRmZ5OTRmaVdKTExiOEFsRmxtQ2Nua0tRSC83MkI",
    },
    {
      id: 4,
      title: "Apple Watch SE 3",
      subtitle: "Walk it. Talk it. Track it. Love it",
      url: "https://m-cdn.phonearena.com/images/hub/500-wide-two_1200/Apple-Watch-SE-3-release-date-price-and-features.jpg",
    },
    {
      id: 5,
      title: "Macbook Air ",
      subtitle: "Sky blue colour. Sky high performance",
      url: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mba13-skyblue-cto-hero-202503?wid=400&hei=400&fmt=jpeg&qlt=90&.v=R3ppeU9YZTloeFNEd0dud1VoQ0NmWm1SM25kQmZRNlUvMjRRR24zL3lWWjhPSkMxOStEeW1wdSszbExkeVJKZ3VUb3VPa2FUZVhQMFhDQnVBMWhwQTdTNGhjOWNZMVVZVDZ6eXJmMzhkb28",
    },
    {
      id: 6,
      title: "Trade In",
      subtitle: "Upgrade and save. Its that easy ",
      url: "https://plus.unsplash.com/premium_photo-1681336999500-e4f96fe367f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
  ];

  return (
    <div className="section grid grid-cols-2 gap-4 p-6">
      {object.map((item) => {
        return (
          <div className="relative min-h-[600px] bg-center bg-cover bg-no-repeat" style={{backgroundImage:`url(${item.url})`}}>
            <div className="absolute inset-0 flex flex-col items-center pt-16 md:pt-24 text-center text-white">
            <span className="bg-gray-300/50 rounded-2xl"><h1 className="text-4xl md:text-6xl font-semibold tracking-wider mb-4 text-black">{item.title}</h1></span>
          <p className="text-lg md:text-xl font-bold mb-8 text-black">{item.subtitle}</p>
            <div className="flex space-x-4">
                <button className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-medium transition duration-200 cursor-pointer">Learn more</button>
                <button className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-300 hover:text-blue-600 font-medium transition duration-200 cursor-pointer"> Buy</button>
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Section;
