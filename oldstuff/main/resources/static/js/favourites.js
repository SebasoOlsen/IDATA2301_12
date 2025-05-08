// File: `IDATA2301_12/src/main/resources/static/js/favourites.js`
document.addEventListener("DOMContentLoaded", function () {
    console.log("Starting fetch for /favourites/user");
    fetch("/favourites/user")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not OK: " + response.status);
            }
            return response.json();
        })
        .then(favourites => {
            console.log("Favourites received:", favourites);
            const tmpl = document.getElementById("tmpl-favourites-card");
            const listEl = document.getElementById("favourites-list");
            favourites.forEach(f => {
                const clone = document.importNode(tmpl.content, true);
                const hotelNameEl = clone.querySelector(".fv-hotel-name");
                const locTypeEl = clone.querySelector(".fv-lc-type");
                const cityEl = clone.querySelector(".fv-lc-city");
                const countryEl = clone.querySelector(".fv-lc-country");
                const hotelImageEl = clone.querySelector(".card-image img");

                if (hotelNameEl) hotelNameEl.textContent = f.listing.hotel.name;
                if (locTypeEl) locTypeEl.textContent = f.listing.hotel.roomTypes;
                if (cityEl) cityEl.textContent = f.listing.hotel.city;
                if (countryEl) countryEl.textContent = f.listing.hotel.country;
                if (hotelImageEl && f.listing.hotel.id && f.listing.hotel.name) {
                    const formattedName = f.listing.hotel.name.replace(/\s+/g, '-');
                    const imageSrc = `/pictures/${f.listing.hotel.id}-${formattedName}-hotel.jpg`;
                    console.log("Querying image source:", imageSrc);
                    hotelImageEl.src = imageSrc;
                }
                listEl.appendChild(clone);
            });
        })
        .catch(error => console.error("Fetch error:", error));
});