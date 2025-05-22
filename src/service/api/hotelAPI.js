const BASE_URL = "http://localhost:8080/api/hotels";
/**
 * Hotel API service for interacting with hotel-related backend endpoints.
 *
 * Provides functions to create, fetch, update, and search hotels, as well as retrieve rooms by hotel ID.
 * Handles both admin and public endpoints.
 *
 * @module hotelAPI
 */
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
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }

  const text = await response.text();
  return text ? JSON.parse(text) : {};
};

// Get all hotels (admin)
export const getAllHotels = async () => {
   const response = await fetch(`${BASE_URL}/admin/allHotels`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }

  const text = await response.text();
  return text ? JSON.parse(text) : {};
};


// Fetch a hotel by ID
export const getHotel = async (hotelId) => {
  const response = await fetch(`${BASE_URL}/public/searchById/${hotelId}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }
  const text = await response.text();
  return text ? JSON.parse(text) : {};
};


// Get random hotels
export const getRandomHotels = async (count = 3) => {
  const response = await fetch(`${BASE_URL}/public/randomHotels?count=${count}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }

  const text = await response.text();
  return text ? JSON.parse(text) : {};
};

// Public hotel search
export const searchHotels = async (query) => {
  const params = new URLSearchParams({
    destination: query.destination,
    checkin: query.checkin,
    checkout: query.checkout,
    rooms: query.rooms,
  });

  const response = await fetch(`${BASE_URL}/public/search?${params.toString()}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }

  const text = await response.text();
  return text ? JSON.parse(text) : {};
};

// Rooms by hotel ID
export const getRoomsByHotelId = async (hotelId) => {
  const response = await fetch(`${BASE_URL}/public/${hotelId}/rooms`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }

  const text = await response.text();
  return text ? JSON.parse(text) : {};
};

export const updateHotel = async (id, data) => {
  const res = await fetch(`${BASE_URL}/admin/updateHotel/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
};

export const updateHotelVisibility = async (id, visible) => {
  const url = `${BASE_URL}/admin/updateHotelVisibility/${id}?visible=${visible}`;
  const res = await fetch(url, {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
};