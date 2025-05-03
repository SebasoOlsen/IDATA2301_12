
console.log("register.js loaded");

//Wait for DOMContent to load.
//Place functions that interact with the DOM inside this event listener.
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded");

    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = true;


    const form = document.getElementById("register-form");

    //Submit event (submit button clicked)
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

    //Triggers when the email input field loses focus
    document.getElementById('email').addEventListener('blur', async function() {
        const email = this.value;
        const emailValid = await checkEmailAvailability(email);
        if (emailValid) {
            displayFieldMessage('email', "Email is available.", 'green');
        } else {
            displayFieldMessage('email', 'Email is already registered.', 'red');
        }
    });

    //Triggers when the telephone input field loses focus
    document.getElementById('telephone').addEventListener('blur', async function() {
       const telephone = this.value;
       const telephoneAvailable = await checkTelephoneAvailability(telephone);
       if (telephoneAvailable) {
           displayFieldMessage('telephone', 'Telephone number is available.', 'green');
       } else {
           displayFieldMessage('telephone', 'Telephone number is already registered.', 'red');
       }
    });

    //Check email availability using API call.
    async function checkEmailAvailability(email) {
        const response = await fetch(`/users/check_email?email=${encodeURIComponent(email)}`);
        return response.ok;
    }

    //Check telephone number availablity using API call.
    async function checkTelephoneAvailability(telephone) {
        const response = await fetch(`/users/check_telephone?telephone=${encodeURIComponent(telephone)}`);
        return response.ok;
    }

    function displayFieldMessage(field, message, color) {
        const fieldElement = document.getElementById(`${field}Message`);
        if (fieldElement) {
            fieldElement.innerText = message;
            fieldElement.style.display = 'block';
            fieldElement.style.color = color;
        }
    }

    function clearFieldMessages() {
        const fields = ['email', 'password'];
        fields.forEach(field => {
            const fieldElement = document.getElementById(`${field}Message`);
            if (fieldElement) {
                fieldElement.innerText = '';
                fieldElement.style.display = 'none';
                fieldElement.style.color = 'black';
            }
        })
    }

    function validateForm() {
        console.log('Validating form...')

        const firstName = document.getElementById('firstname').value;
        const lastName = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const telephone = document.getElementById('telephone').value;
        const areaCode = document.getElementById('areacode').value;

        const isFormValid =
            firstName !== '' &&
            lastName !== '' &&
            email !== '' &&
            password !== '' &&
            telephone !== '' &&
            areaCode !== '' &&
            !document.getElementById('emailMessage').innerText.includes('already') &&
            !document.getElementById('telephoneMessage').innerText.includes('already');

        console.log('Form valid result: ', isFormValid)
        submitButton.disabled = !isFormValid;
    }

    //Validate form whenever a user interacts with the form.
    form.addEventListener('input', validateForm);

    //Check form on page load.
    validateForm();
});




