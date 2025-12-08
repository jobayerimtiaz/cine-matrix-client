import { useState } from "react";
import ReactPlayer from "react-player";
import { dummyTrailers } from "../assets/assets";

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  // Convert YouTube watch URL to embed URL
  const getEmbedUrl = (url) => {
    if (!url) return "";
    const videoId = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
    )?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  return (
    <section className="w-full py-16 px-6 max-w-7xl mx-auto">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
        Watch Trailer
      </h2>

      {/* Wrapper */}
      <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black">
        {/* 16:9 Aspect Ratio Container */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src={getEmbedUrl(currentTrailer.videoUrl)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="Trailer"
          />
        </div>
      </div>

      {/* Trailer Thumbnails */}
      <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
        {dummyTrailers.map((trailer, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentTrailer(trailer)}
            className="shrink-0 rounded-lg overflow-hidden border-2 transition-all hover:opacity-80"
            style={{
              borderColor:
                currentTrailer.videoUrl === trailer.videoUrl
                  ? "#8b5cf6"
                  : "rgba(255, 255, 255, 0.2)",
            }}
          >
            <img
              src={trailer.image}
              alt={`Trailer ${idx + 1}`}
              className="w-24 h-16 object-cover cursor-pointer"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default TrailerSection;
