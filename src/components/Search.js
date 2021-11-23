import React, { useState } from "react";

import Classes from './Search.module.css';

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const Search = (props) => {
    const [enteredInput, setEnteredInput] = useState('');

    const searchInputChangeHandler = (e) => {
        setEnteredInput(e.target.value);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();

        fetch(SEARCH_API + enteredInput)
            .then(response => response.json())
            .then(data => {
                props.onSearchMovie(data.results, enteredInput)
            });

        setEnteredInput('');
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="searchInput" />
            <input
                id="searchInput"
                className={Classes.search_input}
                type="search"
                placeholder="Search"
                onChange={searchInputChangeHandler}
                value={enteredInput}
            />
        </form>
    );
};

export default Search;