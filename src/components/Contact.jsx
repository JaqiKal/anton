import React, { useState } from "react";
import emailjs from "emailjs-com";
import SubmitButton from "./SubmitButton";
import wolfAnton from "../assets/images/wolf-anton.webp";
// import SubmitButton from "./SubmitButton";

function Contact() {
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
    <div className="bg-neutral-900 py-10 px-6 lg:px-16 flex flex-col items-center">
      {/* Screen Reader Only H1 */}
      <h1 className="sr-only">Contact Page</h1>
      <div className="w-full max-w-5xl flex flex-col lg:flex-row lg:items-start lg:justify-between">
        {/* Right Section: Image (Stacks on top for smaller devices) */}
        <div className="w-full lg:w-1/2 h-auto lg:h-full relative">
          <img
            src={wolfAnton}
            alt="Cartoon wolf playing a guitar in rock 'n' roll style, drawn by Anton Skogsberg."
            className="w-full h-auto lg:h-full object-cover rounded-lg"
          />
          {/* Transparent Overlay to Prevent Right-Click */}
          <div
            className="absolute inset-0 bg-transparent"
            onContextMenu={(e) => e.preventDefault()} // Disable right-click
          ></div>
        </div>

        {/* Left Section: Form */}
        <div className="w-full lg:w-1/2 h-full bg-neutral-800 rounded-lg p-8 flex flex-col justify-between">
          <h2 className="text-3xl font-bold text-cyan-600 mb-6 text-center">Contact Me</h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 flex flex-col justify-between"
          >
            {/* Full Name Field */}
            <div>
              <label
                htmlFor="from_name"
                className="block text-sm font-medium text-neutral-300"
              >
                Full Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                className="mt-2 w-full p-3 bg-gray-700 text-neutral-300 rounded-lg focus:ring focus:ring-cyan-500 focus:outline-none"
                placeholder="Your Full Name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="from_email"
                className="block text-sm font-medium text-neutral-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                className="mt-2 w-full p-3 bg-gray-700 text-neutral-300 rounded-lg focus:ring focus:ring-cyan-500 focus:outline-none"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={message}
                onChange={handleInputChange}
                maxLength={maxMessageLength}
                className="mt-2 w-full p-3 bg-gray-700 text-neutral-300 rounded-lg focus:ring focus:ring-cyan-500 focus:outline-none"
                placeholder="Your Message"
                required
              ></textarea>
              {/* Character Counter */}
              <div className="ml-2">
                <p
                  className={`text-sm ${
                    message.length > maxMessageLength - 30
                      ? "text-red-800" // Red color when 20 or fewer characters are remaining
                      : " text-cyan-400" // Default color
                  }`}
                >
                  {message.length}/{maxMessageLength}
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <SubmitButton>Send Message</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
