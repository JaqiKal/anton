import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  const videoRef = useRef(null);
  // const navigate = useNavigate();

  useEffect(() => {
    const videoElement = videoRef.current;

    // Play video when component mounts
    if (videoElement && videoElement.readyState >= 2) {
      videoElement.play().catch((err) => {
        console.error("Error playing video:", err);
      });
    }

    return () => {
      // Pause video when component unmounts
      if (videoElement) {
        videoElement.pause();
      }
    };
  }, []);

  const handleMouseEnter = () => {
    const videoElement = videoRef.current;
    if (videoElement && videoElement.readyState >= 2) {
      videoElement.play().catch((err) => {
        console.error("Error playing video on hover:", err);
      });
    }
  };

  const handleMouseLeave = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.pause();
    }
  };

  return (
    <div
      className="relative flex items-start sm:items-start lg:items-center justify-center pt-10 sm:pt-5 lg:mt-10 h-screen"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Container */}
      <div
        className={`relative shadow-lg rounded-lg overflow-hidden mx-auto 
          w-full sm:w-11/12 lg:w-11/12 
          sm:aspect-[16/9] lg:h-5/6`}
      >
        <h1 className="hidden">Home page</h1>
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dsbcjtatz/video/upload/v1735807083/anton/3D/antonSkogsberg_3DShowreel_v006_lcpenm.mp4"
          muted
          autoPlay
          loop
          className="w-full h-full object-contain sm:object-contain lg:object-cover"
          aria-label="Anton Skogsberg 3D Showreel, a video showcasing 3D animations and visual effects, infinite loop"
        />
      </div>
    </div>
  );
};

export default Home;
