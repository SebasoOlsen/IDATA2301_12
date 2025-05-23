import {Urls} from "./Urls.js";

const BASE_URL = `${Urls.BASE}/api/providers`;

/**
 * Provider API service for interacting with provider-related backend endpoints.
 *
 * Provides functions to fetch all providers and create a new provider.
 *
 * @module providerAPI
 */
export const getProviders = async () => {
  const res = await fetch(`${BASE_URL}`);
  return res.json();
};

export const createProvider = async (providerData) => {
  const response = await fetch(`${BASE_URL}/admin/createProvider`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
    },
    body: JSON.stringify(providerData),
  });
  console.log("Provider data sent:", providerData);

  if (!response.ok) {
    throw new Error("Failed to create provider");
  }

  const text = await response.text();
  return text ? JSON.parse(text) : {};
};