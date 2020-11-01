import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Nav() {
  const history = useHistory();
  const pages = ["Home", "Coaching", "Faq", "Contact"];
  const [activePage, setActivePage] = useState("");
  const url_path = history.location.pathname.slice(1);

  const pageHandler = p => {
    setActivePage(p)
  };

  const nav = pages.map((p, i) => {
    let buttonStyle = "transition duration-500 bg-orange-500 border border-orange-500 rounded hover:bg-transparent cursor-pointer "

    return (
      <li
        key={i}
        className={"mx-3 py-1 px-2 tracking-widest uppercase text-xs font-bold inline " + (p === "Contact" ? buttonStyle : "")}
        onClick={() => {pageHandler(p)}}
      >
        <Link to={"/"+p.toLowerCase()}>{p}</Link>
      </li>
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
