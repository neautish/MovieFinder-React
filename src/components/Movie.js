import React from "react";

import Classes from './Movie.module.css';

const Movie = (props) => {
    return (
        <div
            className={Classes.movie}
        >
            <img className={Classes.img} src={props.poster} alt={props.title} />
            <div className={Classes.movie_details}>
                <h2 className={Classes.movie_details__title}>{props.title}</h2>
                <span className={Classes.movie_details__score}>{props.score}</span>
            </div>
            <div className={Classes.movie_overview}>
                <h3 className={Classes.movie_overview__title}>Overview</h3>
                <p className={Classes.movie_overview__overview}>{props.overview}</p>
            </div>
        </div>
    );
};



export default Movie;