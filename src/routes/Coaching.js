import React from "react";
import { Link } from "react-router-dom";
import hm3 from "../assets/hm3-big.png";

function Coaching() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative text-center">
        <img className="h-xl block object-cover w-full" src={hm3} alt="holdemmanager" />
        <div className="bg-gray-900 w-full h-full absolute left-0 top-0 opacity-50"></div>
        <div className={`font-ubuntuc block absolute ml-10 left-0 md:top-1/3 top-0 text-left
          text-white font-bold tracking-wider text-4xl uppercase opacity-90`}>
          Advanced Poker Strategy
        </div>
        <p className={`font-oxygen black absolute text-left text-lg ml-10 w-2/3
          left-0 top-1/2 text-white opacity-90`}>
          Learn to crush the competition with a modern approach to poker strategy, backed by the latest theory and technology.
        </p>
      </div>
      <div className="content flex justify-center mt-5">
        <Link to="/contact">
          <button className={`transition duration-500 font-bold uppercase
            tracking-widest text-white bg-orange-500 rounded px-2 py-1 text-sm
            hover:bg-transparent border border-transparent 
            hover:border-orange-500 hover:text-orange-500`}>
            Apply now
          </button>
        </Link>
      </div>

    </div>
  );
};

export default Coaching;
