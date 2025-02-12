const VideoSection = () => {
  return (
    <section className="relative py-20 bg-[#f7f4f0] overflow-hidden">
      {/* Abstract Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#8B7969] opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#5A4A42] opacity-30 rounded-full blur-2xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image + Text */}
          <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Decorative Rotated Image */}
            <img
              src="https://dallaspalmsvenue.com/wp-content/uploads/2023/05/branch.png"
              alt="Decorative Element"
              className="w-32 h-auto rotate-[-28deg] opacity-80 mb-6 shadow-none"
            />
            
            {/* Title */}
            <h4 className="text-3xl font-extrabold text-[#5A4A42] mb-4 uppercase">
              Experience Elegance at Royal Oaks Event Venue
            </h4>

            {/* Description */}
            <p className="text-lg text-gray-700 max-w-md">
              Nestled in the heart of the city, <span className="font-medium">Royal Oaks Event Venue</span> 
              offers a breathtaking setting for weddings, corporate events, and special celebrations. 
              Our stunning ballrooms, lush outdoor spaces, and exceptional service make every event unforgettable. 
              From grand receptions to intimate gatherings, Royal Oaks provides the perfect backdrop for your special moments.
            </p>

            {/* Contact Us Button */}
            <a
              href="https://royaloakseventvenue.com/contact-us/"
              className="mt-6 inline-block px-6 py-3 bg-[#8B7969] text-white font-semibold rounded-full text-lg transition duration-300 hover:bg-[#6d5d50]"
            >
              Contact Us
            </a>
          </div>

          {/* Right Side - Larger Video */}
          <div className="relative w-full">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-br from-[#8B7969] to-[#5A4A42] opacity-20 rounded-xl blur-3xl transition duration-300"></div>

            {/* Embedded YouTube Video */}
            <div className="relative w-full rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="500"
                className="w-full h-[500px] sm:h-[400px] xs:h-[300px] rounded-xl"
                src="https://www.youtube.com/embed/?autoplay=1&mute=1&loop=1&modestbranding=1&controls=1&rel=0"
                title="Royal Oaks Event Venue"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;
