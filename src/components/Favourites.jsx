import React from 'react';
import axios from 'axios';
import './Favourites.css';

const Favorites = ({ favorites, setFavorites, setCurrentCity }) => {
    const addFavorite = async (city) => {
        if (!city) return; 
        try {
            const response = await axios.post('http://localhost:3000/favorites', { city });
           
            if (!response.data || !response.data.city) {
                console.error("Unexpected response:", response);
            }
            setFavorites([...favorites, response.data]);
        } catch (error) {
            console.error('Error adding favorite city:', error);
        }
    };

    const removeFavorite = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/favorites/${id}`);
            setFavorites(favorites.filter((fav) => fav.id !== id));
        } catch (error) {
            console.error('Error removing favorite city:', error);
        }
    };

    return (
        <div className="favorites">
            <h3 className="favorites-title">Favorite Cities</h3>
            <ul className="favorites-list">
                {favorites.length > 0 ? (
                    favorites.map((fav) => (
                        <li key={fav.id} className="favorites-item">
                            <span onClick={() => setCurrentCity(fav.city)} className="favorite-city">{fav.city}</span>
                            <button 
                                onClick={() => removeFavorite(fav.id)} 
                                className="remove-button"
                                title="Remove from favorites"
                            >
                                <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </li>
                    ))
                ) : (
                    <li className="no-favorites">No favorite cities yet.</li>
                )}
            </ul>
            <button className="add-favorite-button" onClick={() => {
                const city = prompt('Enter city name to add to favorites:');
                addFavorite(city);
            }}>
                Add Favorite
            </button>
        </div>
    );
};

export default Favorites;
