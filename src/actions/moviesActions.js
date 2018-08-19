import axios from 'axios';
import { GET_MOVIES, GET_GENRES, GET_MOVIES_BY_GENRE } from './actionsType';

export function getMovies(page=1, type='popular') {
    return dispatch => {
        dispatch({ 
            type: GET_MOVIES,
            payload: axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=ce2568d6a4fed20536b4e55364bee6e3&language=en-US&page=${page}`)
        })
    }
}

export function getGenres() {
    return dispatch => {
        dispatch({
            type: GET_GENRES,
            payload: axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=ce2568d6a4fed20536b4e55364bee6e3&language=en-US`)
        })
    }
}

export function getMoviesByGenre(page=1, genreId) {
    return dispatch => {
        dispatch({
            type: GET_MOVIES_BY_GENRE,
            payload: axios.get(`https://api.themoviedb.org/3/genre/${genreId}/movies?api_key=ce2568d6a4fed20536b4e55364bee6e3&page=${page}&language=en-US&include_adult=true&sort_by=created_at.asc`),
            genreId
        });
    }
}