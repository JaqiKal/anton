import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Home = () => {
  // Track whether the player should be playing
  const [isPlaying, setIsPlaying] = useState(false);

  // On mount => auto-play, on unmount => pause
  useEffect(() => {
    setIsPlaying(true); // Auto-play when the component mounts
    return () => {
      setIsPlaying(false); // Pause/stop when unmounting
    };
  }, []);

  // Keep track of user toggling playback from the player's own controls
  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="mt-10 sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/3 shadow-lg rounded overflow-hidden">
        <ReactPlayer
          url="https://res.cloudinary.com/dsbcjtatz/video/upload/v1735807083/anton/3D/antonSkogsberg_3DShowreel_v006_lcpenm.mp4"
          playing={isPlaying} // Whether the video should play
          loop // Continuous loop
          controls // Native player controls
          width="100%" // Fill container width
          height="100%" // Fill container height
          onPlay={handlePlay} // Update state if user clicks "Play"
          onPause={handlePause} // Update state if user clicks "Pause"
          // muted // uncomment if you want it muted by default
        />
      </div>
    </div>
  );
};

export default Home;
