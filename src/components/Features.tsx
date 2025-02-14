import React from "react";

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
    <section className="bg-white">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`relative h-screen flex font-serif items-center justify-center overflow-hidden ${
            index % 2 === 0 ? "bg-gray-50" : "bg-white"
          }`}
          data-aos="fade-up"
        >
          {/* Full-Width Image Container */}
          <div
            className={`absolute inset-y-0 w-1/2 ${
              index % 2 === 0 ? "left-0" : "right-0"
            }`}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="container mx-auto flex justify-center h-full">
            <div
              className={`w-full lg:w-1/2 flex items-center justify-center ${
                index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
              }`}
            >
              <div className="max-w-md text-center px-6">
                <h3 className="text-4xl font-bold text-gray-800 mb-6">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-8">{feature.description}</p>
                <button className="px-8 py-3 bg-button text-white rounded-full text-lg font-semibold transition duration-300 hover:bg-buttonShadow hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;