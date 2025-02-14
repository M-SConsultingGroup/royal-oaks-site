const Features = () => {
  const features = [
    {
      title: "Corporate Events & Meetings",
      description: "Host corporate meetings and events.",
      image: "corporateEvents.jpeg",
    },
    {
      title: "Weddings",
      description: "Plan your dream wedding.",
      image: "weddingFeature.jpeg",
    },
    {
      title: "Trade Shows",
      description: "Perfect venue for large expos.",
      image: "tradeShow.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-secondary mb-12 uppercase tracking-wide" data-aos="fade-down">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {/* Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-64 object-cover"
              />

              {/* Content */}
              <div className="p-6 text-center">
                {/* Title */}
                <h3 className="text-2xl font-semibold text-secondary mb-4">
                  {feature.title}
                </h3>

                {/* Button */}
                <button className="mt-4 px-6 py-3 bg-button text-powderBlue rounded-full text-lg font-semibold transition duration-300 hover:bg-buttonShadow">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;