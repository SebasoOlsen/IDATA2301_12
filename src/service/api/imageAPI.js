const BASE_URL = "http://localhost:8080/api/images";
/**
 * Image API service for interacting with image-related backend endpoints.
 *
 * Provides functions to fetch images by type and ID, and to upload images with metadata.
 *
 * @module imageAPI
 */
export const getImageByTypeAndId = async (type, typeId) => {
  const url = `${BASE_URL}/public/urls?type=${encodeURIComponent(type)}&typeId=${encodeURIComponent(typeId)}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }

  return await response.json();
};

export const uploadImage = async (file, type, typeId) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("type", type);
  formData.append("typeId", typeId);

  const response = await fetch(`${BASE_URL}/admin/upload`, {
    method: "POST",
    body: formData,
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to upload image");
  }

  return await response.text();
};
