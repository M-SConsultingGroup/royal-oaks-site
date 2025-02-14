import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const GalleryCarousel = () => {
  const images = [
    "tradeShow.jpeg",
    "ivoryBanner.jpeg",
    "logo.png",
  ];

  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    adaptiveHeight: true,
    fade: true,
  };

  return (
    <section className="py-20 bg-white relative" data-aos="fade-up">
      {/* Decorative Branch Images */}
      <img
        src="modified_branch.png"
        alt="Decorative Branch"
        className="absolute top-10 left-10 w-32 h-auto rotate-[-28deg] opacity-80 z-10 hidden lg:block shadow-none"
        data-aos="fade-right"
      />
      <img
        src="modified_branch.png"
        alt="Decorative Branch"
        className="absolute bottom-20 right-10 w-24 h-auto rotate-[15deg] opacity-80 z-10 hidden lg:block shadow-none"
        data-aos="fade-left"
      />
      <img
        src="modified_branch.png"
        alt="Decorative Branch"
        className="absolute top-20 right-20 w-28 h-auto rotate-[45deg] opacity-80 z-10 hidden lg:block shadow-none"
        data-aos="fade-right"
      />
      <img
        src="modified_branch.png"
        alt="Decorative Branch"
        className="absolute bottom-10 left-20 w-20 h-auto rotate-[-10deg] opacity-80 z-10 hidden lg:block shadow-none"
        data-aos="fade-left"
      />

      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-secondary mb-10 uppercase tracking-wide">
          Event Gallery
        </h2>

        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
          <Slider ref={setSliderRef} {...settings}>
            {images.map((src, index) => (
              <div key={index} className="relative group">
                {/* Clickable Image */}
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-[400px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  onClick={() => setModalImage(src)}
                  data-aos="zoom-in"
                />

                {/* Overlay Effect (Disabled Click Interference) */}
                <div className="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </Slider>

          {/* Left Arrow */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-secondary text-white p-3 rounded-full shadow-md transition-transform duration-300 hover:scale-110"
            onClick={() => sliderRef?.slickPrev()}
            data-aos="fade-right"
          >
            <FaChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-secondary text-white p-3 rounded-full shadow-md transition-transform duration-300 hover:scale-110"
            onClick={() => sliderRef?.slickNext()}
            data-aos="fade-left"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Full-size Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50"
          onClick={() => setModalImage(null)}
          data-aos="zoom-in"
        >
          <div className="relative max-w-4xl w-full p-4">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
              onClick={() => setModalImage(null)}
            >
              <IoClose size={28} />
            </button>

            {/* Full Image */}
            <img
              src={modalImage}
              alt="Full Size"
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking the image
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryCarousel;