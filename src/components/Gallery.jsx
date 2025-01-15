import React, { useState } from "react";
import image2DThumbnail from "../assets/images/2DThumbnail_v001.webp";
import image3DThumbnail from "../assets/images/3DThumbnail_v001.webp";

const artworks = [
  {
    id: 1,
    description: "This 2D Animation Showreel is showcasing my skills in everything from cleaned to rough animation. Animations made using TVPaint, Toon Boom Harmony, Photoshop and After Effects.",
    imageUrl: image2DThumbnail,
    videoUrl: "https://res.cloudinary.com/dsbcjtatz/video/upload/v1736877445/anton/2D/antonSkogsberg_2DShowreel_v003_pilc19.mp4",
    category: "2D",
  },

  {
    id: 2,
    description: "My 3D Animation is showcasing my animation skills in a wide variety of rigs, environments & camera setups. Animations made using Autodesk Maya, with assistance from Blender & Unreal Engin.",
    imageUrl: image3DThumbnail,
    videoUrl: "https://res.cloudinary.com/dsbcjtatz/video/upload/v1736877493/anton/3D/antonSkogsberg_3DShowreel_v007_yhq1tw.mp4",
    category: "3D",
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const filteredArtworks = filter === "all" ? artworks : artworks.filter((art) => art.category === filter);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 hidden">Gallery</h1>

      {/* Dropdown Menu */}
      <div className="flex justify-end mt-10 mb-10  md:mt-5 lg:mt-20 lg:mb-16">
        {/* Label for accessibility */}
        <label
          htmlFor="filterArtworks"
          className="sr-only" // Hides the label visually but keeps it accessible for screen readers
        >
          Filter artworks by category
        </label>
        <select
          id="filterArtworks"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 bg-customDutchLight rounded-lg border border-orange-800 shadow-sm"
        >
          <option value="all">Show All</option>
          <option value="2D">2D animation</option>
          <option value="3D">3D animation</option>
        </select>
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-16 sm:grid-cols-1 lg:grid-cols-2">
        {filteredArtworks.map((art) => (
          <div
            key={art.id}
            className="relative"
          >
            <video
              src={art.videoUrl}
              poster={art.imageUrl}
              controls
              muted
              loop
              preload="auto"
              aria-label={`${art.title || "Artwork"}: ${art.description}`}
            />
            <p className="mt-2 text-neutral-900 text-start">{art.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
