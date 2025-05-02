// File: /src/main/resources/static/js/my-page.js
document.addEventListener("DOMContentLoaded", function () {
    console.log("Starting fetch for /favourites/user");
    fetch("/favourites/user")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not OK: " + response.status);
            }
            return response.json();
        })
        .then(bookings => {
            console.log("Favourites received:", bookings);
            const tmpl = document.getElementById("tmpl-booking-card");
            const listEl = document.getElementById("bookings-list");
            bookings.forEach(b => {
                const clone = document.importNode(tmpl.content, true);
                clone.querySelector(".fv-hotel").textContent    = f.id;
                clone.querySelector(".fc-lc-type").textContent = f.listing.hotel.name;
                listEl.appendChild(clone);
            });
        })
        .catch(error => console.error("Fetch error:", error));
});