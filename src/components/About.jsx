import React from "react";
import antonTini from "../assets/images/anton-tini.webp";
import emailjs from "emailjs-com";
import antonCv from "../assets/doc/cv-anton-skogsberg.pdf";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import SubmitButton from "./SubmitButton";
import DownloadButton from "./DownloadButton";

const AboutContact = () => {
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
  };

  return (
    <div className="bg-gradient-to-r from-gray-200 via-slate-400 to-gray-500 p-6 flex flex-wrap lg:flex-nowrap min-h-screen md:mt-10 lg:mt-10 2xl:mt-10 items-start">
      {/* Image and Bio */}
      <div className="lg:w-1/2 flex flex-col justify-start pr-8">
        {/* Images Section */}
        <div className="flex items-center px-4 lg:px-8">
          {/* Static Image */}
          <div className="relative rounded-lg bg-gradient-to-r from-gray-400 via-blue-900 to-gray-500 group w-32 h-32 md:w-48 md:h-48 flex-shrink-0 drop-shadow-lg">
            <img
              alt="Anton Skogsberg"
              src={antonTini}
              className="w-full h-full object-cover shadow-lg rounded-lg"
            />
          </div>
        </div>

        {/* Description */}
        <div className="px-4 lg:px-8 mt-8">
          <p className="text-justify text-slate-750 leading-relaxed">
            I’m a character animator, soon to graduate from The Animation Workshop in Denmark. One of Europe’s top schools for animation and visual arts. I love creating characters that feel alive, tell meaningful stories through movement, and leave
            a lasting impression.
          </p>
          <p className="text-justify text-slate-750 leading-relaxed mt-6">
            Over the course of my studies, I’ve specialized in 3D character animation, while working on collaborative projects that have sharpened my skills in storytelling, teamwork, and using industry-standard tools such as Maya, Blender, Toon
            Boom, Unreal Engine, and After Effects. I’m always excited to explore new approaches to animation and push creative boundaries to bring engaging characters to life.
          </p>
          <p className="text-justify text-slate-750 leading-relaxed mt-6">
            If you’d like to see more of my work or collaborate on a project, feel free to check out{" "}
            <Link
              to="/work"
              className="text-blue-900 hover:text-blue-700 transition-transform duration-300"
            >
              my portfolio
            </Link>{" "}
            and get in touch. I’d love to hear from you!
          </p>
          <div className="text-justify text-slate-750 leading-relaxed mt-6 flex flex-col md:flex-row md:items-center md:space-x-4">
            <p className="mb-2 md:mb-0">Follow me on social media for updates on my latest projects and animations:</p>
            {/* Social Media Links */}

            <div className="flex justify-center space-x-10 p-4 md:p-0 md:space-x-6 rounded-xl bg-fuchsia-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg md:bg-transparent md:shadow-none">
              <a
                href="https://www.instagram.com/atoartworks/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-customPurpleDark hover:text-fuchsia-800 transition duration-300 hover:scale-110"
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
                className="text-customPurpleDark hover:text-fuchsia-800 transition duration-300 hover:scale-110"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="xl"
                />
              </a>
            </div>
          </div>

          {/* Download CV */}
          {/* Button design inspired and amended from: https://codepen.io/dhanishgajjar/pen/NgQqVj*/}
          <div className="flex justify-center space-x-4 mt-8 mb-10 md:mb-2">
            <DownloadButton
              downloadLink={antonCv}
              text="Download My CV"
              icon={true}
            />
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div
        id="contact"
        className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6 lg:p-8 md:mt-24 lg:mt-24 mx-auto max-w-lg"
      >
        <h2 className="text-2xl font-customFont mb-4 text-slate-750 text-center lg:text-left">Contact Me</h2>
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="from_name"
              className="block text-sm font-medium text-slate-750"
            >
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              className="mt-1 block w-full rounded-xl bg-gray-200 p-4 outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition duration-300"
              placeholder="Your Name"
              maxLength={80}
            />
            <p className="text-sm ml-2 text-gray-500">Please enter your name.</p>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="from_email"
              className="block text-sm font-medium text-slate-750"
            >
              Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              required
              className="mt-1 block w-full rounded-xl bg-gray-200 p-4 outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition duration-300"
              placeholder="Your Email"
              maxLength={40}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <p className="text-sm ml-2 text-gray-500">Please enter a valid email address.</p>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-750"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 block w-full rounded-xl bg-gray-200 p-4 outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition duration-300"
              placeholder="Your Message"
              maxLength={500}
            ></textarea>
            <p className="text-sm ml-2 text-gray-500">Please limit your message to 500 characters.</p>
          </div>

          {/* Submit Button */}
          {/* Button design inspired and amended from: https://codepen.io/astitva2009/pen/ExQeNxb*/}
          <SubmitButton>Submit</SubmitButton>
        </form>
      </div>
    </div>
  );
};

export default AboutContact;
