import React from "react";

import Classes from './Header.module.css';
import Search from "./Search";

const Header = (props) => {
    const moviesFromSearch = (searchedMovies, input) => {
        props.onSearchMovies(searchedMovies, input)
    }

    return (
        <header className={Classes.header}>
            <nav className={Classes.main_nav}>
                <h1 className={Classes.logo}>MovieFinder</h1>
                <Search onSearchMovie={moviesFromSearch} />
            </nav>
        </header>
    );
};

export default Header;