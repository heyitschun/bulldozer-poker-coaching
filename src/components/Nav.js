import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Nav() {
  const pages = ["Home", "Coaching", "Contact", "Faq"]
  const nav = pages.map((p, i) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1+(i*.20) }}
      >
        <li className="mx-3 tracking-widest uppercase text-sm font-bold inline">
          <Link to={"/"+p.toLowerCase()}>{p}</Link>
        </li>
      </motion.div>
    )
  })
  
  return (
    <nav className="pt-8 bg-gray-900 text-white pb-4">
      <ul className="flex justify-center">
        {nav}
      </ul>
    </nav>
  );
};

export default Nav;
