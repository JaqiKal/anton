import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faClapperboard, faFileAlt } from "@fortawesome/free-solid-svg-icons";
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
    <nav className="bg-neutral-950">
      <div className="mx-auto px-2 md:px-6 lg:px-8 xl:px-10 xl:ml-20 2xl:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <span className="sr-only">Home</span>
              <img
                src={logo}
                alt="Logo-x"
                className="h-8 md:h-12 w-auto transition-transform duration-300 hover:scale-110"
                aria-label="Go to homepage via logo"
              />
            </Link>
          </div>

          {/* Links for Large Screens */}
          <div className="hidden lg:flex p-0 m-0 items-center lg:space-x-8 text-neutral-300">
            <div className="h-full w-full lg:px-3 xl:px-2">
              <ul className="flex space-x-10 xl:mr-20 font-customFont font-bold text-xl">
                {/* HOME Link with Icon */}
                <li>
                  <Link
                    to="/"
                    className={`transition-transform duration-500 ease-in-out ${isActive("/") ? "text-customOrange" : "hover:text-customOrange"}`}
                    aria-label="Home navigation link"
                  >
                    <span className="inline-flex items-center hover:scale-110">
                      <FontAwesomeIcon
                        icon={faHome}
                        className="text-md mr-2"
                      />
                      HOME
                    </span>
                  </Link>
                </li>

                {/* SHOWREEL Link with Icon */}
                <li>
                  <Link
                    to="/work"
                    className={`transition-transform duration-500 ease-in-out ${isActive("/work") ? "text-customOrange" : "hover:text-customOrange"}`}
                    aria-label="Work navigation link"
                  >
                    <span className="inline-flex items-center hover:scale-110">
                      <FontAwesomeIcon
                        icon={faClapperboard}
                        className="text-md mr-2"
                      />
                      SHOWREEL
                    </span>
                  </Link>
                </li>

                {/* RESUME Link with Icon */}
                <li>
                  <Link
                    to="/resume"
                    className={`transition-transform duration-500 ease-in-out ${isActive("/resume") ? "text-customOrange" : "hover:text-customOrange"}`}
                    aria-label="Resume navigation link"
                  >
                    <span className="inline-flex items-center hover:scale-110">
                      <FontAwesomeIcon
                        icon={faFileAlt}
                        className="text-md mr-2"
                      />
                      RESUME
                    </span>
                  </Link>
                </li>

                {/* CONTACT Link with Icon */}
                <li>
                  <Link
                    to="/contact"
                    className={`transition-transform duration-500 ease-in-out ${isActive("/contact") ? "text-customOrange" : "hover:text-customOrange"}`}
                    aria-label="Send an email"
                  >
                    <span className="inline-flex items-center m-0 p-0 text-md">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-md mr-2 align-middle"
                      />
                      CONTACT
                    </span>
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
                className="h-8 w-8  text-neutral-50 hover:text-customOrange transition-transform duration-500 ease-in-out"
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
      <div className={`overflow-hidden lg:hidden transition-all duration-700 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <ul className="font-customFont rounded-md text-md font-semibold space-y-4 pb-2 flex flex-col items-end justify-center bg-customOrange bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
          {/* HOME Link with Icon on the Right */}
          <li>
            <Link
              to="/"
              className={`block px-4 pt-3 ${isActive("/") ? "text-customOrange" : "hover:text-customOrange"}`}
              onClick={handleLinkClick}
              aria-label="Home navigation link"
            >
              <span className="inline-flex items-center hover:scale-110">
                Home
                <FontAwesomeIcon
                  icon={faHome}
                  className="text-md ml-2"
                />
              </span>
            </Link>
          </li>

          {/* SHOWREEL Link with Icon on the Right */}
          <li>
            <Link
              to="/work"
              className={`block px-4 ${isActive("/work") ? "text-customOrange" : "hover:text-customOrange"}`}
              onClick={handleLinkClick}
            >
              <span className="inline-flex items-center hover:scale-110">
                Showreel
                <FontAwesomeIcon
                  icon={faClapperboard}
                  className="text-md ml-2"
                />
              </span>
            </Link>
          </li>

          {/* RESUME Link with Icon on the Right */}
          <li>
            <Link
              to="/resume"
              className={`block px-4 ${isActive("/resume") ? "text-customOrange" : "hover:text-customOrange"}`}
              onClick={handleLinkClick}
            >
              <span className="inline-flex items-center hover:scale-110">
                Resume
                <FontAwesomeIcon
                  icon={faFileAlt}
                  className="text-md ml-2"
                />
              </span>
            </Link>
          </li>

          {/* CONTACT Link with Icon on the Right */}
          <Link
            to="/contact"
            className={`block px-4 ${isActive("/contact") ? "text-customOrange" : "hover:text-customOrange"}`}
            onClick={handleLinkClick}
          >
            <span className="inline-flex items-center hover:scale-110">
              Contact
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-md ml-2"
              />
            </span>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
