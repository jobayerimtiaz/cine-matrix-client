import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyDateTimeData, dummyShowsData } from "../assets/assets";
import {
  Heart,
  Clock,
  Calendar,
  ArrowRight,
  PlayCircle,
  Star,
} from "lucide-react";
import ReactPlayer from "react-player";
import formatTime from "../lib/formateTime";
import CastSection from "../components/CastSection";
import DateSelect from "../components/DateSelect";
import CinematicLoader from "../components/CinematicLoader";
const MovieDetails = () => {
  const { id } = useParams();
  const [movieShow, setMovieShow] = useState(null);
  // const [showTrailer, setShowTrailer] = useState(false);
  const getShow = async () => {
    const show = dummyShowsData.find((s) => String(s._id) === String(id));
    if (show) {
      setMovieShow({
        movie: show,
        dateTime: dummyDateTimeData,
      });
    }
  };
  useEffect(() => {
    getShow();
  }, [id]);
  return movieShow ? (
    <div className="w-full min-h-screen text-white">
      {/* ─── BACKDROP ──────────────────────── */}
      <div
        className="relative w-full h-[60vh] md:h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${movieShow.movie.backdrop_path})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/20 to-[#0a0a14]"></div>
      </div>

      {/* ─── CONTENT ───────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 -mt-32 relative pb-20">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Poster */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img
              src={movieShow.movie.poster_path}
              alt={movieShow.movie.title}
              className="w-64 md:w-80 rounded-xl shadow-2xl"
            />
          </div>

          {/* Text + Info */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {movieShow.movie.title}
            </h1>

            {/* ⭐ Rating (Lucide Star) */}
            <div className="flex items-center gap-2 mb-6">
              <Star size={20} className="text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-400 font-semibold text-lg">
                {movieShow.movie.vote_average.toFixed(1)}
              </span>
            </div>

            {/* Genres */}
            <p className="text-gray-400 text-sm mb-6">
              {movieShow.movie.genres.map((genre) => genre.name).join(" • ")}
            </p>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl">
              {movieShow.movie.overview}
            </p>
            {/* Favorite */}

            {/* Meta Info */}
            <div className="grid grid-cols-2 gap-4 text-gray-300 mb-10">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-gray-400" />
                {movieShow.movie.release_date}
              </div>

              <div className="flex items-center gap-2">
                <Clock size={18} className="text-gray-400" />
                {formatTime(movieShow.movie.runtime)} min
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Watch Trailer */}
              <button
                onClick={() => setShowTrailer(true)}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center gap-2 transition"
              >
                <PlayCircle size={22} />
                Watch Trailer
              </button>

              {/* Buy Tickets */}
              <a
                href="#dateSelect"
                className="px-6 py-3 bg-purple-600 text-black font-semibold rounded-lg hover:bg-white/80 transition flex items-center gap-2"
              >
                Buy Tickets
                <ArrowRight size={20} />
              </a>

              <button className="p-3 my-5 rounded-full bg-white/15 hover:bg-white/25 transition backdrop-blur-md">
                <Heart size={24} className="text-red-400" />
              </button>
            </div>
          </div>
        </div>
        <CastSection />
        <DateSelect dateTime={movieShow.dateTime} id={id}></DateSelect>
      </div>

      {/* ─── TRAILER MODAL ─────────────────── */}
      {/* {showTrailer && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="w-[90%] md:w-[60%] aspect-video bg-black rounded-xl overflow-hidden relative">
            <ReactPlayer
              url={movieShow.movie.trailer}
              width="100%"
              height="100%"
              controls
            />

            <button
              onClick={() => setShowTrailer(false)}
              className="absolute -top-12 right-0 text-white bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30"
            >
              Close
            </button>
          </div>
        </div>
      )} */}
    </div>
  ) : (
    <CinematicLoader></CinematicLoader>
  );
};
export default MovieDetails;
