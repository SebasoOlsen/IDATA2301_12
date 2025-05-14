const BASE_URL = "https://localhost:8443/api/images";

// GET: Fetch images by type and typeId
export const getImageByTypeAndId = async (type, typeId) => {
  const url = `${BASE_URL}/urls?type=${encodeURIComponent(type)}&typeId=${encodeURIComponent(typeId)}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }

  return await response.json();
};

// DELETE: Remove image by ID
export const deleteImageById = async (imageId) => {
  const response = await fetch(`${BASE_URL}/${imageId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete image");
  }

  return await response.text(); // Returns: "Image deleted"
};

// POST: Upload image file with metadata
export const uploadImage = async (file, type, typeId) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("type", type);
  formData.append("typeId", typeId);

  const response = await fetch(`${BASE_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload image");
  }

  return await response.text(); // Returns: "Image uploaded"
};
