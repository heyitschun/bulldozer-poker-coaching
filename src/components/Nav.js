import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";


function Nav() {
  const history = useHistory();
  const pages = ["Home", "Coaching", "Contact", "Faq"];
  const [activePage, setActivePage] = useState("");
  const url_path = history.location.pathname.slice(1)

  const pageHandle = (page) => {
    setActivePage(page);
  }

  const nav = pages.map((p, i) => {
    return (
      <motion.div
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1+(i*.20) }}
      >
        <li
          className={"mx-3 tracking-widest uppercase text-sm font-bold inline " + (url_path === p.toLowerCase() ? "text-red-500" : "")}
          onClick={() => pageHandle(p.toLowerCase())}
        >
          <Link to={"/"+p.toLowerCase()}>{p}</Link>
        </li>
      </motion.div>
    )
  });
  
  return (
    <nav className="pt-8 bg-gray-900 text-white pb-4">
      <ul className="flex justify-center">
        {nav}
      </ul>
    </nav>
  );
};

export default Nav;
