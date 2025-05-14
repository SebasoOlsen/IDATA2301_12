import React, { useEffect, useState } from "react";
import { getHotel } from "../service/api/hotelAPI";
import { getImageByTypeAndId } from "../service/api/imageAPI";
import ImageCarousel from "../components/ImageCarousel";

export default function ProductPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImage() {
      try {
        const urls = await getImageByTypeAndId("HOTEL", hotel.id);
        if (urls.length > 0) {
          setImageUrl(urls[0]);
        }
      } catch (e) {
        console.error(e);
      }
    }

    fetchImage();
  }, [hotel.id]);

  return (
    <>
      <ImageCarousel images={images} />
    </>
  );
}
