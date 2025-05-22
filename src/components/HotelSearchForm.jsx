import React, {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";

/**
 * HotelSearchForm component for searching hotels based on user input.
 *
 * Displays a form for entering destination, check-in and check-out dates, and number of rooms.
 * On submission, either calls the provided `onSearch` callback or navigates to the search results page with query parameters.
 *
 * Props:
 * - onSearch: Optional callback function to handle search with form data.
 *
 * State:
 * - formData: Object containing `destination`, `checkin`, `checkout`, and `rooms` fields.
 *
 * @component
 * @returns {JSX.Element} The UI for the hotel search form.
 */
export default function HotelSearchForm({onSearch}) {

    const [formData, setFormData] = useState({destination: "", checkin: "", checkout: "", rooms: ""})

    const navigate = useNavigate();
    const location = useLocation();

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data: " + JSON.stringify(formData));
        if (location.pathname === "/search") {
            onSearch?.(formData);
        } else {
            const query = new URLSearchParams(formData).toString();
            console.log("Search query: " + query);
            navigate(`/search?${query}`)
        }
    }

    return (
        <div className="wrapper">
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text"
                       name="destination"
                       className="search-input"
                       placeholder="Where to?"
                       onChange={handleInputChange}
                />
                <input type="date"
                       name="checkin"
                       className="search-input"
                       onChange={handleInputChange}
                />
                <input type="date"
                       name="checkout"
                       className="search-input"
                       onChange={handleInputChange}
                />
                <select name="rooms"
                        className="search-input"
                        onChange={handleInputChange}
                >
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                </select>
                <button type="submit"
                        className="search-button"
                >Search Hotels</button>
            </form>
        </div>
    )
}
