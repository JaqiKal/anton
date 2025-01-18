/**
 * Home.jsx
 *
 * This component renders the homepage of the application, showcasing
 * a looping background video using the reusable VideoCard component.
 *
 * The video is set to autoplay and loop infinitely while being muted
 * to comply with modern browser autoplay policies. By muting the video,
 * it starts playing automatically without requiring user interaction.
 *
 * The VideoCard component ensures consistent styling and functionality
 * with the video cards used in the Gallery component.
 *
 * Props such as autoplay, loop, and muted are passed to the VideoCard
 * to customize its behavior for this specific use case.
 *
 * Author: JaqiKal
 * Date: January 2025
 *
 */

import React from "react";
import VideoCard from "../components/VideoCard";

const Home = () => {
  const video = {
    vimeoEmbedSrc: "https://player.vimeo.com/video/1046889324?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&autoplay=1&loop=1&muted=1",
    title: "Anton Skogsberg - Short Loop Animation Showreel",
    borderColor: "#0a0a0a",
    description: "", // No description needed for Home
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="video-wrapper mt-10 sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/3 shadow-lg rounded overflow-hidden">
        <VideoCard
          video={video}
          autoplay
          loop
          muted
          showDescription={false}
        />
      </div>
    </div>
  );
};

export default Home;
