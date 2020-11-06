import React from "react";
import { Link } from "react-router-dom";
import homeHero from "../assets/home-hero.svg";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-gray-900 text-center w-full h-xl flex flex-col md:flex-row">
        <div className="w-full text-white opacity-90 md:pl-12 m-10">
          <motion.h1
            className="font-ubuntuc text-left mt-10 text-4xl uppercase font-bold w-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="leading-8">Want to climb <br/>up the stakes <span className="italic text-cyan">FAST?</span></p>
          </motion.h1>
          <motion.p
            className="mb-5 font-oxygen text-left mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            Description on why it is good
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-left"
           >
            <button
              className={`transition duration-500 tracking-widest font-bold
                uppercase text-sm rounded bg-orange-500 py-1 px-2 border 
                border-transparent hover:border-orange-500 hover:text-orange-500
                hover:bg-transparent`}
           >
              <Link to="/contact">Start crushing</Link>
            </button>
          </motion.div>
        </div>
        <motion.div
          className="opacity-90 w-full flex items-center justify-start ml-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3 }}
        >
          <img src={homeHero} className="h-56" alt="hero" />
        </motion.div>
      </div>
      <div className="w-full flex flex-row mt-10">
        <div className="border p-2 w-1/3 text-center">1</div>
        <div className="border p-2 w-1/3 text-center">2</div>
        <div className="border p-2 w-1/3 text-center">3</div>
      </div>
    </div>
  );
};

export default Home;
