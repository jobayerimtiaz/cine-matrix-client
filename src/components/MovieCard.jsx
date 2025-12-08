import { Star } from "lucide-react";
import formatTime from "../lib/formateTime";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  if (!movie) return null;

  const {
    title,
    release_date,
    backdrop_path,
    genres,
    runtime,
    vote_average,
    _id,
  } = movie;

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-xl">
      {/* Poster */}
      <img
        onClick={() => navigate(`/movies/${movie._id}`)}
        src={backdrop_path}
        alt={title}
        className="w-full h-64 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        {/* Title */}
        <h3 className="text-lg font-semibold text-white line-clamp-1">
          {title}
        </h3>

        {/* Meta Info */}
        <div className="text-sm text-gray-300 space-x-1 flex">
          <p className="text-gray-400">
            {new Date(release_date).getFullYear()} •{" "}
            {genres
              .slice(0, 2)
              .map((genre) => genre.name)
              .join(" | ")}{" "}
            • {formatTime(runtime)}
          </p>
        </div>

        {/* CTA + Rating */}
        <div className="flex items-center justify-between mt-2">
          <button className="btn-light px-4 py-1.5 text-sm">Buy Ticket</button>

          <div className="flex items-center gap-1">
            <Star size={18} className="text-yellow-400 fill-yellow-400" />
            <span className="text-white font-semibold">
              {vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
