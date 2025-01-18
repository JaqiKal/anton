/**
 * AboutContact.jsx
 *
 * This component renders a responsive "Contact Me" form on the left,
 * alongside a biography and image on the right. It also includes a
 * centered download button for users to obtain the CV.
 *
 * The layout is designed for both mobile and desktop views,
 * maintaining aesthetic consistency via Tailwind CSS and CSS modules.
 *
 * Author: JaqiKal
 * Date: January 2025
 *
 */

import React, { useState } from "react";
import antonTini from "../assets/images/anton-tini.webp";
import emailjs from "emailjs-com";
import antonCv from "../assets/doc/cv-anton-skogsberg.pdf";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import SubmitButton from "./SubmitButton";
import DownloadButton from "./DownloadButton";
import styles from "./Form.module.css";

const AboutContact = () => {
  const [message, setMessage] = useState("");
  const maxMessageLength = 500;

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3g3ky6m", // Your EmailJS Service ID
        "template_6ggjajn", // Your EmailJS Template ID
        e.target, // The form element
        "NZDAkGn4zgTuc0KAl" // Your EmailJS User ID (Public Key)
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );

    e.target.reset(); // Clear the form fields after submission
    setMessage(""); // Clear the message state
  };

  return (
    <div className=" xl:ml-32  xl:mr-20 p-1 flex flex-wrap lg:flex-nowrap min-h-[80vh] items-start mt-8 xl:mt-5">
      {/* Image and Bio */}
      <div className="lg:w-1/2 flex flex-col justify-start  pr-8">
        {/* Images Section */}
        <div className="flex items-center px-4 lg:px-8">
          {/* Static Profile Image */}
          <div className="relative rounded-md bg-radial-gradient w-32 h-32 md:w-48 md:h-48 flex-shrink-0 drop-shadow-lg">
            <img
              alt="Anton Skogsberg"
              src={antonTini}
              className="w-full h-full object-cover shadow-lg rounded-lg"
            />
            {/* Transparent Overlay to Prevent Right-Click */}
            <div
              className="absolute inset-0 bg-transparent"
              onContextMenu={(e) => e.preventDefault()} // Disable right-click
            ></div>
          </div>
        </div>
        {/* Description */}
        <div className="px-4 lg:px-8 mt-4">
          <p className="text-justify text-neutral-700  leading-relaxed">Hello and welcome! I’m a 3D & 2D animator educated from The Animation Workshop in Denmark. </p>
          <p className="text-justify  text-neutral-700   leading-relaxed mt-4">
            I have always loved animation growing up, but it wasn’t until I took a leap of faith to move to another country and attempt to enroll into one of the most prestigious animation schools in the world, that I truly learnt what it takes to
            work in the field as one.
          </p>
          <p className="text-justify  text-neutral-700 leading-relaxed mt-4">
            Over the course of my studies I have worked on several large collaborative projects that were set up and treated like professional productions from day one. Thanks to this, I have sharpened my skills in a wide variety of industry standard
            tools, solutions and programs, such as Maya, Blender, Toon Boom and TVPaint. I’m always excited to pick up something new and work collaboratively with team members to solve solutions, and I’m a fast technical learner. Having worked as a
            production manager on the side, I am a stickler to schedules and deadlines myself, with my goal to always deliver on time and on quality.
          </p>
          <p className="text-justify  text-neutral-700   leading-relaxed mt-4">
            If you’d like to see more of my work or collaborate on a project, feel free to check out{" "}
            <Link
              to="/work"
              className="font-bold text-customOrange hover:text-blue-700 transition-transform duration-300"
            >
              my portfolio
            </Link>{" "}
            and get in touch. I’d love to hear from you!
          </p>
          <div className="text-justify  text-neutral-700  leading-relaxed  flex flex-col md:flex-row md:items-center md:space-x-4">
            <p className="text-justify text-neutral-700   leading-relaxed mt-4">Follow me on social media for updates on my latest projects and animations:</p>

            {/* Social Media Links */}

            <div className="flex justify-center  space-x-8 p-2 md:p-0 md:space-x-6">
              <a
                href="https://www.instagram.com/atoartworks/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Anton's Instagram profile"
                className="p-2 rounded-md bg-customOrangeBg bg-clip-padding bg-opacity-80 backdrop-filter backdrop-blur-sm shadow-lg text-customGreen hover:text-customOrange transition duration-300 hover:scale-110"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="xl"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/anton-skogsberg-35701a24b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Anton's LinkedIn profile"
                className="p-2 rounded-md bg-customOrangeBg bg-clip-padding bg-opacity-80 backdrop-filter backdrop-blur-sm shadow-lg text-customGreen hover:text-customOrangeDark transition duration-300 hover:scale-110"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="xl"
                />
              </a>
            </div>
          </div>

          {/* GitHub Link ) */}
          <div className="text-justify text-neutral-700  leading-relaxed mt-4">
            Thanks to{" "}
            <a
              href="https://github.com/JaqiKal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to app creators GitHub profile"
              className="text-customGreen font-bold hover:text-blue-700 transition-transform duration-300"
            >
              JaqiKal{" "}
            </a>
            for making this web-app possible!
          </div>

          {/* Download CV */}
          {/* Button design inspired and amended from: https://codepen.io/dhanishgajjar/pen/NgQqVj*/}
          <div className="flex justify-start space-x-4 mt-4">
            <DownloadButton
              downloadLink={antonCv}
              text="Download My CV"
              icon={true}
              ariaLabel="Download Anton's CV as a PDF document"
            />
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div
        id="contact"
        className={`w-full mt-8 lg:w-1/2 p-6 lg:p-8 mx-auto xl:mt-14 max-w-lg ${styles.formContainer}`}
      >
        <h2 className="text-2xl font-customFont mb-4 text-neutral-950 text-center lg:text-left">Contact Me</h2>
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="from_name"
              className="block text-sm font-medium text-orange-950"
            >
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              className={`mt-1 block w-full p-4 outline-none ${styles.textInput}`}
              placeholder="Your Name"
              maxLength={80}
            />
            <p className="text-sm ml-2 text-stone-700">Please enter your name.</p>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="from_email"
              className="block text-sm font-medium text-orange-950
              "
            >
              Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              required
              className={`mt-1 block w-full p-4 outline-none ${styles.textInput}`}
              placeholder="Your Email"
              maxLength={40}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <p className="text-sm ml-2 text-stone-700">Please enter a valid email address.</p>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-orange-950"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className={`mt-1 block w-full p-4 outline-none ${styles.textInput}`}
              placeholder="Your Message"
              maxLength={maxMessageLength}
              value={message}
              onChange={handleInputChange}
            ></textarea>

            {/* Character counter */}
            <div className="ml-2">
              {/* Dynamic character count */}
              <p
                className={`text-sm ${
                  message.length > maxMessageLength - 30
                    ? "text-red-800" // Red color when 20 or fewer characters are remaining
                    : " text-stone-700" // Default color
                }`}
              >
                {message.length}/{maxMessageLength}
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <SubmitButton>Send message</SubmitButton>
        </form>
      </div>
    </div>
  );
};

export default AboutContact;
