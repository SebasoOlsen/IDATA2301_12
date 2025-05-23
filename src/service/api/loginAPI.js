import {Urls} from "./Urls.js";
/**
 * Login API service for checking user authentication status.
 *
 * Provides a function to verify if the user is currently logged in.
 *
 * @module loginAPI
 */
export const checkLoginStatus = async () => {
    const response = await fetch(`${Urls.BASE}/api/login/public/isLoggedIn`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return await response.json();
}