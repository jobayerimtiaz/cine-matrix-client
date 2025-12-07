import guardiansImage from "../assets/backgroundImage.png";
const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[90vh] md:h-[80vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${guardiansImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col gap-6 md:gap-8">
        {/* Movie Title */}
        <h1 className="text-5xl md:text-7xl font-heading text-gradient">
          Guardians of the Galaxy
        </h1>

        {/* Genre */}
        <p className="text-sm md:text-base text-gray-300 uppercase tracking-wide">
          Action • Adventure • Sci-Fi
        </p>

        {/* Short Description */}
        <p className="text-gray-200 max-w-2xl leading-relaxed">
          A group of intergalactic criminals must pull together to stop a
          fanatical warrior with plans to purge the universe.
        </p>

        {/* Explore Button */}
        <button className="btn-light w-fit mt-3 hover:scale-105 transition-transform">
          Explore More
        </button>
      </div>
    </section>
  );
};
export default HeroSection;
