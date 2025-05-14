const BASE_URL = "https://localhost:8443/hotels";

//Create a new hotel
export const createHotel = async (hotelData) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(hotelData),
  });

  if (!response.ok) {
    throw new Error("Failed to create hotel");
  }

  return await response.json(); // returns the created hotel object
};

//Fetch a hotel by ID
export const getHotel = async (hotelId) => {
  const response = await fetch(`${BASE_URL}/${hotelId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch hotel");
  }

  return await response.json(); // returns the hotel object
};

// Get n random hotels
export const getRandomHotels = async (count = 3) => {
  
  const response = await fetch(`${BASE_URL}/random?count=${count}`);
  if (!response.ok) {
    throw new Error("Failed to fetch random hotels");
  }
  return await response.json();
};
