import React, { useState, useEffect } from 'react';
import './SearchCity.css'; // Make sure to import the CSS file

const SearchCity = ({ setCurrentCity }) => {
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const [lastSearchedCity, setLastSearchedCity] = useState('');

    // Retrieve the last searched city from local storage when the component mounts
    useEffect(() => {
        const storedCity = localStorage.getItem('lastSearchedCity');
        if (storedCity) {
            setLastSearchedCity(storedCity); // Set the last searched city
        }
    }, []);

    const handleSearch = () => {
        if (city.trim() === '') {
            setError('Please enter a city name');
            return;
        }
        setCurrentCity(city.trim());
        localStorage.setItem('lastSearchedCity', city.trim()); // Save the searched city in local storage
        setLastSearchedCity(city.trim()); // Update the last searched city state
        setCity(''); // Clear the input field after searching
        setError(''); // Clear any previous errors
    };

    return (
        <div className="search">
            <div className="search-input-container">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={lastSearchedCity ? `Last searched: ${lastSearchedCity}` : "Enter city name"}
                    className="search-input"
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch(); // Allow searching on Enter key press
                        }
                    }}
                />
                <span className="search-icon" onClick={handleSearch}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </span>
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default SearchCity;
