const VideoSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Explore Our Venue</h2>
        <div className="relative max-w-4xl mx-auto">
            <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/your-video-id"
                title="Video overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
            ></iframe>
            </div>

      </div>
    </section>
  );
};

export default VideoSection;
