import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../assets/css/search-bar.css";

export default function SearchBar({ onSearch }) {
    const [formData, setFormData] = useState({
        destination: "",
        checkin: "",
        checkout: "",
        rooms: "1"
    });

    const [isSearching, setIsSearching] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSearching(true);

        console.log("Form data: " + JSON.stringify(formData));

        try {
            if (location.pathname === "/search") {
                // If we're already on the search page, just update results
                await onSearch?.(formData);
            } else {
                // Navigate to search page with query params
                const query = new URLSearchParams(formData).toString();
                console.log("Search query: " + query);
                navigate(`/search?${query}`);
            }
        } catch (error) {
            console.error("Search error:", error);
        } finally {
            setIsSearching(false);
        }
    };

    return (
        <div className="search-container">
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="destination"
                    className="search-bar-input"
                    placeholder="Where to?"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                    aria-label="Destination"
                />

                <button
                    type="submit"
                    className="search-bar-button"
                    disabled={isSearching}
                    aria-label="Search for hotels"
                >
                    {isSearching ? (
                        <>
                            <span className="search-loading-spinner"></span>
                            Searching...
                        </>
                    ) : (
                        "Search Hotels"
                    )}
                </button>
            </form>
        </div>
    );
}