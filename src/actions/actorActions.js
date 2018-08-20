import axios from 'axios';
import {
    GET_ACTOR,
    GET_ACTOR_MOVIES
} from './actionsType';

export function getActorProfile(actor_id) {
    return dispatch => {
        dispatch({
            type: GET_ACTOR,
            payload: axios.get(`https://api.themoviedb.org/3/person/${actor_id}?api_key=ce2568d6a4fed20536b4e55364bee6e3&language=en-US`)
        });
    }
}

export function getActorMovies(actor_id) {
    return dispatch => {
        dispatch({
            type: GET_ACTOR_MOVIES,
            payload: axios.get(`https://api.themoviedb.org/3/person/${actor_id}/movie_credits?api_key=ce2568d6a4fed20536b4e55364bee6e3&language=en-US`)
        })
    }
}