
    // 1) grab the container and the template
    const listEl   = document.getElementById('bookings-list');
    const tmpl     = document.getElementById('tmpl-booking-card');

    fetch('bookings')
    .then(r => r.json())
    .then(bookings => {
    bookings.forEach(b => {
        // import the <template> content
        const clone = document.importNode(tmpl.content, true);

        // populate fields
        clone.querySelector('.bk-id')     .textContent = b.id;
        clone.querySelector('.bk-hotel')  .textContent = b.hotelName;
        clone.querySelector('.bk-start')  .textContent = b.startDate;
        clone.querySelector('.bk-end')    .textContent = b.endDate;
        clone.querySelector('.bk-status') .textContent = b.status;

        // append to container
        listEl.appendChild(clone);
    });
})
    .catch(console.error);
