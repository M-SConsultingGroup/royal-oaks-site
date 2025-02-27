import { useNavigation } from "../context/NavigationContext";

const Features = () => {
  const navigateToPackages = useNavigation();

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
          className={`relative h-auto  flex flex-col lg:flex-row font-serif items-center justify-center ${
            index % 2 === 0 ? "bg-gray-50" : "bg-white"
          }`}
          data-aos="fade-up"
          id="events"
        >
          {/* Image Container */}
          <div
            className={`w-full lg:w-1/2 flex-shrink-0 ${
              index % 2 === 0 ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-64 lg:h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div
            className={`w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 ${
              index % 2 === 0 ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="max-w-md text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <button
                onClick={navigateToPackages}
                className="px-8 py-3 bg-button text-white rounded-full text-lg font-semibold transition duration-300 hover:bg-buttonShadow hover:shadow-lg">
                  Learn More
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;