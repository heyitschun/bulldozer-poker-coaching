import React from "react";
import Messenger from "../assets/messenger.svg";

function Footer() {
  const chun =
    <a
      href="https://heyitschun.com"
      rel="noopener noreferrer"
      target="_blank"
      className="transition duration-300 hover:opacity-50 text-cyan"
    >
      Chun Poon
    </a>

  return (
    <footer className="bg-gray-800 text-gray-100 mt-10 pt-10 pb-24 px-10 text-sm flex justify-between">
      <div>
        &copy; 2020 Bobby Justin Renner
      </div>
      <div>
        <a
          href="https://www.messenger.com/t/bobby.j.renner"
          rel="noopener noreferrer noopener"
          target="_blank"
        >
          <img src={Messenger} alt="" />
        </a>
      </div>
      <div>
        Designed and built by { chun }
      </div>
    </footer>
  );
};

export default Footer;
