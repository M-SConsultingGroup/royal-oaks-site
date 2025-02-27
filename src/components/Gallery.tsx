import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"; // Import Tailwind Icons
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const images = [
  "tradeShow.jpeg",
  "ivoryBanner.jpeg",
  "logo.png"
];

interface ArrowProps {
  onClick: () => void;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  // Custom Next & Previous Buttons
  const NextArrow = ({ onClick }: ArrowProps) => (
    <button
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-md hover:bg-primaryHover transition z-10"
      onClick={onClick}
    >
      <ChevronRightIcon className="w-6 h-6" />
    </button>
  );

  const PrevArrow = ({ onClick }: ArrowProps) => (
    <button
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-md hover:bg-primaryHover transition z-10"
      onClick={onClick}
    >
      <ChevronLeftIcon className="w-6 h-6" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow onClick={() => { }} />,
    prevArrow: <PrevArrow onClick={() => { }} />
  };

  return (
    <div className="w-full  mx-auto p-4 relative bg-button">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-8 pt-4 text-white">Our Gallery</h2>


      {/* Image Carousel */}
      <Slider {...settings} data-aos="fade-up" className="max-w-2xl lg:justify-self-center">
        {images.map((img, index) => (
          <div key={index} onClick={() => setSelectedImage(img)} className="px-2 " data-aos="zoom-in" >
            <img src={img} alt="" className="w-full h-80 object-cover cursor-pointer rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </Slider>


      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
          data-aos="fade-in"
        >
          <div className="relative max-w-4xl w-full p-4" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-6 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200 transition"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <img src={selectedImage} alt="Expanded" className="w-full rounded-lg shadow-xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
