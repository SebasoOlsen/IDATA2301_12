const BASE_URL = "https://localhost:8443/api/providers";


export const getProviders = async () => {
  const res = await fetch(`${BASE_URL}`);
  return res.json();
};

export const createProvider = async (providerData) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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