const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('ivoryBanner.jpeg')",
        position: "relative",
      }}
    >
      {/* Semi-transparent overlay for a dreamy, elegant look */}
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-6xl font-serif font-extrabold text-[#8B7969] drop-shadow-lg mb-4 tracking-wide">
          Royal Oaks Event Venue
        </h1>
        <p className="text-2xl text-[#A89685] drop-shadow-md mb-6 font-light italic">
          The perfect setting for your dream event
        </p>
        <button className="bg-[#C3A382] text-white px-8 py-3 text-lg font-semibold rounded-full shadow-md hover:bg-[#B19172] transition-all duration-300">
          Book Your Event
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
