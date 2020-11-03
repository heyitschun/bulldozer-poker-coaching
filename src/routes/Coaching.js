import React from "react";
import { Link } from "react-router-dom";
import hm3 from "../assets/hm3-big.png";

function Coaching() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative text-center">
        <img className="h-xl block object-cover w-full" src={hm3} alt="" />
        <div className="font-oxygen block absolute ml-10 left-0 top-1/3 text-white font-bold tracking-wider text-4xl uppercase opacity-90">Advanced Poker Strategy</div>
      </div>
      <div className="content flex justify-center mt-5">
        <button className="transition duration-500 font-bold uppercase tracking-widest text-white bg-orange-500 rounded px-2 py-1 text-sm hover:bg-transparent border border-transparent hover:border-orange-500 hover:text-orange-500">
          <Link to="/contact">Apply Now</Link>
        </button>
      </div>

    </div>
  );
};

export default Coaching;
