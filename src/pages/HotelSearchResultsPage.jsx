import React, { useEffect, useState } from "react";
import SearchBar from "../components/HotelSearchForm.jsx";
import { useSearchParams } from "react-router-dom";
import HotelCard from "../components/HotelCard.jsx";
import { searchHotels } from "../service/api/hotelAPI.js";
import "../assets/css/searchResultsDisplay.css";

export default function SearchResultsDisplay() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);
        fetchHotels(params).then(() => console.log("Hotels fetched"));
    }, [searchParams]);

    const fetchHotels = async (params) => {
        try {
            setLoading(true);
            const data = await searchHotels(params);
            setHotels(data);
        } catch (error) {
            console.error("Error fetching hotels:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleNewSearch = (formData) => {
        const query = new URLSearchParams(formData).toString();
        setSearchParams(query);
    };

    return (
        <div className="search-results-wrapper">
            <SearchBar onSearch={handleNewSearch} />

            <section className="search-results-info">
                <h2>Search Results</h2>
                <p>Showing {hotels.length} available hotels from your search.</p>
            </section>

            {/* Using the same featured-deals class as homepage for consistent styling */}
            <section className={`featured-deals ${loading ? 'loading' : ''}`}>
                {hotels.length === 0 && !loading ? (
                    <div className="no-results">
                        <h3>No hotels found</h3>
                        <p>Try adjusting your search criteria</p>
                    </div>
                ) : (
                    hotels.map((hotel) => (
                        <HotelCard key={hotel.id} hotel={hotel} />
                    ))
                )}
            </section>
        </div>
    );
}