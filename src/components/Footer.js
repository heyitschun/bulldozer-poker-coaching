import React from "react";

function Footer() {
  const chun =
    <a
      href="https://heyitschun.com"
      rel="noopener noreferrer"
      target="_blank"
      className="border-b-2 border-transparent hover:border-blue-500 text-blue-500"
    >
      Chun Poon
    </a>

  return (
    <footer className="bg-gray-800 text-gray-100 mt-10 pt-10 pb-24 px-10 text-sm flex justify-between">
      <div>
        &copy; 2020 Bobby Justin Renner
      </div>
      <div>
        Messenger, FB
      </div>
      <div>
        Designed and built by { chun }
      </div>
    </footer>
  );
};

export default Footer;
