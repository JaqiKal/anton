import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Email Icon
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; // Social Media Icons

const Footer = () => {
  return (
    <footer className="text-center p-1 mt-6">
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
            className="w-5 h-5"
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
            className="w-5 h-5"
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
            className="w-5 h-5"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
