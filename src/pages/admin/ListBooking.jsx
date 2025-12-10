import { useEffect, useState } from "react";
import { dummyBookingData } from "../../assets/assets";
import CinematicLoader from "../../components/CinematicLoader";

const ListBooking = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllBookings = async () => {
    setBookings(dummyBookingData);
    setLoading(false);
  };

  useEffect(() => {
    getAllBookings();
  }, []);

  if (loading) return <CinematicLoader />;

  return (
    <div className="p-6 w-full flex justify-center">
      <div className="w-full max-w-5xl bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl">
        <h1 className="text-2xl font-semibold text-white tracking-wide mb-6">
          Bookings
        </h1>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-300 text-sm uppercase tracking-wider">
              <th className="pb-3 border-b border-white/10">User</th>
              <th className="pb-3 border-b border-white/10">Movie</th>
              <th className="pb-3 border-b border-white/10">Show Time</th>
              <th className="pb-3 border-b border-white/10">Seats</th>
              <th className="pb-3 border-b border-white/10">Amount</th>
              <th className="pb-3 border-b border-white/10">Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking, index) => {
              const show = booking.show;
              return (
                <tr
                  key={index}
                  className="text-gray-200 hover:bg-white/5 transition-all"
                >
                  {/* User Name */}
                  <td className="py-4 font-medium">{booking.user.name}</td>

                  {/* Movie Name */}
                  <td className="py-4 font-medium">{show.movie.title}</td>

                  {/* Show Time */}
                  <td className="py-4">
                    {new Date(show.showDateTime).toLocaleString("en-US", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </td>

                  {/* Seats */}
                  <td className="py-4">{booking.bookedSeats.join(", ")}</td>

                  {/* Amount */}
                  <td className="py-4 text-green-400 font-semibold">
                    {currency}
                    {booking.amount}
                  </td>

                  {/* Status / Button */}
                  <td className="py-4">
                    {!booking.isPaid ? (
                      <button className="px-4 py-2 bg-red-500/20 border border-red-500/40 text-red-300 rounded-lg hover:bg-red-500/30 transition">
                        Pay Now
                      </button>
                    ) : (
                      <span className="text-green-400 font-medium">Paid</span>
                    )}
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

export default ListBooking;
