/**
 * VideoCard.jsx
 *
 * This component renders a video card with an embedded Vimeo video player.
 *
 * Author: JaqiKal
 * Date: January 2025
 *
 */
import React from "react";

const VideoCard = ({ video, autoplay = false, loop = false, muted = false, showDescription = true }) => (
  <div className="relative">
    {/* Aspect Ratio Wrapper */}
    <div
      style={{
        paddingTop: "56.25%", // 16:9 aspect ratio
        position: "relative",
      }}
    >
      {/* Video Frame with Border */}
      <iframe
        src={video.vimeoEmbedSrc}
        title={video.title}
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          border: `1px solid ${video.borderColor || "#000"}`, // Default border color
        }}
      ></iframe>
    </div>
    {/* Conditionally Render Description */}
    {showDescription && <p className="mt-2 text-neutral-900 text-start">{video.description}</p>}
  </div>
);

export default VideoCard;
