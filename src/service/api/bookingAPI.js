import {Urls} from "./Urls.js";


export const createBooking = async () => {

}

export const getBookedDates = async (listingId) => {
    const listingID = listingId;
    const response = await fetch(`${Urls.BASE}/api/bookings/account/user`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    })
    return await response.json();
}