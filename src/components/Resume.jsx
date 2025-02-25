/**
 * AboutContact.jsx
 *
 * This component renders two columns:
 * - A left side featuring a resume, and a "Download My CV" button.
 * - A right side with an image, bio text, signature, and contact information.
 *
 * Author: JaqiKal
 * Date: January 2025
 *
 */

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import antonTini from "../assets/images/anton-tini.webp";
import signature from "../assets/images/signature.webp";
import antonCv from "../assets/doc/cv-anton-skogsberg.pdf";
import DownloadButton from "./DownloadButton";
import fallbackAntontini from "../assets/images/fallbackAntontini.webp";

const Resume = () => {
  return (
    <div
      className="
        flex flex-wrap
        lg:flex-nowrap
        items-start
        justify-center
        p-4
        min-h-screen
        gap-10
        md:gap-5
      "
    >
      {/* Left Column: CV Section */}
      <div
        className="
          w-full
          lg:w-1/2
          flex flex-col
          items-center
          lg:items-start
          space-y-6
          md:mt-5
       
        "
      >
        {/* CV Work Experience */}
        <div className="mx-auto px-6 text-neutral-950 bg-neutral-300 p-6 rounded-lg border-solid border-2 border-cyan-600 w-full md:w-5/6 ">
          <h2 className="text-2xl font-semibold">Work Experience</h2>

          <ul className="mt-3 space-y-6 text-neutral-800 ">
            {/* Work Experience Items */}
            <li className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-1 items-start">
              <h3 className="col-span-12 font-bold text-lg">Arcadia - Bachelor Project Animation</h3>
              <p className="col-span-12 text-md md:hidden">(Jan. 2025 - Present)</p>
              <p className="md:ml-4 col-span-12 md:col-span-8">Director, Storyboarder, Production Manager, Animator</p>
              <p className="col-span-12 md:col-span-4 text-sm text-right hidden md:block">Jan 2025 - Present</p>
            </li>
            <li className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-1 items-start">
              <h3 className="col-span-12 font-bold text-lg">Doppelgänger - Bachelor Project Animation</h3>
              <p className="col-span-12 text-md md:hidden">(Jan. 2025 - Present)</p>
              <p className="md:ml-4   md:col-span-8">Animator, Technical Animator</p>
              <p className="col-span-12 md:col-span-4 text-sm text-right hidden md:block">Jan 2025 - Present</p>
            </li>
            <li className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-1 items-start">
              <h3 className="col-span-12 font-bold text-lg">Something Soup - Animated Web Series</h3>
              <p className="col-span-12 text-md md:hidden">(2018 - Present)</p>
              <p className="md:ml-4 col-span-12 md:col-span-8">Animator, Clean-Up, Color, Production Manager</p>
              <p className="col-span-12 md:col-span-4 text-sm text-right hidden md:block">2018 - Present</p>
            </li>
            <li className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-1 items-start">
              <h3 className="col-span-12 font-bold text-lg">GLITCH Gathering - Animated Commercial</h3>
              <p className="col-span-12 text-md md:hidden">Spring 2024</p>
              <p className="md:ml-4 col-span-12 md:col-span-8">Animator, Technical Animator, Production Manager</p>
              <p className="col-span-12 md:col-span-4 text-sm  text-right hidden md:block">Spring 2024</p>
            </li>
            <li className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-1 items-start">
              <h3 className="col-span-12 font-bold text-lg">FISK! Animated Short Film Production</h3>
              <p className="col-span-12 text-md  md:hidden">Spring 2023</p>
              <p className="md:ml-4 col-span-12 md:col-span-8">Animator, Production Manager</p>
              <p className="col-span-12 md:col-span-4 text-sm text-right hidden md:block">Spring 2023</p>
            </li>
            <li className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-1 items-start">
              <h3 className="col-span-12 font-bold text-lg">La Chambre Du General - Bachelor Project Animation</h3>
              <p className="col-span-12 text-md  md:hidden">Spring 2021</p>
              <p className="md:ml-4 col-span-12 md:col-span-8">Clean-Up, Color</p>
              <p className="col-span-12 md:col-span-4 text-sm text-right hidden md:block">Spring 2021</p>
            </li>
          </ul>

          {/* CV Education */}
          <h2 className="text-2xl font-semibold text-neutral-950 mt-12">Education</h2>
          <ul className="mt-4 space-y-6 text-neutral-800 ">
            <li className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-1 items-start">
              <h3 className="col-span-12 font-bold text-lg">Bachelor in Animation - The Animation Workshop (VIA University College)</h3>
              <p className="col-span-12 text-md  md:hidden">2022 - Present</p>
              <p className="md:ml-4 col-span-12 md:col-span-8">Bachelor in Animation Education - 3.5 yr</p>
              <p className="col-span-12 md:col-span-4 text-sm  text-right hidden md:block">2022 - Present</p>
            </li>
            <li className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-1 items-start">
              <h3 className="col-span-12 font-bold text-lg">The Drawing Academy - The Animation Workshop (VIA University College)</h3>
              <p className="col-span-12 text-md  md:hidden">Fall 2015</p>
              <p className="md:ml-4 col-span-12 md:col-span-8">Classical Drawing Education Course</p>
              <p className="col-span-12 md:col-span-4 text-sm text-right hidden md:block">Fall 2015</p>
            </li>
            <li className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-1 items-start">
              <h3 className="col-span-12 font-bold text-lg">IT & Programming High School - NTI Gymnasiet Södertörn</h3>
              <p className="col-span-12 text-md  md:hidden">2012 - 2015</p>
              <p className="md:ml-4 col-span-12 md:col-span-8">Bachelor preparatory program in Mathematics, Physics & Programming</p>
              <p className="col-span-12 md:col-span-4 text-sm text-right hidden md:block">2012 - 2015</p>
            </li>
          </ul>

          {/* CV Skills */}
          <h2 className="text-2xl font-semibold text-neutral-950 mt-12">Skills</h2>
          <ul className="mt-4 space-y-6 text-neutral-800 ">
            <li className="grid grid-cols-12 gap-1 items-start">
              <h3 className="col-span-12 font-bold text-lg">3D Programs</h3>
              <p className="md:ml-4 col-span-12">Autodesk Maya, Blender, Unreal Engine</p>
            </li>
            <li className="grid grid-cols-12 gap-1 items-start">
              <h3 className="col-span-12 font-bold text-lg">2D Programs</h3>
              <p className="md:ml-4 col-span-12">TVPaint, ToonBoom Harmony, After Effects, Photoshop, Premier Pro</p>
            </li>
            <li className="grid grid-cols-12 gap-1 items-start">
              <h3 className="col-span-12 font-bold text-lg">Languages</h3>
              <p className="md:ml-4 col-span-12">Swedish (Native), English (Fluent), Danish (Fluent), French (Basic)</p>
            </li>
            <li className="grid grid-cols-12 gap-1 items-start">
              <h3 className="col-span-12 font-bold text-lg">Interests & Hobbies</h3>
              <p className="md:ml-4 col-span-12">Video Games, Baking, Fishkeeping, 80's enthusiast</p>
            </li>
          </ul>
        </div>

        {/* Download Button */}
        <div className="flex justify-center w-full">
          <DownloadButton
            downloadLink={antonCv}
            text="Download My CV"
            icon={true}
            ariaLabel="Download Anton's CV as a PDF document"
          />
        </div>
      </div>

      {/* Right Column: Bio Section */}
      <div
        className="
          w-full
          lg:w-1/2
          flex flex-col
          items-center
          lg:items-center 
          space-y-6
          md:mt-5
        "
      >
        {/* Image Section */}
        <div className="relative rounded-full border-solid border-2 border-neutral-900 bg-stone-300 w-36 h-36 md:w-48 md:h-48 flex items-center justify-center">
          <img
            alt="Anton Skogsberg"
            src={antonTini}
            className="w-full h-full object-fit  rounded-full"
            onError={(e) => (e.target.src = fallbackAntontini)} // Fallback image
          />
          {/* Transparent Overlay to Prevent Right-Click */}
          <div
            className="absolute inset-0 bg-transparent"
            onContextMenu={(e) => e.preventDefault()} // Disable right-click
          ></div>
        </div>

        {/* Bio Section */}

        <div className="md:mr-26">
          <p className="text-justify text-neutral-300 leading-relaxed  mx-4 ">Hello and welcome! I’m a 3D &amp; 2D animator educated from The Animation Workshop in Denmark.</p>
          <p className="text-justify text-neutral-300 leading-relaxed mt-4 mx-4 8">
            I have always loved animation growing up, but it wasn’t until I took a leap of faith by moving to a new country and trying to get into one of the world’s top animation schools that I truly discovered what it takes to succeed in the
            industry.
          </p>
          <p className="text-justify text-neutral-300 leading-relaxed mt-4 mx-4 8">
            Over the course of my studies, I have worked on several large collaborative projects, sharpening my skills in industry-standard tools like Maya, Blender, Toon Boom, and TVPaint. I’m always excited to pick up something new and work
            collaboratively with team members to solve problems. My experience as a production manager makes me meticulous about schedules and deadlines. My aim is to consistently deliver work on time and at a high standard.
          </p>
          <p className="text-justify text-neutral-300 leading-relaxed mt-4 mx-4 8">
            If you’d like to see more of my work or collaborate on a project, feel free to check out{" "}
            <Link
              to="/work"
              className="font-bold text-cyan-600 hover:text-customOrange transition-transform duration-300"
            >
              my portfolio
            </Link>{" "}
            and get in touch. I’d love to hear from you
            <Link to="/contact">
              <span className="inline-flex items-center hover:scale-110">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="ml-2 font-bold text-cyan-600 hover:text-customOrange transition-transform duration-300"
                />
              </span>
            </Link>
          </p>
        </div>

        {/* Signature */}
        <div className="text-center mt-20 mx-4 md:mr-28 lg:text-left">
          <p className="text-neutral-300">Kind regards,</p>
          <img
            src={signature}
            alt="Anton Skogsberg"
            className="w-60 mt-4"
          />
          <p className="text-neutral-300 py-5">Anton Skogsberg</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
