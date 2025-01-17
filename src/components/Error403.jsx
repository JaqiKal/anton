/**
 * Error403.jsx
 *
 * This component renders a custom 403 Forbidden Error page.
 *
 * It features a static SVG background fixed to the bottom of the viewport to enhance visual appeal
 * and provides users with options to check their permissions, contact support, or return to the homepage.
 *
 * https://svgwave.in/ was used to generate the SVG background.
 *
 * Author: JaqiKal
 * Date: January 2025
 *
 */

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import waves from "../assets/images/error-waves.png";

function Error403() {
  return (
    <div className="relative min-h-screen bg-customWhite">
      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>
      {/* Background */}
      <div
        style={{
          backgroundImage: `url(${waves})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute", // Cover the whole viewport
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 10, // Behind the content and navbar
        }}
        aria-hidden="true" // Decorative background, not accessible
      ></div>
      {/* Content Container */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative z-10 p-8 max-w-md text-center rounded-3xl bg-radial-gradient-custom bg-opacity-90 backdrop-filter backdrop-blur-sm shadow-lg">
          <h1 className="text-6xl font-bold text-customGreen">403</h1>
          <h2 className="mt-4 text-2xl font-semibold text-neutral-800">Access Denied</h2>
          <p className="mt-2 text-neutral-700">Sorry, you don’t have permission to access this page.</p>

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
    </div>
  );
}

export default Error403;
