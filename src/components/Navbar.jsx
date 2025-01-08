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
    <nav className="bg-gradient-to-r   from-gray-200 via-slate-400 to-gray-500  text-customPurple">
      <div className="container mx-auto px-4 sm:px-6 lg:px-48 ">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <span className="sr-only">Home</span>
              <img
                src={logo}
                alt="Logo"
                className="h-20 md:h-28 lg:h-28 xl:h-28 2xl:h-32 w-auto transition-transform duration-300 hover:scale-x-125"
              />
            </Link>
          </div>

          {/* Links for Large Screens */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <ul className="flex space-x-20 font-customFont lg:text-2xl">
              <li>
                <Link
                  to="/"
                  className={`transition-transform duration-500 ease-in-out ${isActive("/") ? "text-fuchsia-800" : "hover:text-fuchsia-800"}`}
                >
                  <span className="inline-block hover:scale-110">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className={`transition-transform duration-500 ease-in-out ${isActive("/work") ? "text-fuchsia-800" : "hover:text-fuchsia-800"}`}
                >
                  <span className="inline-block hover:scale-110">Work</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`transition-transform duration-500 ease-in-out ${isActive("/about") ? "text-fuchsia-800" : "hover:text-fuchsia-800"}`}
                >
                  <span className="inline-block hover:scale-110">Say Hello!</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1"
              aria-label="Toggle navigation"
            >
              <svg
                className="h-8 w-8 text-customPurpleHamburger hover:text-fuchsia-800 transition-transform duration-500 ease-in-out"
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
        <ul className="py-3 font-customFont rounded-md text-xl flex flex-col items-end justify-center bg-fuchsia-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
          <li>
            <Link
              to="/"
              className={`block px-4 py-2  ${isActive("/") ? "text-fuchsia-800" : "hover:text-fuchsia-800"}`}
              onClick={handleLinkClick}
            >
              <span className="inline-block hover:scale-110">Home</span>
            </Link>
          </li>

          <li>
            <Link
              to="/work"
              className={`block px-4 py-2  ${isActive("/work") ? "text-fuchsia-800" : "hover:text-fuchsia-800"}`}
              onClick={handleLinkClick}
            >
              <span className="inline-block hover:scale-110">Work</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`block px-4 py-2  ${isActive("/about") ? "text-fuchsia-800" : "hover:text-fuchsia-800"}`}
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
