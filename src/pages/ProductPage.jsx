import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHotel } from "../service/api/hotelAPI";
import { getImageByTypeAndId } from "../service/api/imageAPI";
import ImageCarousel from "../components/Product/ImageCarousel";
import InfoBox from "../components/Product/InfoBox";
import "../assets/css/product-page.css";
import ExtraFeaturesBox from "../components/Product/ExtraFeaturesBox";
import AvailableListingsBox from "../components/Product/AvailableListingsBox";

export default function ProductPage() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [images, setImages] = useState([]);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function fetchHotelData() {
      try {
        const hotelData = await getHotel(id);
        setHotel(hotelData);

        const urls = await getImageByTypeAndId("HOTEL", id);
        setImages(urls || []);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }

      const listingsData = await getListingsByHotelId(id);
      setListings(listingsData);
    }

    fetchHotelData();
  }, [id]);

  if (!hotel) return <div>Loading...</div>;

  return (
    <div>
      <h1>{hotel.name}</h1>
      <div style={{ display: "flex", gap: "24px", padding: "20px" }}>
        <ImageCarousel images={images} />
        <InfoBox hotel={hotel} />
        <ExtraFeaturesBox hotel={hotel} />
        <AvailableListingsBox listings={listings} />
      </div>
    </div>
  );
}
