import {
  ChartLineIcon,
  CircleDollarSignIcon,
  PlayCircleIcon,
  UsersIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { dummyDashboardData } from "../../assets/assets";
import CinematicLoader from "../../components/CinematicLoader";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser: 0,
  });

  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
    setLoading(false);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (loading) return <CinematicLoader />;

  const dashboardCards = [
    {
      title: "Total Bookings",
      value: dashboardData.totalBookings || "0",
      icon: ChartLineIcon,
    },
    {
      title: "Total Revenue",
      value: `$${dashboardData.totalRevenue || "0"}`,
      icon: CircleDollarSignIcon,
    },
    {
      title: "Active Shows",
      value: dashboardData.activeShows.length || "0",
      icon: PlayCircleIcon,
    },
    {
      title: "Total Users",
      value: dashboardData.totalUser || "0",
      icon: UsersIcon,
    },
  ];

  return (
    <div className="p-2 md:p-6 space-y-6 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="flex items-center p-4 rounded-xl bg-gray-900 border border-gray-700 shadow-md hover:border-primary transition"
            >
              <div className="p-3 bg-gray-800 rounded-full mr-4 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>

              <div>
                <p className="text-sm text-gray-400">{card.title}</p>
                <p className="text-xl font-semibold text-white">{card.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ===================== Active Shows Table ===================== */}
      <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-md overflow-hidden">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-white">Active Shows</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-gray-300 text-sm">
                  Movie
                </th>
                <th className="px-4 py-3 text-left text-gray-300 text-sm">
                  Show Time
                </th>
                <th className="px-4 py-3 text-left text-gray-300 text-sm">
                  Price
                </th>
                <th className="px-4 py-3 text-left text-gray-300 text-sm">
                  Occupied Seats
                </th>
              </tr>
            </thead>

            <tbody>
              {dashboardData.activeShows.map((show) => (
                <tr
                  key={show._id}
                  className="border-b border-gray-800 hover:bg-gray-800/60 transition"
                >
                  <td className="px-4 py-3">{show.movie.title}</td>
                  <td className="px-4 py-3">
                    {new Date(show.showDateTime).toLocaleString()}
                  </td>
                  <td className="px-4 py-3">${show.showPrice}</td>
                  <td className="px-4 py-3">
                    {Object.keys(show.occupiedSeats).join(", ") || "None"}
                  </td>
                </tr>
              ))}

              {dashboardData.activeShows.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center py-6 text-gray-500 text-sm"
                  >
                    No active shows available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
