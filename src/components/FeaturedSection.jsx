import { ArrowRight } from "lucide-react";
import MovieCard from "./MovieCard";
import { dummyShowsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const FeaturedSection = () => {
  const navigate = useNavigate();
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 ">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        {/* Left Text */}
        <div className="text-left">
          <p className="text-gray-300 mt-2 max-w-md">
            Dive into the most popular and trending movies hand-picked for you.
          </p>
        </div>

        {/* Right Button */}
        <button
          onClick={() => navigate("/movies")}
          className="btn-light flex items-center gap-2"
        >
          View All <ArrowRight size={18} />
        </button>
      </div>

      {/* Movie Cards (You will add later) */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 min-h-[200px]">
        {/* Placeholder for movie cards */}
        {dummyShowsData.slice(0, 4).map((movie) => (
          <MovieCard key={movie._id} movie={movie}></MovieCard>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="w-full flex justify-center mt-16">
        <button
          onClick={() => navigate("/movies")}
          className="btn-light px-8 py-3"
        >
          Explore More
        </button>
      </div>
    </section>
  );
};
export default FeaturedSection;
