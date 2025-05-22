import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHotel } from "../service/api/hotelAPI";
import { getImageByTypeAndId } from "../service/api/imageAPI";
import ImageCarousel from "../components/Product/ImageCarousel";
import InfoBox from "../components/Product/InfoBox";
import "../assets/css/product-page.css";
import ExtraFeaturesBox from "../components/Product/ExtraFeaturesBox";
import AvailableListingsBox from "../components/Product/AvailableListingsBox";
import { getListingsByHotelId } from "../service/api/listingAPI";

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
        <main>
          <div className="product-page">
            <div className="hotel-header">
              <h1 className="hotel-title">{hotel.name}</h1>
              <div className="hotel-location">{hotel.location}</div>
            </div>

            <div className="image-gallery">
              {/* Your image gallery */}
              <ImageCarousel images={images} />
            </div>

            <div className="hotel-details">
              <div className="description-section">
                <h2 className="section-title">About this hotel</h2>
                {/* Description content */}
                <InfoBox hotel={hotel} />
              </div>

              <div className="amenities-section">
                <h2 className="section-title">Amenities</h2>
                <ul className="amenities-list">
                  {/* Amenities items */}
                  <ExtraFeaturesBox hotel={hotel} />
                </ul>
              </div>
            </div>

            <div className="rooms-section">
              <AvailableListingsBox listings={listings} />
            </div>
          </div>
        </main>
    )
}
