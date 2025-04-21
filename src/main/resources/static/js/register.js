
console.log("register.js loaded");

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded");

    const form = document.getElementById("register-form");

    form.addEventListener('submit', async function(event){
        event.preventDefault();

        const errorMessageDiv = document.getElementById('errorMessage');
        errorMessageDiv.style.display = 'none';
        errorMessageDiv.textContent = '';

        const user = {
            firstName: document.getElementById('firstname').value,
            lastName: document.getElementById('lastname').value,
            email: document.getElementById('email').value,
            password:document.getElementById('password').value,
            telephone: document.getElementById('telephone').value,
            areaCode: document.getElementById('areacode').value
        };

        try {
            const response = await fetch('http://localhost:8080/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if(response.ok) {
                document.getElementById('register-form').style.display = 'none';
                document.getElementById('successMessage').style.display = 'block';
            } else {
                const errorText = await response.text();
                errorMessageDiv.textContent = 'Failed to create user: ' + errorText;
                errorMessageDiv.style.display = 'block';
            }
        } catch (error) {
            console.error('Error: ', error);
            errorMessageDiv.textContent = 'An unexpected error occurred.';
            errorMessageDiv.style.display = 'block';
        }

    });

});

