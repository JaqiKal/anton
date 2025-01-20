/**
 * AboutContact.jsx
 *
 * This component renders two columns:
 * - A left side featuring an <h1> "Resume" header, a preview image, and a
 *   "Download My CV" button.
 * - A right side with an image, bio text, signature, and acknowledgements.
 *
 * Author: JaqiKal
 * Date: January 2025
 *
 */

import React from "react";
import { Link } from "react-router-dom";
import antonTini from "../assets/images/anton-tini2.webp";
import signature from "../assets/images/signature.webp";
import antonCv from "../assets/doc/cv-anton-skogsberg.pdf";
import antonCvImg from "../assets/images/cv-anton-skogsberg.webp";
import DownloadButton from "./DownloadButton";

const AboutContact = () => {
  return (
    <div
      className="
        flex flex-wrap
        lg:flex-nowrap
        items-center
        lg:items-start
        justify-center
        xl:ml-32 xl:mr-20
        p-1
        min-h-[80vh]
      "
    >
      {/*  Resume Image + Download Button */}
      <div
        className="
          w-full
          lg:w-1/2
          mx-auto
          flex flex-col
          items-center
          pl-0
          lg:pl-8
        "
      >
        {/* H1 Header for Resume (sr-only) */}
        <h1 className="text-3xl text-center text-neutral-50 font-bold hidden sr-only">Resume</h1>

        {/* CV Image */}
        <div className="w-full md:w-11/12 lg:w-full xl:w-5/6 file:flex justify-center mt-4">
          <img
            src={antonCvImg}
            alt="Anton Skogsberg's resume"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Download Button */}
        <div className="w-full flex justify-center mt-4">
          <DownloadButton
            downloadLink={antonCv}
            text="Download My CV"
            icon={true}
            ariaLabel="Download Anton's CV as a PDF document"
          />
        </div>
      </div>

      {/* Image & Bio */}
      <div
        className="
          w-full
          lg:w-1/2
          flex flex-col
          items-center
          lg:items-start
          justify-start
          py-14
          px-4
          lg:px-8
          lg:pr-8
        "
      >
        {/* Images Section */}
        <div className="w-full flex justify-center">
          <div className="relative rounded-full bg-stone-300 w-32 h-32 md:w-48 md:h-48 flex-shrink-0 drop-shadow-lg">
            <img
              alt="Anton Skogsberg"
              src={antonTini}
              className="w-full h-full object-cover shadow-lg rounded-full" /* Ensure fully rounded image */
            />
            {/* Transparent Overlay to Prevent Right-Click */}
            <div
              className="absolute inset-0 bg-transparent"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-4">
          <p className="text-justify text-neutral-50 leading-relaxed">Hello and welcome! I’m a 3D &amp; 2D animator educated from The Animation Workshop in Denmark.</p>
          <p className="text-justify text-neutral-50 leading-relaxed mt-4">
            I have always loved animation growing up, but it wasn’t until I took a leap of faith by moving to a new country and trying to get into one of the world’s top animation schools that I truly discovered what it takes to succeed in the
            industry.
          </p>
          <p className="text-justify text-neutral-50 leading-relaxed mt-4">
            Over the course of my studies, I have worked on several large collaborative projects, sharpening my skills in industry-standard tools like Maya, Blender, Toon Boom, and TVPaint. I’m always excited to pick up something new and work
            collaboratively with team members to solve problems. I pick up technical skills quickly, and my experience as a production manager makes me meticulous about schedules and deadlines. My aim is to consistently deliver work on time and at a
            high standard.
          </p>
          <p className="text-justify text-neutral-50 leading-relaxed mt-4">
            If you’d like to see more of my work or collaborate on a project, feel free to check out{" "}
            <Link
              to="/work"
              className="font-bold text-customOrange hover:text-cyan-600 transition-transform duration-300"
            >
              my portfolio
            </Link>{" "}
            and get in touch. I’d love to hear from you!
          </p>

          <p className="text-justify text-neutral-50 leading-relaxed mt-4">Kind regards,</p>
          <div className="flex justify-start">
            <img
              src={signature}
              alt="Anton Skogsberg"
              className="w-80 h-auto mt-4"
            />
          </div>
          <div className="text-justify text-neutral-50 leading-relaxed mt-4">Anton Skogsberg</div>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
