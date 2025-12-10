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
    <div className="p-4 md:p-6 space-y-6">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <div className="p-2 bg-gray-100 rounded-full mr-3">
                <Icon className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{card.title}</p>
                <p className="text-lg font-semibold text-gray-900">
                  {card.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Shows Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">Movie</th>
              <th className="px-4 py-2 text-left text-gray-600">Show Time</th>
              <th className="px-4 py-2 text-left text-gray-600">Price</th>
              <th className="px-4 py-2 text-left text-gray-600">
                Occupied Seats
              </th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.activeShows.map((show) => (
              <tr key={show._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{show.movie.name}</td>
                <td className="px-4 py-2">
                  {new Date(show.showDateTime).toLocaleString()}
                </td>
                <td className="px-4 py-2">${show.showPrice}</td>
                <td className="px-4 py-2">
                  {Object.keys(show.occupiedSeats).join(", ") || "None"}
                </td>
              </tr>
            ))}
            {dashboardData.activeShows.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
                  No active shows available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
