import React from "react";
import homeHero from "../assets/home-hero.svg";

function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-gray-900 text-center w-full h-xl flex flex-row">
        <div className="w-full text-white opacity-90">
          <h1 className="font-ubuntuc mt-10 text-4xl uppercase font-bold w-full">Capturing title</h1>
          <p className="font-oxygen">Description on why it is good</p>
          <button className="transition duration-500 tracking-widest font-bold uppercase text-sm rounded bg-orange-500 py-1 px-2 border border-transparent hover:border-orange-500 hover:text-orange-500 hover:bg-transparent">Start crushing</button>
        </div>
        <div className="opacity-90 w-full flex items-center justify-start">
          <img src={homeHero} className="h-56" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
