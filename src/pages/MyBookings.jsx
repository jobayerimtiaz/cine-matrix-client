import { useEffect, useState } from "react";
import { dummyBookingData } from "../assets/assets";
import CinematicLoader from "../components/CinematicLoader";
import { CalendarIcon, ClockIcon, TicketIcon } from "lucide-react";
import dateFormate from "../lib/dateFormate";
const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY || "$";

  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMyBookings = async () => {
    setBookings(dummyBookingData);
    setIsLoading(false);
  };

  useEffect(() => {
    getMyBookings();
  }, []);

  return !isLoading ? (
    <div className="max-w-3xl mx-auto mt-24 p-4 text-white">
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-gray-400 text-center mt-20">No bookings found.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {bookings.map((b) => {
            const movie = b.show.movie;
            const date = dateFormate(b.show.showDateTime);

            return (
              <div
                key={b._id}
                className="bg-gray-900 border border-gray-700 p-5 rounded-xl shadow-lg flex flex-col sm:flex-row gap-5"
              >
                {/* Movie Poster */}
                <img
                  src={movie.poster}
                  alt={movie.name}
                  className="w-28 sm:w-32 rounded-lg object-cover"
                />

                {/* Booking Info */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{movie.name}</h2>

                  {/* Date & Time */}
                  <div className="flex items-center gap-3 mt-2 text-gray-300">
                    <div className="flex items-center gap-1">
                      <CalendarIcon size={18} />
                      <span>{date}</span>
                    </div>
                  </div>

                  {/* Seats */}
                  <div className="flex items-center gap-2 mt-2 text-gray-300">
                    <TicketIcon size={18} />
                    <span className="font-medium">
                      Seats: {b.bookedSeats.join(", ")}
                    </span>
                  </div>

                  {/* Amount */}
                  <p className="text-gray-300 mt-2">
                    Total Paid Amount:{" "}
                    <span className="font-semibold text-white">
                      {currency}
                      {b.amount}
                    </span>
                  </p>

                  {/* Status */}
                  <p
                    className={`mt-2 font-semibold ${
                      b.isPaid ? "text-green-400" : "text-yellow-400"
                    }`}
                  >
                    {b.isPaid ? "Payment Completed" : "Payment Pending"}
                  </p>

                  {/* Pay Now Button */}
                  {!b.isPaid && (
                    <button className="mt-4 px-5 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition">
                      Pay Now
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  ) : (
    <CinematicLoader />
  );
};
export default MyBookings;
