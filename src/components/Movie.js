import React from 'react';
import {NavLink} from 'react-router-dom';

import {Card, CardBody, CardTitle, CardImg} from 'reactstrap';

const Movie = ({ movie, loading, hideSummary }) => {
    const parseYear = (stringDate) => {
        const date = new Date(stringDate);
        return date.getFullYear();
    };

    const onErrorImage = (e) => {
        e.target.src = '';
    };

    return (
        <Card>
            <CardImg top src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.post_path}`}
            alt={movie.original_title} onError={onErrorImage} className="movie__card-post">
            </CardImg>
            <h1 className="movie__card-rating">10</h1>
            <CardBody className="movie__card-body">
                <CardTitle className="movie__card-title">
                    <NavLink to="/">
                        {movie.original_title}
                    </NavLink>
                </CardTitle>
                <span className="movie__card-release-date">
                    {parseYear(movie.release_Date) || 'Unknown Released Date'}
                </span>
            </CardBody>
        </Card>
    )
};

export default Movie;