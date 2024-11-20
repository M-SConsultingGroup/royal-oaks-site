
const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">The Perfect Place for Your Event</h1>
          <p className="text-xl mb-6">Plano, Texas</p>
          <button className="bg-blue-500 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-600 transition">
            Book Your Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
