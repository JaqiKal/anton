import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location
  const isActive = (path) => location.pathname === path; // Check if the current path is active
  const handleLinkClick = () => {
    setTimeout(() => {
      setIsOpen(false); // Auto-close after a short delay
    }, 600);
  };

  return (
    <nav className="text-customGreen">
      <div className="mx-auto px-2 md:px-6 lg:px-8 xl:px-10 2xl:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <span className="sr-only">Home</span>
              <img
                src={logo}
                alt="Logo"
                className="h-20 md:h-28 lg:h-28 xl:h-28 2xl:h-32 w-auto transition-transform duration-300 hover:scale-110"
                aria-label="Go to homepage via logo"
              />
            </Link>
          </div>

          {/* Links for Large Screens */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <div className="h-full w-full bg-customOrangeBg rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 lg:px-3 lg:py-2 lg:mt-10 lg:mr-6">
              <ul className="flex  space-x-10 lg:px-2  font-customFont lg:text-xl">
                <li>
                  <Link
                    to="/"
                    className={`transition-transform duration-500 ease-in-out ${isActive("/") ? "text-customOrange" : "hover:text-customOrange"}`}
                    aria-label="Home navigation link"
                  >
                    <span className="inline-block hover:scale-110">Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/work"
                    className={`transition-transform duration-500 ease-in-out ${isActive("/work") ? "text-customOrange" : "hover:text-customOrange"}`}
                    aria-label="Work navigation link"
                  >
                    <span className="inline-block hover:scale-110">Work</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`transition-transform duration-500 ease-in-out ${isActive("/about") ? "text-customOrange" : "hover:text-customOrange"}`}
                    aria-label="About navigation link"
                  >
                    <span className="inline-block hover:scale-110">Say Hello!</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1"
              aria-label="Toggle navigation"
            >
              <svg
                className="h-8 w-8  text-customGreen hover:text-orange-800 transition-transform duration-500 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Links for Small Screens */}

      <div className={`overflow-hidden lg:hidden transition-all duration-700  ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <ul className="font-customFont rounded-md text-lg space-y-4 flex flex-col items-end justify-center  bg-customOrangeBg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
          <li>
            <Link
              to="/"
              className={`block px-4 pt-3 ${isActive("/") ? "text-customOrange" : "hover:text-customOrange"}`}
              onClick={handleLinkClick}
              aria-label="Home navigation link"
            >
              <span className="inline-block hover:scale-110">Home</span>
            </Link>
          </li>

          <li>
            <Link
              to="/work"
              className={`block px-4  ${isActive("/work") ? "text-customOrange" : "hover:text-customOrange"}`}
              onClick={handleLinkClick}
            >
              <span className="inline-block hover:scale-110">Work</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`block px-4 pb-3  ${isActive("/about") ? "text-customOrange" : "hover:text-customOrange"}`}
              onClick={handleLinkClick}
            >
              <span className="inline-block hover:scale-110">Say Hello!</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
