import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../assets/css/admin/ImageCarousel.css";
/**
 * ImageCarousel component for displaying a carousel of images.
 *
 * Utilizes Swiper to render a navigable and paginated image slider.
 * Shows a message if no images are provided.
 *
 * Props:
 * - images: Array of image URLs to display in the carousel.
 *
 * @component
 * @returns {JSX.Element} The image carousel UI or a fallback message.
 */
const ImageCarousel = ({ images }) => {
  if (!images || images.length === 0) {
    return <p>No images to display.</p>;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      className="hotel-image-carousel"
    >
      {images.map((imgSrc, index) => (
        <SwiperSlide key={index}>
          <img
            src={imgSrc}
            alt={`Slide ${index + 1}`}
            className="carousel-image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
