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

      {/* Decorative Branch Elements */}
      <img
        src="branch.png"
        alt="Decorative Branch"
        className="absolute top-10 left-10 w-24 h-auto opacity-60 shadow-none rotate-12"
        data-aos="fade-down"
      />
      <img
        src="branch.png"
        alt="Decorative Branch"
        className="absolute bottom-10 right-10 w-28 h-auto opacity-50 shadow-none rotate-[-15deg]"
        data-aos="fade-up"
      />

      {/* Content */}
      <div className="relative z-10" data-aos="fade-in">
        <h1 className="text-6xl font-serif font-extrabold text-primary drop-shadow-lg mb-4 tracking-wide">
          Royal Oaks Event Venue
        </h1>
        <p className="text-2xl text-secondary drop-shadow-md mb-6 font-light italic">
          The perfect setting for your dream event
        </p>
        <button className="bg-button text-white px-8 py-3 text-lg font-semibold font-serif rounded-full shadow-md hover:bg-buttonShadow transition-all duration-300">
          Book Your Event
        </button>
      </div>
    </section>
  );
};

export default HeroSection;