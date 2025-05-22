import {Urls} from "../service/api/Urls.js";

const BASE_URL = `${Urls.BASE}/api/users`;

//Check email availability using API call.
export async function checkEmailAvailability(email) {
    const response = await fetch(`${BASE_URL}/public/check_email?email=${encodeURIComponent(email)}`);
    return response.ok;
}

//Check telephone number availablity using API call.
export async function checkTelephoneAvailability(telephone) {
    const response = await fetch(`${BASE_URL}/public/check_telephone?telephone=${encodeURIComponent(telephone)}`);
    return response.ok;
}

//Submit user for registration
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
        return await fetch(`${BASE_URL}/public/register`, {
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