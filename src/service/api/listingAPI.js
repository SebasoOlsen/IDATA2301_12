const BASE_URL = "https://localhost:8443/api/listings";

export const getListingsByHotelId = async (hotelId) => {
  const response = await fetch(`${BASE_URL}/rooms/${hotelId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch listings");
  }
  return await response.json();
};