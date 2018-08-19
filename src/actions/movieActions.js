import axios from 'axios';

import {
    GET_MOVIE_DETAILS,
    GET_MOVIE_VIDEOS,
    GET_RELATED_MOVIES,
    GET_MOVIE_ACTORS,
    GET_MOVIE_REVIEWS,
    CLEAN_MOVIE_STATE
} from './actionsType';

export function getMovie(id) {
    return dispatch => {
        dispatch({
            type: GET_MOVIE_DETAILS,
            payload: axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ce2568d6a4fed20536b4e55364bee6e3&language=en-US`)
        })
    }
};

export function getMovieVideos(id) {
    return dispatch => {
        dispatch({
            type: GET_MOVIE_VIDEOS,
            payload: axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=ce2568d6a4fed20536b4e55364bee6e3&language=en-US`)
        })
    }
};

export function getMoviesReviews(id) {
    return dispatch => {
        dispatch({
            type: GET_MOVIE_REVIEWS,
            payload: axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=ce2568d6a4fed20536b4e55364bee6e3&language=en-US`)
        })
    }
};

export function getRelatedMovies(id) {
    return dispatch => {
        dispatch({
            type: GET_RELATED_MOVIES,
            payload: axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=ce2568d6a4fed20536b4e55364bee6e3&language=en-US`)
        })
    }
};

export function getMovieActors(id) {
    return dispatch => {
        dispatch({
            type: GET_MOVIE_ACTORS,
            payload: axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=ce2568d6a4fed20536b4e55364bee6e3&language=en-US`)
        })
    }
};

export function cleanMovieState() {
    return dispatch => {
        dispatch({
            type: CLEAN_MOVIE_STATE,
            payload: {},
        })
    }
};