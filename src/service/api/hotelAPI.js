const BASE_URL = "https://localhost:8443/api/hotels";

// Utility to fetch with token or credentials
const fetchWithAuth = async (url, options = {}) => {
  const token = localStorage.getItem("token"); // Use cookies if not JWT-based

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
    credentials: "include", // Important if you're using session cookies
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }

  const text = await response.text();
  return text ? JSON.parse(text) : {};
};

// Create a new hotel
export const createHotel = async (hotelData) => {
  return await fetchWithAuth(`${BASE_URL}/admin/createHotel`, {
    method: "POST",
    body: JSON.stringify(hotelData),
  });
};

// Get all hotels (admin)
export const getAllHotels = async () => {
  return await fetchWithAuth(`${BASE_URL}/admin/allHotels`);
};

// Fetch a hotel by ID
export const getHotel = async (hotelId) => {
  return await fetchWithAuth(`${BASE_URL}/public/searchById/${hotelId}`, {
    method: "GET",
  });
};

// Get random hotels
export const getRandomHotels = async (count = 3) => {
  return await fetchWithAuth(`${BASE_URL}/public/randomHotels?count=${count}`);
};

// Public hotel search
export const searchHotels = async (query) => {
  const params = new URLSearchParams({
    destination: query.destination,
    checkin: query.checkin,
    checkout: query.checkout,
    rooms: query.rooms,
  });

  return await fetchWithAuth(`${BASE_URL}/public/search?${params.toString()}`);
};

// Rooms by hotel ID
export const getRoomsByHotelId = async (hotelId) => {
  return await fetchWithAuth(`${BASE_URL}/public/${hotelId}/rooms`);
};
