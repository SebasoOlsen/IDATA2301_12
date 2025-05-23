import {Urls} from "./Urls.js";
const BASE_URL = `${Urls.BASE}/api/listings`;

/**
 * Listing API service for interacting with listing-related backend endpoints.
 *
 * Provides functions to create listings, fetch listings by hotel ID, and fetch a listing by its ID.
 *
 * @module listingAPI
 */


export const getListingsByHotelId = async (hotelId) => {
  const response = await fetch(`${BASE_URL}/public/hotel/${hotelId}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("Fetching listings for hotel ID:", hotelId);
  if (!response.ok) {
    throw new Error("Failed to fetch listings");
  }
  return await response.json();
};

export const createListing = async (data) => {
  const res = await fetch(`${BASE_URL}/admin/createListing`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  console.log("Listing data sent:", data);
  if (!res.ok) throw new Error("Failed to create listing");
  return res.json();
};

export const getListingById = async (listingId) => {
  const res = await fetch(`${BASE_URL}/${listingId}`,{
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error("Failed to fetch listing");
}
