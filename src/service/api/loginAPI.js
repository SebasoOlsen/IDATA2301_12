import {Urls} from "./Urls.js";

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