const BASE_URL = "http://localhost:8080/api/listings";

export const getListingsByHotelId = async (hotelId) => {
  const response = await fetch(`${BASE_URL}/public/hotel/${hotelId}`);
  console.log("Fetching listings for hotel ID:", hotelId);
  if (!response.ok) {
    throw new Error("Failed to fetch listings");
  }
  return await response.json();
};

export const createListing = async (data) => {
  const res = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  console.log("Listing data sent:", data);
  if (!res.ok) throw new Error("Failed to create listing");
  return res.json();
};
