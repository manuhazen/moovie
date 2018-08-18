import axios from 'axios';
import { GET_MOVIES, GET_MOVIES_BY_GENRE, GET_GENRES } from './actionsType';

export function getMovies(page=1, type='popular') {
    return dispatch => {
        dispatch({ 
            type: GET_MOVIES,
            url: axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=ce2568d6a4fed20536b4e55364bee6e3&language=en-US&page=${page}`)
        })
    }
}

export function getGenres() {
    return dispatch => {
        dispatch({
            type: GET_GENRES,
            url: axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=ce2568d6a4fed20536b4e55364bee6e3&language=en-US`)
        })
    }
}