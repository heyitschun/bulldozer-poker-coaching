import React from "react";
import { Link } from "react-router-dom";
import hm3 from "../assets/hm3-big.png";

function Coaching() {
  return (
    <div className="w-full flex flex-col items-center">
      <div>
        <img src={hm3} className="w-full" />
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
