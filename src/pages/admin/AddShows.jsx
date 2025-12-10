import { useEffect, useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import CinematicLoader from "../../components/CinematicLoader";
import { Check } from "lucide-react";

const AddShows = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [dateTimeSelection, setDateTimeSelection] = useState({});
  const [dateTimeInput, setDateTimeInput] = useState("");
  const [showPrice, setShowPrice] = useState("");

  const fetchNowPlayingMovies = async () => {
    setNowPlayingMovies(dummyShowsData);
  };

  const handleDateTimeAdd = () => {
    if (!dateTimeInput) return;
    const [date, time] = dateTimeInput.split("T");
    if (!date || !time) return;

    setDateTimeSelection((prev) => {
      const times = prev[date] || [];
      if (!times.includes(time)) {
        return { ...prev, [date]: [...times, time] };
      }
      return prev;
    });

    setDateTimeInput("");
  };

  const handleRemoveDateTime = (date, time) => {
    setDateTimeSelection((prev) => {
      const filtered = prev[date].filter((t) => t !== time);
      if (filtered.length === 0) {
        const { [date]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [date]: filtered };
    });
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  if (nowPlayingMovies.length === 0) return <CinematicLoader />;

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold text-white tracking-wide mb-6">
        Select a Movie
      </h1>

      {/* Movie poster grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {nowPlayingMovies.map((movie) => {
          const isActive = selectedMovie?._id === movie._id;

          return (
            <div
              key={movie.id}
              onClick={() => setSelectedMovie(movie)}
              className={`relative cursor-pointer rounded-xl overflow-hidden border backdrop-blur-lg transition-all
                ${
                  isActive
                    ? "border-primary shadow-[0_0_15px_rgba(255,0,80,0.7)]"
                    : "border-white/10 hover:border-white/30"
                }
              `}
            >
              {/* Poster */}
              <img
                src={movie.poster_path}
                alt={movie.title}
                className="w-full h-48 object-cover"
              />

              {/* Footer */}
              <div className="p-3 bg-black/60 text-white text-sm font-medium">
                {movie.title}
              </div>

              {/* Checkmark overlay */}
              {isActive && (
                <div className="absolute top-2 right-2 bg-primary p-1 rounded-full shadow-lg animate-scaleIn">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* When user selects a movie, show next step */}
      {selectedMovie && (
        <div className="mt-10 p-6 bg-black/40 border border-white/10 rounded-xl backdrop-blur-xl">
          <h2 className="text-lg text-white font-semibold mb-4">
            Add Show Date & Time
          </h2>

          <div className="flex gap-4 items-center">
            <input
              type="datetime-local"
              value={dateTimeInput}
              onChange={(e) => setDateTimeInput(e.target.value)}
              className="bg-white/40 border border-white/20 rounded px-3 py-2 text-white focus:outline-none"
            />

            <button
              onClick={handleDateTimeAdd}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80"
            >
              Add
            </button>
          </div>

          {/* Display selected showtimes */}
          <div className="mt-6 space-y-4">
            {Object.keys(dateTimeSelection).map((date) => (
              <div key={date} className="bg-white/5 p-4 rounded-lg">
                <p className="text-white font-semibold">{date}</p>
                <div className="flex gap-3 mt-2 flex-wrap">
                  {dateTimeSelection[date].map((time) => (
                    <span
                      key={time}
                      className="px-3 py-1 bg-primary/20 border border-primary/40 text-primary rounded-lg flex items-center gap-2"
                    >
                      {time}
                      <button
                        onClick={() => handleRemoveDateTime(date, time)}
                        className="text-red-400 hover:text-red-500"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Show Price */}
          <div className="mt-6">
            <label className="text-white text-sm">Show Price</label>
            <input
              type="number"
              value={showPrice}
              onChange={(e) => setShowPrice(e.target.value)}
              className="w-32 bg-black/40 border border-white/20 rounded px-3 py-2 text-white focus:outline-none mt-2"
              placeholder={`${currency} Price`}
            />
          </div>
        </div>
      )}
      {/* Action Buttons */}
      <div className="mt-10 flex justify-end gap-4">
        <button
          onClick={() => {
            setSelectedMovie(null);
            setDateTimeSelection({});
            setShowPrice("");
            setDateTimeInput("");
          }}
          className="px-5 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
        >
          Reset
        </button>

        <button
          disabled={
            !selectedMovie ||
            Object.keys(dateTimeSelection).length === 0 ||
            !showPrice
          }
          className={`px-6 py-2 rounded-lg font-semibold transition-all
      ${
        !selectedMovie ||
        Object.keys(dateTimeSelection).length === 0 ||
        !showPrice
          ? "bg-primary/30 text-white/40 cursor-not-allowed"
          : "bg-primary text-white hover:bg-primary/80 shadow-[0_0_15px_rgba(255,0,80,0.5)]"
      }
    `}
          onClick={() => {
            console.log({
              movie: selectedMovie,
              showtime: dateTimeSelection,
              price: showPrice,
            });
          }}
        >
          Add Show
        </button>
      </div>
    </div>
  );
};

export default AddShows;
