import React, {useEffect, useState} from "react";
import HotelSearchForm from "../components/HotelSearchForm.jsx";
import {useSearchParams} from "react-router-dom";
import HotelCard from "../components/HotelCard.jsx";
import {searchHotels} from "../service/api/hotelAPI.js";

export default function HotelSearchResultsPage() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [hotels, setHotels] = useState([]);


    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);
        fetchHotels(params).then(() => console.log("Hotels fetched"));
    }, [searchParams]);

    const fetchHotels = async (params) => {
        try {
            const data = await searchHotels(params);
            setHotels(data);
        } catch (error) {
            console.error("Error fetching hotels:", error);
        }
    }

    const handleNewSearch = (formData) => {
        const query = new URLSearchParams(formData).toString();
        setSearchParams(query);
    }

    return (
        <div className="wrapper">
            <section className="search-container">
                <HotelSearchForm onSearch={handleNewSearch}/>
            </section>

            <section className="results-info">
                <h2>Search Results</h2>
                <p>Showing available hotels from your project file.</p>
            </section>

            <li className="results-list">
                {hotels.map((hotel) => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                ))}
            </li>
        </div>
    )


}