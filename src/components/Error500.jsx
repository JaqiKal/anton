/**
 * Error500.jsx
 *
 * This component renders a custom 500 Internal Server Error page.
 *
 * It features a static SVG background fixed to the bottom of the viewport to enhance visual appeal
 * and provides users with options to refresh the page, contact support, or return to the homepage.
 *
 * The SVG background was created with https://svgwave.in/ to provide a visually engaging experience.
 *
 * Author: JaqiKal
 * Date: January 2025
 *
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowsRotate, faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import blackWaves from "../assets/images/blackWaves.png";
import Navbar from "./Navbar";

function Error500() {
  return (
    <div className="relative h-screen bg-cyan-800 overflow-hidden">
      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>
      {/* Logo */}
      <div className="absolute top-1 left-4 z-30 p-0">
        <Link to="/">
          <span className="sr-only">Home</span>
          <img
            src={logo}
            alt="Logo"
            className="h-8 md:h-12 w-auto transition-transform duration-300 hover:scale-110"
            aria-label="Go to homepage via logo"
          />
        </Link>
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

      {/* Text */}
      {/* Content Container */}
      <div className="flex items-center justify-center h-screen">
        <div className="relative z-20 p-4 sm:p-6 md:p-8 text-neutral-800 bg-radial-gradient-custom rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 mb-10 mx-4 sm:mx-8 lg:mx-16 xl:mx-32 max-w-2xl">
          <h2 className="font-customFont text-center text-3xl leading-tight">Well, this is embarrassing...</h2>

          <p className="text-center font-semibold  mt-4 leading-relaxed">Sorry, this is not working properly. We know about this mistake and are working to fix it.</p>

          <p className="text-left  mt-6 leading-relaxed">In the meantime, here is what you can do:</p>

          {/* List */}
          <ul className="text-left font-normal mt-4 space-y-4">
            {/* Refresh Page Option */}
            <li className="flex items-start space-x-2">
              <FontAwesomeIcon
                icon={faArrowsRotate}
                className="text-cyan-700 mt-1 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-neutral-800">Refresh the page; it may help to get unstuck. If not, please...</span>
            </li>

            {/* Contact Support Option */}
            <li className="flex items-start space-x-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-cyan-700 mt-1 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-neutral-8700">
                Send us an email at{" "}
                <a
                  href="mailto:ato.artworks@gmail.com"
                  className="text-blue-800 hover:underline"
                >
                  ato.artworks@gmail.com
                </a>{" "}
                and tell us what happened.
              </span>
            </li>

            {/* Return to Homepage Option */}
            <li className="flex items-start space-x-2">
              <FontAwesomeIcon
                icon={faHouse}
                className="text-cyan-700 mt-1 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-neutral-8700">
                <a
                  href="https://jaqikal.github.io/anton/"
                  className="text-blue-800 hover:underline"
                >
                  Return to the homepage
                </a>{" "}
                to start over.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Error500;
