import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Email Icon
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; // Social Media Icons

const Footer = () => {
  return (
    <footer className="pb-5 xs:pb-1 xs:pt-3  sm:pb-7 lg:pb-2 2xl:pb-5 bg-neutral-900 w-full">
      <div
        className="
        relative
        w-full
        max-w-screen-2xl
        mx-auto
        px-4
        flex
        flex-col
        items-center
        /* Stays stacked until lg (1024px), then row */
        lg:flex-row
        lg:justify-center
        lg:items-center
        h-auto
      "
      >
        {/* Social Media Icons (Always Centered) */}
        <div className="flex space-x-6 lg:space-x-12 sm:mb-0">
          {/* Email Icon */}
          <a
            href="mailto:atoartworks@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 hover:text-customOrange transition-transform duration-300 hover:scale-110"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-6 h-6"
            />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/atoartworks/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 hover:text-customOrange transition-transform duration-300 hover:scale-110"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-6 h-6"
            />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/anton-skogsberg-35701a24b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 hover:text-customOrange transition-transform duration-300 hover:scale-110"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="w-6 h-6"
            />
          </a>
        </div>

        {/* © 2025 Website by JaqiKal */}
        <div
          className="
      
            text-xs
            text-neutral-50
            flex items-center
            relative
            lg:absolute
            lg:right-4
            lg:top-1/2
            lg:-translate-y-1/2
          "
        >
          <a
            href="https://github.com/JaqiKal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to app creators GitHub profile"
            className="
              text-cyan-600
              font-bold
              hover:text-customOrange
              transition-transform
              duration-300
              text-xs
              xs:text-customXxs
              xs:mb-1
              sm:text-customXxs
              
            "
          >
            &copy; 2025 Website by JaqiKal
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
