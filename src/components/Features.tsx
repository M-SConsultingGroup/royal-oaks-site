
const Features = () => {
  const features = [
    { title: "Meetings", description: "Host corporate meetings and events." },
    { title: "Weddings", description: "Plan your dream wedding." },
    { title: "Trade Shows", description: "Perfect venue for large expos." },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Features</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="p-4 bg-white shadow rounded">
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
