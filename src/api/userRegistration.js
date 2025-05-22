const API_URL = 'http://localhost:8080/api/users';

/**
 * Check if an email is available for registration.
 *
 * @async
 * @function checkEmailAvailability
 * @param {string} email - The email address to check.
 * @returns {Promise<boolean>} True if the email is available, false otherwise.
 */
export async function checkEmailAvailability(email) {
    const response = await fetch(`${API_URL}/public/check_email?email=${encodeURIComponent(email)}`);
    return response.ok;
}

/**
 * Check if a telephone number is available for registration.
 *
 * @async
 * @function checkTelephoneAvailability
 * @param {string} telephone - The telephone number to check.
 * @returns {Promise<boolean>} True if the telephone number is available, false otherwise.
 */
export async function checkTelephoneAvailability(telephone) {
    const response = await fetch(`${API_URL}/public/check_telephone?telephone=${encodeURIComponent(telephone)}`);
    return response.ok;
}

/**
 * Submit a user registration form to the server.
 *
 * @async
 * @function submitForm
 * @param {string} firstName - User's first name.
 * @param {string} lastName - User's last name.
 * @param {string} email - User's email address.
 * @param {string} password - User's password
 * @param {string} telephone - User's telephone number.
 * @param {string} areaCode - User's area code.
 * @returns {Promise<Response|undefined>} The fetch API response object or undefined if an error occurs.
 */
export async function submitForm(firstName, lastName, email, password, telephone, areaCode) {
    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        telephone: telephone,
        areaCode: areaCode
    };

    try {
        return await fetch(`${API_URL}/public/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    } catch (error) {
        console.error('Error while sending message to server: ', error);
    }
}
