import { useEffect, useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import CinematicLoader from "../../components/CinematicLoader";

const ListShows = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllShows = async () => {
    try {
      setShows([
        {
          movie: dummyShowsData[0],
          showDateTime: "2024-07-01T18:30:00Z",
          showPrice: 12,
          occupiedSeats: {
            A1: "user_1",
            B1: "user_2",
            C1: "user_3",
          },
        },
      ]);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllShows();
  }, []);

  if (loading) return <CinematicLoader />;

  return (
    <div className="p-6 w-full flex justify-center">
      <div className="w-full max-w-5xl bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl">
        <h1 className="text-2xl font-semibold text-white tracking-wide mb-6">
          Shows List
        </h1>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-300 text-sm uppercase tracking-wider">
              <th className="pb-3 border-b border-white/10">Movie</th>
              <th className="pb-3 border-b border-white/10">Show Time</th>
              <th className="pb-3 border-b border-white/10">Total Bookings</th>
              <th className="pb-3 border-b border-white/10">Earnings</th>
            </tr>
          </thead>

          <tbody>
            {shows.map((show, index) => {
              const totalBookings = Object.keys(show.occupiedSeats).length;
              const earnings = totalBookings * show.showPrice;

              return (
                <tr
                  key={index}
                  className="text-gray-200 hover:bg-white/5 transition-all group"
                >
                  <td className="py-4 font-medium flex items-center gap-3">
                    <img
                      src={show.movie.poster_path}
                      alt=""
                      className="w-12 h-16 object-cover rounded-md shadow-md"
                    />
                    <span>{show.movie.title}</span>
                  </td>

                  <td className="py-4">
                    {new Date(show.showDateTime).toLocaleString("en-US", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </td>

                  <td className="py-4">{totalBookings}</td>

                  <td className="py-4 text-green-400 font-semibold">
                    {currency}
                    {earnings}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListShows;
