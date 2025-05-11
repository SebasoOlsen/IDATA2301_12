document.addEventListener("DOMContentLoaded", function () {
    var userBtn = document.getElementById("userBtn");
    if (userBtn) {
        userBtn.addEventListener("click", function(e) {
            e.preventDefault();
            fetch("/isLoggedIn", { credentials: "same-origin" })
                .then(function(response) {
                    if (response.ok) {
                        window.location.href = "/myPage";
                    } else {
                        window.location.href = "/login";
                    }
                })
                .catch(function(error) {
                    console.error("Error checking login status:", error);
                    window.location.href = "/login";
                });
        });
    }
});