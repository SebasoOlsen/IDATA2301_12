const BASE_URL = "http://localhost:8080/api/images";

// GET: Fetch images by type and typeId
export const getImageByTypeAndId = async (type, typeId) => {
  const url = `${BASE_URL}/public/urls?type=${encodeURIComponent(type)}&typeId=${encodeURIComponent(typeId)}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }

  return await response.json();
};

// POST: Upload image file with metadata
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

  return await response.text(); // Returns: "Image uploaded"
};
