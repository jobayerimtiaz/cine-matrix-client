import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyDateTimeData, dummyShowsData } from "../assets/assets";
import CinematicLoader from "../components/CinematicLoader";
import isoTimeFormat from "../lib/isoTimeFormat";
import { ClockIcon } from "lucide-react";
import toast from "react-hot-toast";

const SeatLayout = () => {
  const groupRows = [
    ["A", "B"],
    ["C", "D"],
    ["E", "F"],
    ["G", "H"],
    ["I", "J"],
  ];

  const { id, date } = useParams();
  const navigate = useNavigate();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);

  // Fetch show details
  useEffect(() => {
    const showData = dummyShowsData.find((s) => String(s._id) === String(id));
    if (showData) {
      setShow({
        movie: showData,
        dateTime: dummyDateTimeData,
      });
    }
  }, [id]);

  // Handle seat click
  const handleSeatClick = (seatId) => {
    if (!selectedTime) {
      return toast("Select a show time first ⚠️");
    }

    if (!selectedSeats.includes(seatId) && selectedSeats.length >= 5) {
      return toast("You can select maximum 5 seats ⚠️");
    }

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((seat) => seat !== seatId)
        : [...prev, seatId]
    );
  };

  // Render each row of seats
  const renderSeats = (row, count = 9) => {
    return (
      <div key={row} className="flex justify-center flex-wrap gap-2 mb-3">
        {Array.from({ length: count }, (_, i) => {
          const seatId = `${row}${i + 1}`;
          const selected = selectedSeats.includes(seatId);

          return (
            <button
              key={seatId}
              onClick={() => handleSeatClick(seatId)}
              className={`
                h-9 w-9 flex items-center justify-center rounded-md 
                text-xs sm:text-sm font-semibold border transition-all
                ${
                  selected
                    ? "bg-primary text-white border-primary scale-105"
                    : "bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
                }
              `}
            >
              {seatId}
            </button>
          );
        })}
      </div>
    );
  };

  // Confirm selection
  const handleConfirm = () => {
    if (!selectedTime) {
      return toast("Select a show time first ⚠️");
    }
    if (selectedSeats.length === 0) {
      return toast("Select at least one seat ⚠️");
    }
    navigate("/my-bookings");
  };

  // If show is still loading
  if (!show) return <CinematicLoader />;

  return (
    <div className="max-w-2xl mx-auto p-5 text-white mt-24">
      {/* Time Selector */}
      <div className="text-center mb-6">
        <p className="text-lg font-semibold">Available Timings</p>

        <div className="flex flex-wrap gap-3 justify-center mt-3">
          {show.dateTime[date].map((dt) => (
            <div
              key={dt.time}
              onClick={() => setSelectedTime(dt)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer border transition
                ${
                  selectedTime?.time === dt.time
                    ? "bg-primary text-white border-primary"
                    : "bg-gray-800 border-gray-600 hover:bg-gray-700"
                }
              `}
            >
              <ClockIcon size={18} />
              <p>{isoTimeFormat(dt.time)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Screen */}
      <div className="flex justify-center my-8">
        <div className="w-72 sm:w-96 h-2 bg-gradient-to-b from-gray-300 to-gray-600 rounded-full shadow-xl" />
      </div>

      {/* Title */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-1">Select Your Seats</h3>
        <p className="text-gray-400 text-sm">Max 5 seats allowed</p>
      </div>

      {/* Seat Layout */}
      <div className="flex flex-col items-center">
        {/* First two rows (A & B) */}
        <div className="mb-4 w-full">
          {groupRows[0].map((row) => renderSeats(row))}
        </div>

        {/* Remaining groups */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          {groupRows.slice(1).map((pair, i) => (
            <div key={i} className="flex flex-col">
              {pair.map((row) => renderSeats(row))}
            </div>
          ))}
        </div>
      </div>

      {/* Confirm Button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={handleConfirm}
          className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition"
        >
          Confirm Seats
        </button>
      </div>
    </div>
  );
};

export default SeatLayout;
