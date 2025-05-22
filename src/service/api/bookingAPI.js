import {Urls} from "./Urls.js";

export const createBooking = async (listingId, startDate, endDate) => {
    const url = new URL(`${Urls.BASE}/api/bookings/account/createBooking`);
    url.searchParams.append('listingId', listingId);
    url.searchParams.append('startDate', startDate);
    url.searchParams.append('endDate', endDate);

    const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        }
    });
    return await response.json();
}

export const getBookedDates = async (listingId) => {
    const listingID = listingId;
    const response = await fetch(`${Urls.BASE}/api/bookings/public/bookedDatesForListing/${listingId}`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    })
    return await response.json();
}