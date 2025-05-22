const BASE_URL = "http://localhost:8080/api/hotels";

//Create a new hotel
export const createHotel = async (hotelData) => {
  const response = await fetch(`${BASE_URL}/admin/createHotel`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(hotelData),
  });

  if (!response.ok) {
    throw new Error("Failed to create hotel");
  }

  const text = await response.text();
  return text ? JSON.parse(text) : {};
};


export const getAllHotels = async () => {
  const res = await fetch(`${BASE_URL}/admin/allHotels`);
  return res.json();
};

//Fetch a hotel by ID
export const getHotel = async (hotelId) => {
  const response = await fetch(`${BASE_URL}/public/searchById/${hotelId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch hotel");
  }

  return await response.json(); // returns the hotel object
};

// Get n random hotels
export const getRandomHotels = async (count = 3) => {
  
  const response = await fetch(`${BASE_URL}/public/randomHotels?count=${count}`);
  if (!response.ok) {
    throw new Error("Failed to fetch random hotels");
  }
  return await response.json();
};

export const searchHotels = async (query) => {
  console.log("Searching for: " + query);
  const params = new URLSearchParams({
    destination: query.destination,
    checkin: query.checkin,
    checkout: query.checkout,
    rooms: query.rooms
  });
  const response = await fetch(`${BASE_URL}/public/search?${params}`);
  if (!response.ok) {
    throw new Error("Failed to fetch hotels");
  }
  return await response.json();
}

export const getRoomsByHotelId = async (hotelId) => {
  const res = await fetch(`${BASE_URL}/public/${hotelId}/rooms`);
  return res.json();
};








