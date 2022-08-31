import React from 'react';
import NavBar from '../NavBar/NavBar';
import SearchBar from './SearchBar';

const Header = () => {

    return (
        <div>
            <NavBar></NavBar>
            <div>
                <SearchBar></SearchBar>
            </div>
        </div>
    );
};

export default Header;