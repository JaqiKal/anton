import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Email Icon
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; // Social Media Icons

const Footer = () => {
  return (
    <footer className="text-customDutchWhite text-center text-xs mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14">
      {/* Social Media Section */}
      <div className="flex justify-center items-center space-x-6 lg:space-x-12">
        {/* Email Icon */}
        <a
          href="mailto:atoartworks@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-customGreen hover:text-customOrange transition duration-300"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="w-6 h-6 lg:w-10 lg:h-10"
          />
        </a>

        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/atoartworks/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-customGreen hover:text-customOrange transition duration-300"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="w-6 h-6 lg:w-10 lg:h-10"
          />
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/anton-skogsberg-35701a24b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-customGreen hover:text-customOrange transition duration-300"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="w-6 h-6 lg:w-10 lg:h-10"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
