import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DateSelect = ({ dateTime, id }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const onBookHandler = () => {
    if (!selected) return toast.error("Please select a date");
    navigate(`/movies/${id}/${selected}`);
    scrollTo(0, 0);
  };

  return (
    <div id="dateSelect" className="w-full max-w-3xl mx-auto p-4">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-4 text-white/90">
        Select a Date
      </h2>

      {/* Date Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {Object.keys(dateTime).map((date) => {
          const isActive = selected === date;

          return (
            <button
              key={date}
              onClick={() => setSelected(date)}
              className={`flex flex-col items-center p-3 rounded-xl transition duration-200 border 
                ${
                  isActive
                    ? "bg-red-600 border-red-700 text-white shadow-lg scale-105"
                    : "bg-white/10 border-white/20 text-white/80 hover:bg-white/20"
                }
              `}
            >
              <span className="text-lg font-bold">
                {new Date(date).getDate()}
              </span>
              <span className="text-sm uppercase tracking-wide">
                {new Date(date).toLocaleString("en-US", { month: "short" })}
              </span>
            </button>
          );
        })}
      </div>

      {/* CTA */}
      <button
        onClick={onBookHandler}
        className="w-full mt-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 
        transition font-semibold text-white text-lg shadow-md"
      >
        Book Now
      </button>
    </div>
  );
};

export default DateSelect;
