/**
 * Error404.jsx
 *
 * This component renders a custom 404 Not Found Error page.
 *
 * It features a static SVG background fixed to the bottom of the viewport to enhance visual appeal
 * and provides users with options to return to the homepage or contact support for assistance.
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
import blackWaves from "../assets/images/blackWaves.png";

function Error404() {
  return (
    <div className="relative h-screen bg-cyan-800 overflow-hidden">
      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>
      {/* Background */}
      <div
        style={{
          backgroundImage: `url(${blackWaves})`,
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
      <div className="flex items-center justify-center h-screen">
        <div className="relative z-10 p-8 max-w-md text-center rounded-3xl bg-radial-gradient-customErrpage bg-opacity-90 backdrop-filter backdrop-blur-sm shadow-lg">
          <h1 className="text-6xl font-bold text-neutral-800">404</h1>
          <h2 className="mt-4 text-2xl font-semibold text-neutral-800">Page Not Found</h2>
          <p className="mt-2 text-neutral-700">Oops! The page you're looking for doesn't exist.</p>

          {/* Helpful Links */}
          <div className="mt-6 flex flex-col space-y-4">
            <Link
              to="/"
              className="flex items-center justify-center px-4 py-2 bg-cyan-600 text-neutral-200 rounded-md hover:bg-cyan-700 transition"
            >
              <FontAwesomeIcon
                icon={faHome}
                className="mr-2"
              />
              Return to Homepage
            </Link>
            <a
              href="mailto:ato.artworks@gmail.com"
              className="flex items-center justify-center px-4 py-2 bg-customOrange text-neutral-200 rounded-md hover:bg-orange-600 transition"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2"
              />
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error404;
