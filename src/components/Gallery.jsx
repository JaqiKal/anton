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
    description: "My 3D Animation is showcasing my animation skills in a wide variety of rigs, environments & camera setups. Animations made using Autodesk Maya, with assistance from Blender & Unreal Engin",
    imageUrl: image3DThumbnail,
    videoUrl: "https://res.cloudinary.com/dsbcjtatz/video/upload/v1736877493/anton/3D/antonSkogsberg_3DShowreel_v007_yhq1tw.mp4",
    category: "3D",
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const filteredArtworks = filter === "all" ? artworks : artworks.filter((art) => art.category === filter);

  const handleMouseEnter = (e) => {
    if (e.target.readyState >= 2) {
      // Ensure the video is ready to play
      e.target.play();
    }
  };

  const handleMouseLeave = (e) => {
    e.target.pause();
  };

  const openLightbox = (art) => {
    setSelectedArtwork(art);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedArtwork(null);
  };

  return (
    <div className="container text-orange-950 mx-auto px-4">
      <h1 className="sr-only">Gallery</h1>

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
      {filteredArtworks.length === 0 ? (
        <div className="flex justify-center items-center  mt-32 md:mt-32 lg:mt-52 xl:mt-52 2xl:-scroll-mt-60">
          <div className="text-center bg-orange-300 p-10 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-orange-900">
            <h2 className="text-2xl font-bold ">🚧 Work in Progress!</h2>
            <p className="mt-2">Great things are on the way! Grab a coffee and check back soon. ☕</p>
          </div>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {filteredArtworks.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              onClick={() => openLightbox(art)}
            >
              <video
                src={art.videoUrl}
                poster={art.imageUrl}
                muted
                loop
                loading="lazy"
                className="w-full h-48 sm:h-72 md:h-72 lg:h-auto object-cover"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                aria-label={`${art.title || "Artwork"}: ${art.description}`}
              />
              <div className="p-4">
                <p className="text-gray-700">{art.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && selectedArtwork && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 w-11/12 max-w-4xl relative">
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
            <video
              src={selectedArtwork.videoUrl}
              controls
              autoPlay
              className="w-full mb-4"
            />

            <p className="text-gray-700">{selectedArtwork.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
