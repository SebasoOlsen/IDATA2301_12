/**
 * User API service for interacting with user-related backend endpoints.
 *
 * Provides functions to search for users, update user information, and delete users via admin endpoints.
 *
 * @module userAPI
 */
const API_URL = 'http://localhost:8080/api/users';

  export const getAllUsersBySearch = async (query) => {
    const url = query 
      ? `/admin/search?query=${encodeURIComponent(query)}`
      : "/admin/getAllUsers";
    try {
        const res = await fetch(`${API_URL}${url}`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error(`HTTP ${res.status} - ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.error("Failed to fetch users:", error);
        throw error;
    }
  };

  export const updateUser = async (userId, userData) => {
const res = await fetch(`${API_URL}/admin/edit/${userId}`, {
    method: "POST",
    credentials: "include",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
});

if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`HTTP ${res.status}: ${errorText}`);
}

const text = await res.text();
return text ? JSON.parse(text) : {};
};

export const deleteUser = async (userId) => {
  const res = await fetch(`${API_URL}/admin/delete/${userId}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`HTTP ${res.status}: ${errorText}`);
  }

  return await res.text(); // optional: return some response message
};