// src/components/Error403.jsx

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Error403() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customWhite relative">
      {/* SVG Background */}
      <svg
        className="absolute w-full h-full top-0 left-0 z-0"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* SVG Pattern */}
        <rect
          width="800"
          height="600"
          fill="#f9f5eb"
        />
        <defs>
          <radialGradient
            id="circleGradient"
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop
              offset="0%"
              stopColor="#ede0c0"
            />
            <stop
              offset="100%"
              stopColor="#f57356" // 70% saturation of CustomOrange
            />
          </radialGradient>
        </defs>

        <circle
          cx="400"
          cy="300"
          r="200"
          fill="url(#circleGradient)"
        />
      </svg>

      {/* Content Container */}
      <div className="relative z-20 p-8 max-w-md text-center rounded-md bg-customOrangeBg bg-clip-padding bg-opacity-90 backdrop-filter backdrop-blur-sm shadow-lg">
        <h1 className="text-6xl font-bold text-customGreen">403</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">Forbidden Access</h2>
        <p className="mt-2 text-gray-600">You don't have permission to access this resource.</p>

        {/* Helpful Links */}
        <div className="mt-6 flex flex-col space-y-4">
          <Link
            to="/"
            className="flex items-center justify-center px-4 py-2 bg-customGreen text-white rounded-md hover:bg-green-700 transition"
          >
            <FontAwesomeIcon
              icon={faHome}
              className="mr-2"
            />
            Return to Homepage
          </Link>
          <Link
            to="/about"
            className="flex items-center justify-center px-4 py-2 bg-customOrange text-white rounded-md hover:bg-orange-600 transition"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mr-2"
            />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error403;
