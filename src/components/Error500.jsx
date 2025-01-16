import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowsRotate, faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logoGreen from "../assets/images/logo-green.webp";

function Error500() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relativee">
      {/* Logo */}
      <div className="absolute top-1 left-4 z-30 p-0">
        <Link to="/">
          <span className="sr-only">Home</span>
          <img
            src={logoGreen}
            alt="Logo"
            className="h-20 md:h-28 lg:h-28 xl:h-28 2xl:h-32 w-auto transition-transform duration-300 hover:scale-110"
            aria-label="Go to homepage via logo"
          />
        </Link>
      </div>

      {/* SVG Background */}
      <svg
        className="absolute w-full h-full top-0 left-0 z-0"
        viewBox="0 0 742.72 742.72"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <rect
          x="0"
          y="0"
          width="742.72"
          height="742.72"
          fill="#17471E"
        />
        <path
          d="M 0 -74.272 L 0 -74.27 L 50.00 -37.14 L 148.544 -74.27 L 198.06 -33.27 L 297.088 -74.27 L 346.60 -15.27 L 445.632 -74.27 L 535.63 -37.14 L 594.176 -74.27 L 701.18 -37.14 L 742.72 -74.27 L 812.72 -22.27 L 891.264 -74.27 V 742.72 H 0 V -74.27 Z"
          fill="#C42D0B"
        />
        <path
          d="M 0 0 L 0 0.00 L 75.00 37.14 L 148.544 0.00 L 204.54 37.14 L 297.088 0.00 L 346.60 51.00 L 445.632 0.00 L 550.63 37.14 L 594.176 0.00 L 689.18 70.00 L 742.72 0.00 L 792.23 37.14 L 891.264 0.00 V 742.72 H 0 V 0.00 Z"
          fill="#B52F0C"
        />
        <path
          d="M 0 74.272 L 0 74.27 L 49.51 111.41 L 148.544 74.27 L 198.06 111.41 L 297.088 74.27 L 353.09 124.27 L 445.632 74.27 L 498.63 112.27 L 594.176 74.27 L 643.69 111.41 L 742.72 74.27 L 836.72 116.27 L 891.264 74.27 V 742.72 H 0 V 74.27 Z"
          fill="#A6310D"
        />
        <path
          d="M 0 148.544 L 0 148.54 L 49.51 194.54 L 148.544 148.54 L 198.06 185.68 L 297.088 148.54 L 346.60 185.68 L 445.632 148.54 L 501.63 207.54 L 594.176 148.54 L 685.18 185.68 L 742.72 148.54 L 797.72 185.68 L 891.264 148.54 V 742.72 H 0 V 148.54 Z"
          fill="#97330E"
        />
        <path
          d="M 0 222.816 L 0 222.82 L 49.51 287.82 L 148.544 222.82 L 254.54 259.95 L 297.088 222.82 L 346.60 259.95 L 445.632 222.82 L 495.15 272.82 L 594.176 222.82 L 691.18 259.95 L 742.72 222.82 L 792.23 270.82 L 891.264 222.82 V 742.72 H 0 V 222.82 Z"
          fill="#88350F"
        />
        <path
          d="M 0 297.088 L 0 297.09 L 49.51 364.09 L 148.544 297.09 L 198.06 334.22 L 297.088 297.09 L 346.60 334.22 L 445.632 297.09 L 495.15 334.22 L 594.176 297.09 L 643.69 334.22 L 742.72 297.09 L 846.72 334.22 L 891.264 297.09 V 742.72 H 0 V 297.09 Z"
          fill="#793710"
        />
        <path
          d="M 0 371.36 L 0 371.36 L 95.00 432.36 L 148.544 371.36 L 198.06 408.50 L 297.088 371.36 L 346.60 408.50 L 445.632 371.36 L 495.15 408.50 L 594.176 371.36 L 647.18 408.50 L 742.72 371.36 L 792.23 408.50 L 891.264 371.36 V 742.72 H 0 V 371.36 Z"
          fill="#6A3911"
        />
        <path
          d="M 0 445.632 L 0 445.63 L 49.51 498.63 L 148.544 445.63 L 225.54 495.63 L 297.088 445.63 L 404.09 482.77 L 445.632 445.63 L 535.63 494.63 L 594.176 445.63 L 689.18 483.63 L 742.72 445.63 L 824.72 517.63 L 891.264 445.63 V 742.72 H 0 V 445.63 Z"
          fill="#5B3B12"
        />
        <path
          d="M 0 519.904 L 0 519.90 L 49.51 567.90 L 148.544 519.90 L 214.54 557.04 L 297.088 519.90 L 403.09 586.90 L 445.632 519.90 L 507.63 559.90 L 594.176 519.90 L 669.18 572.90 L 742.72 519.90 L 818.72 570.90 L 891.264 519.90 V 742.72 H 0 V 519.90 Z"
          fill="#4C3D13"
        />
        <path
          d="M 0 594.176 L 0 594.18 L 63.00 664.18 L 148.544 594.18 L 206.54 631.31 L 297.088 594.18 L 398.09 631.31 L 445.632 594.18 L 548.63 631.31 L 594.176 594.18 L 653.18 631.31 L 742.72 594.18 L 806.72 657.18 L 891.264 594.18 V 742.72 H 0 V 594.18 Z"
          fill="#3D3F14"
        />
        <path
          d="M 0 668.448 L 0 668.45 L 63.00 705.58 L 148.544 668.45 L 205.54 720.45 L 297.088 668.45 L 349.09 708.45 L 445.632 668.45 L 501.63 705.58 L 594.176 668.45 L 643.69 731.45 L 742.72 668.45 L 792.23 740.45 L 891.264 668.45 V 742.72 H 0 V 668.45 Z"
          fill="#2E4115"
        />
      </svg>

      {/* Text */}
      <div className="relative  z-20 p-6 text-customWhite  bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
        <h2 className="font-customFont text-center text-3xl">Well, this is embarrassing...</h2>

        <p className="text-center text-base  mt-4">Sorry, this is not working properly. We know about this mistake and are working to fix it.</p>

        <p className="text-left text-sm mt-6">In the meantime, here is what you can do:</p>

        <ul className="text-left text-sm font-normal mt-4 space-y-1 ml-4">
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faArrowsRotate}
              className="mr-2 text-customGreen"
            />
            Refresh the page, it may help to get unstuck, if not then, please...
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mr-2 text-customGreen"
            />
            Send us an email at
            <a
              href="mailto:ato.artworks@gmail.com"
              className="text-blue-800 hover:underline ml-1 mr-1"
            >
              ato.artworks@gmail.com
            </a>
            and tell us what happened.
          </li>
          <Link className="flex items-center">
            <FontAwesomeIcon
              icon={faHouse}
              className="mr-2 text-customGreen"
            />
            <Link
              to="/"
              className="text-blue-800 hover:underline mr-1"
            >
              Return to the homepage
            </Link>
            to start over
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Error500;
