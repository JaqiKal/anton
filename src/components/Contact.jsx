import React, { useState } from "react";
import emailjs from "emailjs-com";
import SubmitButton from "./SubmitButton";
import neptunAnton from "../assets/images/neptunAnton.webp";
import fallbackNeptun from "../assets/images/fallbackNeptun.webp";

function Contact() {
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({}); // To track errors in the form
  const [successMessage, setSuccessMessage] = useState(""); // To display success message
  const [failureMessage, setFailureMessage] = useState(""); // To display failure message
  const maxMessageLength = 500;

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store environment variables in constants before calling emailjs.sendForm()
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Log them to check if they exist
    console.log("Service ID:", serviceID);
    console.log("Template ID:", templateID);
    console.log("Public Key:", publicKey);

    // Check if environment variables are missing
    if (!serviceID || !templateID || !publicKey) {
      console.error("❌ Missing EmailJS environment variables. Make sure .env.local is correctly set.");
      setFailureMessage("Error: Email service is not configured properly.");
      return;
    }

    // Clear previous errors
    setFormErrors({});
    setSuccessMessage("");
    setFailureMessage("");

    // Input validation check if any of the fields are empty
    const errors = {};
    if (!message.trim()) errors.message = "Message is required.";
    if (!e.target.from_name.value) errors.from_name = "Name is required.";
    if (!e.target.from_email.value) errors.from_email = "Email is required.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors); // Set errors if any field is missing

      return;
    }

    // Send email using EmailJS
    emailjs.sendForm(serviceID, templateID, e.target, publicKey).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        setSuccessMessage("Email was sent successfully!"); // Set custom success message
        setTimeout(() => setSuccessMessage(""), 5000); // Hide success message after 5 seconds
      },
      (error) => {
        console.error("Error sending email:", error.text);
        setFailureMessage("Failed to send email. Please try again later."); // Set custom failure message
        setTimeout(() => setFailureMessage(""), 5000); // Hide failure message after 5 seconds
      }
    );

    e.target.reset(); // Clear the form fields after submission
    setMessage(""); // Clear the message state
  };

  return (
    <div className="bg-neutral-900 py-10 md:pt-20 px-6 lg:px-16 flex flex-col items-center">
      {/* Screen Reader Only H1 */}
      <h1 className="sr-only">Contact Page</h1>
      <div className="bg-linear-gradient-customBlue rounded-lg w-full max-w-5xl flex flex-col lg:flex-row lg:items-stretch lg:justify-between">
        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 h-auto xs:h-[180px] sm:h-[220px] iphone12:h-[250px] ipadpro:h-[280px] mediumOne:h-[500px] mediumTwo:h-[500px] md:h-[400px] lg:h-[450px] xl:h-[500px] relative flex items-center justify-center pt-8 lg:pt-12">
          <img
            src={neptunAnton}
            alt="Merman diving, drawn by Anton Skogsberg."
            className="object-contain max-h-full max-w-full rounded-lg"
            onError={(e) => (e.target.src = fallbackNeptun)} // Fallback image
          />
          {/* Transparent Overlay to Prevent Right-Click */}
          <div
            className="absolute inset-0 bg-transparent"
            onContextMenu={(e) => e.preventDefault()} // Disable right-click
          ></div>
        </div>

        {/* Left Section: Form */}
        <div className="w-full lg:w-1/2 bg-neutral-800 rounded-lg p-10 lg:p-12 flex flex-col justify-between">
          <h2 className="text-3xl font-bold xs:pb-6  text-cyan-600 text-center">Contact Me</h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-3 lg:space-y-6 flex flex-col "
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
              />
              {formErrors.from_name && <p className="text-red-700 text-sm mt-2 ml-2">{formErrors.from_name}</p>}
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
              />
              {formErrors.from_email && <p className="text-red-700 text-sm mt-2 ml-2">{formErrors.from_email}</p>}
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
                className="mt-2 w-full p-3 lg:p-2 bg-gray-700 text-neutral-300 rounded-lg focus:ring focus:ring-cyan-500 focus:outline-none"
                placeholder="Hi Anton! I really enjoy your work! I’d love to connect and discuss a project or opportunity."
              ></textarea>

              {/* Error and Character Counter in the Same Row */}
              <div className="flex xxs:flex-col xxs:flex-row justify-between items-start xxs:items-start">
                {/* Error Message */}
                {formErrors.message && <p className="text-red-700 text-sm ml-2">{formErrors.message}</p>}

                {/* Character Counter */}
                <div className="ml-2 xxs:ml-0">
                  <p
                    className={`text-sm  mr-2 xxs:ml-2 ${
                      message.length > maxMessageLength - 30
                        ? "text-red-800" // Red color when < 20 characters are remaining
                        : " text-cyan-400"
                    }`}
                  >
                    {message.length}/{maxMessageLength}
                  </p>
                </div>
              </div>
            </div>
            {/* Submit Button */}
            <SubmitButton>Send Message</SubmitButton>
          </form>

          {/* Success message */}
          {successMessage && (
            <div className="text-green-600 text-center mt-4">
              <p>{successMessage}</p>
            </div>
          )}
          {/* Failure message */}
          {failureMessage && (
            <div className="text-red-700 text-center mt-4">
              <p>{failureMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
