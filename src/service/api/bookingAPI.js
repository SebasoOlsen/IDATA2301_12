import {Urls} from "./Urls.js";

const BASE_URL = `${Urls.BASE}/api/bookings`;

export const createBooking = async () => {

}

export const getBookedDates = async (listingId) => {
    const listingID = listingId;
    const response = await fetch(`${BASE_URL}/account/user`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    })
    return await response.json();
}