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
import image3DThumbnail from "../assets/images/3DThumbnail_v001.webp";

const Home = () => {
  const video = {
    vimeoEmbedSrc: "https://player.vimeo.com/video/1046889324?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&autoplay=1&loop=1&muted=1&controls=0",
    title: "Anton Skogsberg - Short Loop Animation Showreel",
    borderColor: "#0a0a0a",
    description: "", // No description needed for Home
    imageUrl: image3DThumbnail,
  };

  return (
    <div className="w-full flex items-center justify-center h-[80dvh]">
      <div className="w-full max-w-7xl max-h-full mt-16 aspect-video mx-1 md:mx-2">
        <VideoCard
          video={video}
          showDescription={false} // Hide the description
        />
      </div>
    </div>
  );
};

export default Home;
