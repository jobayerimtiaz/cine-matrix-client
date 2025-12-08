import { User } from "lucide-react";
import { dummyCastsData } from "../assets/assets";
const CastSection = () => {
  const casts = dummyCastsData;
  return (
    <div className="max-w-7xl mx-auto px-6 mt-12 mb-20">
      <h2 className="text-2xl md:text-3xl font-heading mb-6">Cast</h2>

      <div className="flex gap-6 overflow-x-auto no-scrollbar py-2">
        {casts.map((cast, index) => (
          <div
            key={index}
            className="min-w-[110px] flex flex-col items-center group"
          >
            {/* Avatar Container */}
            <div className="w-24 h-24 rounded-full overflow-hidden bg-[#1a1a2e] shadow-xl group-hover:scale-105 transition duration-300">
              {cast.profile_path ? (
                <img
                  src={cast.profile_path}
                  alt={cast.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User size={42} className="text-gray-400" />
                </div>
              )}
            </div>

            {/* Actor name */}
            <p className="text-gray-200 mt-3 text-sm text-center font-medium group-hover:text-white transition">
              {cast.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CastSection;
