import { GET_MOVIES, GET_GENRES } from '../actions/actionsType';
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
                genres: action.payload.data.genres,
            }
        }


        case `${GET_MOVIES}_PENDING`: {
            return {
                ...state,
                loading: true,
            };
        }

        case `${GET_MOVIES}_FULFILLED`: {
            return {
                ...state,
                loading: false,
                movies: action.payload.data.results,
                page: action.payload.data.page,
                totalPages: action.payload.data.total_pages,
                totalResults: action.payload.data.total_results,
                genreId: 0
            };
        }

        default: {
            return state;
        }
    }
} 