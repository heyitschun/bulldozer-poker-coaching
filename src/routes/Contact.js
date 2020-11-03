import React from "react";
import messengerIcon from "../assets/messenger.svg";

function Contact() {
  const messenger =
    <a
      href="https://www.messenger.com/t/bobby.j.renner"
      rel="noopener noreferrer"
      target="_blank"
      className="font-bold text-xs uppercase tracking-wider transition duration-500 text-white rounded px-2 py-1 bg-blue-500 border border-transparent hover:border-blue-500 hover:bg-transparent hover:text-blue-500"
    >
      Messenger
    </a>

  return (
    <div className="content">
      <h1 className="font-bold text-xl text-center">Start bulldozing</h1>
      <div className="flex justify-center mt-5">
        <p className="w-full text-center">
          To apply for coaching, the private chat group or if you have other inquiries, please use the form below or contact me directly on {messenger}
        </p>
      </div>
      <form className="text-gray-800 flex justify-center mt-10" action="">
        <div className="flex flex-wrap w-4/5 md:w-2/3">
          <div className="w-full mb-5">
            <label className="block text-sm font-bold" htmlFor="name">Name</label>
            <input className="transition duration-500 block p-2 w-full bg-gray-200 focus:outline-none border-2 rounded border-transparent focus:border-gray-300 focus:bg-gray-100" type="text" />
          </div>
          <div className="w-full mb-5">
            <label className="block text-sm font-bold" htmlFor="email">Email</label>
            <input className="transition duration-500 block p-2 w-full bg-gray-200 focus:outline-none border-2 rounded border-transparent focus:border-gray-300 focus:bg-gray-100" type="text" />
          </div>
          <div className="w-full mb-5">
            <label className="block text-sm font-bold" htmlFor="message">Message</label>
            <textarea cols="30" rows="10" className="transition duration-500 block p-2 w-full bg-gray-200 focus:outline-none border-2 rounded border-transparent focus:border-gray-300 focus:bg-gray-100"></textarea>
          </div>
          <div className="w-full mb-5">
            <button action="submit" className="transition duration-500 rounded py-1 px-2 float-right bg-orange-500 text-white uppercase text-sm font-bold tracking-widest border border-orange-500 hover:text-orange-500 hover:bg-transparent">Send</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
