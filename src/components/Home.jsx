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
      className="relative h-screen flex items-start justify-center pt-10 lg:mt-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video */}
      <div className="relative w-11/12 h-5/6 mx-auto shadow-lg rounded-lg overflow-hidden">
        <h1 className="hidden">Home page</h1>
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dsbcjtatz/video/upload/v1735807083/anton/3D/antonSkogsberg_3DShowreel_v006_lcpenm.mp4"
          muted
          autoPlay
          loop
          className="w-full h-full object-cover"
          aria-label="Anton Skogsberg 3D Showreel, a video showcasing 3D animations and visual effects, infinite loop"
        />
      </div>

      {/* Overlay Content 
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Anton Skogsberg</h1>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => navigate("/work")}
            className="w-28 h-12 bg-blue-800 hover:bg-fuchsia-800 text-lg font-semibold rounded-md shadow-md flex items-center justify-center"
          >
            Work
          </button>
          <button
            onClick={() => navigate("/about")}
            className="w-28 h-12 bg-teal-500 hover:bg-amber-700 text-lg font-semibold rounded-md shadow-md flex items-center justify-center"
          >
            Say Hello!
          </button>
        </div>
      </div>
      */}
    </div>
  );
};

export default Home;
