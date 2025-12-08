import { dummyShowsData } from "../assets/assets";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  return dummyShowsData.length > 0 ? (
    <div className="w-full py-16 mt-32 mb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Now Showing
          </h2>
          <p className="text-gray-400 mt-1 max-w-md">
            Explore the latest movies currently playing in theaters.
          </p>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1  md:grid-cols-3 xl:grid-cols-4 gap-6">
          {dummyShowsData.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div>No Movies Found</div>
  );
};
export default Movies;
