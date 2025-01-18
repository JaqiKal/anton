/**
 * Home.jsx
 *
 * This component renders a looping background video using ReactPlayer.
 *
 * The video is set to autoplay and loop infinitely while being muted to comply with
 * modern browser autoplay policies. By muting the video, we ensure it starts playing
 * automatically without requiring user interaction, eliminating the need for a fallback
 * "Play Video" button.
 *
 * Native video controls are enabled, allowing users to play, pause, and interact with the video
 * as needed.
 *
 * If autoplay issues arise due to browser-specific behaviors or user settings, consider
 * reintroducing a manual play option to enhance accessibility and user control.
 * For more information on ReactPlayer, visit: https://www.npmjs.com/package/react-player
 *
 * Author: JaqiKal
 * Date: 2025 Jan
 *
 */

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Home = () => {
  // Track whether the player should be playing
  const [isPlaying, setIsPlaying] = useState(false);
  // Track if an autoplay attempt has been made
  const [setPlayAttempted] = useState(false);

  /**
   * useEffect Hook
   *
   * - Runs once when the component mounts.
   * - Attempts to autoplay the video by setting isPlaying to true.
   * - Cleans up by setting isPlaying to false when the component unmounts.
   */
  useEffect(() => {
    setIsPlaying(true);

    return () => {
      setIsPlaying(false);
    };
  }, []);

  // Keep track of user toggling playback from the player's own controls
  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="mt-10 sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/3 shadow-lg rounded overflow-hidden">
        <ReactPlayer
          url="https://res.cloudinary.com/dsbcjtatz/video/upload/v1737213004/anton/home-loop/antonSkogsberg_LoopShowreel_v002_qsjtrw.mp4"
          playing={isPlaying} // Whether the video should play
          loop // Continuous loop
          controls // Native player controls
          width="100%" // Fill container width
          height="100%" // Fill container height
          muted // By muting the video, one comply with browser autoplay policies, allowing the video to autoplay seamlessly.
          onPlay={handlePlay} // Update state if user clicks "Play"
          onPause={handlePause} // Update state if user clicks "Pause"
          onError={() => setPlayAttempted(false)} // Handle autoplay error
        />
      </div>
    </div>
  );
};

export default Home;
