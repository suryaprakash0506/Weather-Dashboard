import React, { useState, useEffect } from 'react';
import './SearchCity.css'; 

const SearchCity = ({ setCurrentCity }) => {
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const [lastSearchedCity, setLastSearchedCity] = useState('');

   
    useEffect(() => {
        const storedCity = localStorage.getItem('lastSearchedCity');
        if (storedCity) {
            setLastSearchedCity(storedCity);
        }
    }, []);

    const handleSearch = () => {
        if (city.trim() === '') {
            setError('Please enter a city name');
            return;
        }
        setCurrentCity(city.trim());
        localStorage.setItem('lastSearchedCity', city.trim()); 
        setLastSearchedCity(city.trim()); 
        setCity(''); 
        setError(''); 
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
                            handleSearch(); 
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
