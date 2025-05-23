import React, {useState} from "react";
import "../assets/css/common/global.css";
import "../assets/css/registerpage.css";
import {checkEmailAvailability, checkTelephoneAvailability, submitForm} from "../api/userRegistration.js";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
/**
 * RegisterPage component for user account registration.
 *
 * Handles form input, validation, and submission for new user registration.
 *
 * @component
 * @returns {JSX.Element} The rendered registration page.
 */

export default function RegisterPage() {

    const [formValid, setFormValid] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        telephone: '',
        areaCode: ''
    });

    const [showEmailMessage, setShowEmailMessage]= useState(false);
    const [emailMessage, setEmailMessage] = useState('');
    const [emailMessageColor, setEmailMessageColor] = useState('black')

    const [showTelephoneMessage, setShowTelephoneMessage] = useState(false);
    const [telephoneMessage, setTelephoneMessage] = useState('');
    const [telephoneMessageColor, setTelephoneMessageColor] = useState('black')

    const [errorMessage, setErrorMessage] = useState('');

    const [successMessageHidden, setSuccessMessageHidden] = useState(true);

    const [registerFormHidden, setRegisterFormHidden] = useState(false);

    const handleTelephoneBlur = async () => {
      if (formData.telephone.trim().length === 0) return;
      try {
          const available = await checkTelephoneAvailability(formData.telephone);
          if (available) {
              setTelephoneMessage('Telephone number is available');
              setTelephoneMessageColor('green')
              setShowTelephoneMessage(true)
          } else {
              setTelephoneMessage('Telephone number is already registered.');
              setTelephoneMessageColor('red');
              setShowTelephoneMessage(true)
          }
      }  catch (error) {
          console.log('Error while checking telephone availability: ' + error);
          setTelephoneMessage('Error checking telephone availability');
          setTelephoneMessageColor('red');
          setShowTelephoneMessage(true)
      }
      await validateForm()
    };

const handleEmailBlur = async () => {
    if (formData.email.trim().length === 0) return;
    try {
        const available = await checkEmailAvailability(formData.email);
        if (available) {
            setEmailMessage('Email is available');
            setEmailMessageColor('green');
        } else {
            setEmailMessage('Email is already registered.');
            setEmailMessageColor('red');
        }
        setShowEmailMessage(true);
    } catch (error) {
        console.log('Error while checking email availability: ' + error);
        setEmailMessage('Error checking email availability');
        setEmailMessageColor('red');
        setShowEmailMessage(true);
    }
    await validateForm();
};

    const validateForm = async () => {
        if (formData.firstName !== '' &&
        formData.lastName !== '' &&
        formData.email !== '' &&
        formData.password !== '' &&
        formData.telephone !== '' &&
        formData.areaCode !== '' &&
        !emailMessage.includes('already') &&
        !telephoneMessage.includes('already')) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await submitForm(formData.firstName, formData.lastName, formData.email, formData.password, formData.telephone, formData.areaCode);
            if (result) {
                setRegisterFormHidden(true);
                setSuccessMessageHidden(false);
            }
        } catch (error) {
            console.log('Error while submitting form: ' + error);
            setErrorMessage('Error while submitting form');
        }
    }


    return (
        <div className="container">
            <h2>Create new account</h2>

            <div id="errorMessage">{errorMessage}</div>

            <form id="register-form"
                  className={`register-form ${registerFormHidden ? 'register-form-hidden' : ''}`}
            aria-label="Registration form">
                <label htmlFor="firstName">First name</label>
                <input type="text"
                       placeholder="Enter your first name"
                       name="firstName"
                       autoComplete="given-name"
                       value={formData.firstName}
                       onChange={handleInputChange}
                       onBlur={validateForm}
                       required/>
                <label htmlFor="lastName">Last name</label>
                <input type="text"
                       placeholder="Enter your last name"
                       name="lastName"
                       autoComplete="family-name"
                       value={formData.lastName}
                       onChange={handleInputChange}
                       onBlur={validateForm}
                       required/>
                <label htmlFor="email">Email address</label>
                <input type="email"
                       placeholder="Enter your email"
                       name="email"
                       autoComplete="email"
                       value={formData.email}
                       onChange={handleInputChange}
                       onBlur={handleEmailBlur}
                       required/>
                {showEmailMessage && (
                    <p className={'availabilityMessage'} style={{color: emailMessageColor}}>{emailMessage}</p>
                )}
                <div id="emailMessage" className="availabilityMessage"></div>
                <label htmlFor="password">Password</label>
                <input type="password"
                       placeholder="Enter your password"
                       name="password"
                       autoComplete="new-password"
                       minLength="4"
                       value={formData.password}
                       onChange={handleInputChange}
                       onBlur={validateForm}
                       required/>
                <label htmlFor="telephone">Phone number</label>
                <input type="tel"
                       placeholder="Enter your phone number"
                       inputMode="numeric"
                       pattern="[0-9]*"
                       name="telephone"
                       autoComplete="tel"
                       value={formData.telephone}
                       onChange={handleInputChange}
                       onBlur={handleTelephoneBlur}
                       required/>
                {showTelephoneMessage && (
                    <p className={'availabilityMessage'} style={{color: telephoneMessageColor}}>{telephoneMessage}</p>
                )}
                <label htmlFor="areaCode">Area Code</label>
                <input type="text"
                       placeholder="Example: +47"
                       name="areaCode"
                       value={formData.areaCode}
                       onChange={handleInputChange}
                       onBlur={validateForm}
                       required/>
                <button id="submitButton"
                        type="submit"
                        disabled={!formValid}
                        onClick={handleSubmit}
                >Submit</button>
            </form>

            <div id="successMessage" className={`successMessage ${successMessageHidden ? 'successMessage-hidden' : ''}`}>
                <p>User was created successfully!</p>
                <button id="successMessageButton" 
                        onClick={() => navigate('/login')}>Back to
                    login
                </button>
            </div>

            <div className="extra-info">
                <p>By registering, you agree to our <Link to="/login">Terms &amp; Conditions</Link> and <Link to="/login">Privacy
                    Statement</Link>.</p>
            </div>
        </div>


    );

};