import React, { useState, useEffect } from "react";

import Movie from "./Movie";
import Classes from './Movies.module.css';
import LoadingIcon from '../imgs/loading-icon.gif';
import NoImage from '../imgs/no-image.jpg';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const Movies = (props) => {
    const [movies, setMovies] = useState([]);
    const loadingIconBlock = () => {
        document.querySelector('#loadingIcon').style.display = 'block';
    }
    const loadingIconNone = () => {
        document.querySelector('#loadingIcon').style.display = 'None';
    }

    useEffect(() => {
        // if (props.searchedMovies.length > 0) {
        //     setMovies(props.searchedMovies)
        // } else {
        //     fetch(FEATURED_API)
        //         .then(response => response.json())
        //         .then(data => {
        //             setMovies(data.results);

        //             console.log(data)
        //         });
        // };
        loadingIconBlock();
        fetch(FEATURED_API)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
                loadingIconNone();
            });

        return () => {
            setMovies([]);
        }
    }, [])
    useEffect(() => {
        setMovies(props.searchedMovies);
        if (props.searchedMovies.length > 0) {
            document.querySelector('#resultTerm').style.display = 'block';
        }

        return () => {
            setMovies([]);
        }
    }, [props.searchedMovies])

    return (
        <>
            <span id="resultTerm" style={{ display: 'none', margin: '1rem 2rem' }}>results for: <strong>{props.inputTerm}</strong></span>
            <div className={Classes.movies}>
                {movies.length === 0 ? <span>No results for: <strong>{props.inputTerm}</strong></span> :
                    movies.map(movie => (
                        <Movie
                            title={movie.title}
                            overview={movie.overview}
                            poster={movie.poster_path ? (IMAGE_API + movie.poster_path) : NoImage}
                            score={movie.vote_average}
                            key={movie.id}
                        />
                    ))}
                <img className={Classes.loading_icon} src={LoadingIcon} alt="loading icon" id="loadingIcon" />
            </div>
        </>
    );
};

export default Movies;