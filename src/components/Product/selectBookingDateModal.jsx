import React, {useEffect, useState} from "react";
import "../../service/api/bookingAPI.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {getBookedDates} from "../../service/api/bookingAPI.js";
import "../../assets/css/select-booking-date-modal.css";

const selectBookingDateModal = ({ listingId, onClose }) => {

    const [bookedDates, setBookedDates] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

    };

    useEffect(() => {
        const fetchBookedDates = async () => {
            try {
                setIsLoading(true);
                const dates = await getBookedDates(listingId)
                setBookedDates(dates)
            } catch (error) {
                setError('Failed to fetch booked dates.');
                console.error('Error fetching booked dates: ', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchBookedDates();
    }, [listingId]);

    const getDisabledDates = () => {
        let disabled = [];
        bookedDates.forEach(booking => {
            const start = new Date(booking.startDate);
            const end = new Date(booking.endDate);
            let current = new Date(start);

            while (current <= end) {
                disabled.push(new Date(current));
                current.setDate(current.getDate() + 1);
            }
        });
        return disabled;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h1>Select a Date</h1>
                    <button className="close-button" onClick={onClose}></button>
                </div>
                <div className="modal-body">
                    {isLoading && <p>Loading available dates...</p>}
                    {error && (
                        <div className="error-message">
                            <p>{error}</p>
                        </div>
                    )}
                    {!isLoading && !error && (
                        <div className="date-selection">
                            <DatePicker
                                selected={startDate}
                                onChange={onChange}
                                startDate={startDate}
                                endDate={endDate}
                                excludeDates={getDisabledDates()}
                                selectsRange
                                inline
                                minDate={new Date()}
                                monthsShown={2}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Select date range"
                            />
                        </div>

                    )}

                    <div className="modal-footer">
                        <button className="confirm-button"
                                disabled={isLoading || error.length > 0}
                                onClick={handleSubmit}
                        >Book dates</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default selectBookingDateModal;
