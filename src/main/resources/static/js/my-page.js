// File: /src/main/resources/static/js/my-page.js
document.addEventListener("DOMContentLoaded", function () {
    console.log("Starting fetch for /bookings/user");
    fetch("/bookings/user")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not OK: " + response.status);
            }
            return response.json();
        })
        .then(bookings => {
            console.log("Bookings received:", bookings);
            const tmpl = document.getElementById("tmpl-booking-card");
            const listEl = document.getElementById("bookings-list");
            bookings.forEach(b => {
                const clone = document.importNode(tmpl.content, true);
                clone.querySelector(".bk-id").textContent    = b.id;
                clone.querySelector(".bk-hotel").textContent = b.listing.hotel.name;
                clone.querySelector(".bk-start").textContent = b.startDate;
                clone.querySelector(".bk-end").textContent   = b.endDate;
                clone.querySelector(".bk-status").textContent= b.status;
                listEl.appendChild(clone);
            });
        })
        .catch(error => console.error("Fetch error:", error));
});