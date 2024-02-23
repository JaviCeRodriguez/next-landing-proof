"use client";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-primary-01 py-3 px-4 shadow-md fixed w-full z-10">
      <div className="flex items-center flex-shrink-0 text-secondary-03 mr-6">
        <span className="font-semibold text-xl tracking-tight">Whitespace</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-secondary-03 border-secondary-03 hover:text-primary-02 hover:border-primary-02"
        >
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-secondary-03 hover:text-primary-02 mr-4"
          >
            Product
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-secondary-03 hover:text-primary-02 mr-4"
          >
            Resources
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-secondary-03 hover:text-primary-02"
          >
            Company
          </a>
        </div>
        <div>
          <a
            href="#responsive-header"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-secondary-03 border-secondary-03 hover:border-primary-02 hover:text-primary-02 mt-4 lg:mt-0"
          >
            Try It Today
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
