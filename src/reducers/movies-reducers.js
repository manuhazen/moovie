import { GET_MOVIES, GET_GENRES, GET_MOVIES_BY_GENRE } from '../actions/actionsType';
const initialState = {
    genres: [],
    loading: false,
    movies: [],
    page: 1,
    totalPages: 1,
    totalResults: 0,
    genreId: 0
};

export default (state=initialState, action={}) => {
    switch (action.type) {

        // Getting the Genres and Movies Data
        // All requests have a Pending state that's mean is in progress
        // And the Ready state is the request is ready

        case `${GET_GENRES}_PENDING`: {
            return {
                ...state,
                loading: true,
            };
        }

        case `${GET_GENRES}_READY`: {
            return {
                ...state,
                loading: false,
                genres: action.url.data.genres,
            }
        }


        case `${GET_MOVIES}_PENDING`: {
            return {
                ...state,
                loading: true,
            };
        }

        case `${GET_MOVIES}_READY`: {
            return {
                ...state,
                loading: false,
                movies: action.url.data.results,
                page: action.url.data.page,
                totalPages: action.url.data.total_pages,
                totalResults: action.url.data.total_results,
                genreId: 0
            };
        }

        default: {
            return state;
        }
    }
} 