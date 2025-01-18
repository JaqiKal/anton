import React, { useState } from "react";
import image2DThumbnail from "../assets/images/2DThumbnail_v001.webp";
import image3DThumbnail from "../assets/images/3DThumbnail_v001.webp";

const artworks = [
  {
    id: 1,
    description: "This 2D Animation Showreel is showcasing my skills in everything from cleaned to rough animation. Animations made using TVPaint, Toon Boom Harmony, Photoshop and After Effects.",
    imageUrl: image2DThumbnail,
    vimeoEmbedSrc: "https://player.vimeo.com/video/1031925615?badge=0&autopause=0&player_id=0&app_id=58479",
    borderColor: "#0a0a0a",
    title: "2D Animation Showreel",
  },

  {
    id: 2,
    description: "My 3D Animation is showcasing my animation skills in a wide variety of rigs, environments & camera setups. Animations made using Autodesk Maya, with assistance from Blender & Unreal Engin.",
    imageUrl: image3DThumbnail,
    vimeoEmbedSrc: " https://player.vimeo.com/video/1031929747?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    borderColor: "#0a0a0a",
    title: "3D Animation Showreel",
  },
];

// Reusable VideoCard Component
const VideoCard = ({ video }) => (
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
          border: `1px solid ${video.borderColor}`, // Border around iframe
        }}
      ></iframe>
    </div>
    {/* Video Description */}
    <p className="mt-2 text-neutral-900 text-start">{video.description}</p>
  </div>
);

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  // Filter Artworks by Category
  const filteredArtworks = filter === "all" ? artworks : artworks.filter((art) => art.category === filter);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 hidden">Showreel Gallery</h1>

      {/* Dropdown Menu */}
      <div className="flex justify-end mt-10 mb-10 text-neutral-900 md:mt-5 lg:mt-20 lg:mb-16">
        <label
          htmlFor="filterArtworks"
          className="sr-only"
        >
          Filter artworks by category
        </label>
        <select
          id="filterArtworks"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 bg-neutral-300 rounded-lg border border-customOrange shadow-sm"
        >
          <option value="all">Show All</option>
          <option value="2D">2D Animation</option>
          <option value="3D">3D Animation</option>
        </select>
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-16 sm:grid-cols-1 lg:grid-cols-2">
        {filteredArtworks.map((art) => (
          <VideoCard
            key={art.id}
            video={art}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
