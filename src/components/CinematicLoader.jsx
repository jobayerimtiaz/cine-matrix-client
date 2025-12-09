import { Film } from "lucide-react";

const CinematicLoader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Floating Light Streaks */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-streak1 absolute top-1/3 left-0 h-[2px] w-full bg-white/10"></div>
        <div className="animate-streak2 absolute top-2/3 left-0 h-[2px] w-full bg-white/5"></div>
      </div>

      {/* Film Icon with Pulse Glow */}
      <div className="flex flex-col items-center space-y-4 z-10">
        <div className="relative">
          <Film
            size={70}
            className="text-white animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          />

          {/* Soft Glow */}
          <div className="absolute inset-0 blur-2xl bg-white/20 animate-glow"></div>
        </div>

        {/* Loading Text */}
        <p className="text-white font-medium tracking-[0.2em] text-sm md:text-base animate-fade">
          LOADING
        </p>
      </div>
    </div>
  );
};

export default CinematicLoader;
