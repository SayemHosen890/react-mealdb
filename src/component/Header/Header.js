import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <a href="/Foods">Foods</a>
                <a href="/Fav Food">Favortite Food</a>
                <a href="/About">About Food</a>
                <a href="/Buy Food">Buy Food</a>
            </nav>
        </div>
    );
};

export default Header;