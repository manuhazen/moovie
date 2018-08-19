import {
    GET_MOVIE_DETAILS,
    GET_MOVIE_VIDEOS,
    GET_RELATED_MOVIES,
    GET_MOVIE_CASTING,
    GET_MOVIE_REVIEWS,
    CLEAN_MOVIE_STATE,
    GET_MOVIE_ACTORS
} from '../actions/actionsType';

const initialSstate = {
    loading: false,
    movie: {},
    genres: [],
    productionCompanies: [],
    videos: [],
    trailer: {},
    reviews: [],
    relatedMovies: [],
    actors: [],
};

export default (state=initialSstate, action={}) => {
    switch (action.type) {

        case `${GET_MOVIE_DETAILS}_PENDING`: {
            return {
                ...state,
                loading: true,
            };
        }

        case `${GET_MOVIE_DETAILS}_FULFILLED`: {
            return {
                ...state,
                loading: false,
                movie: action.payload.data,
                genres: action.payload.data.genres,
                productionCompanies: action.payload.data.production_companies
            }
        }

        case `${GET_MOVIE_VIDEOS}_PENDING`: {
            return {
                ...state,
                loading: true,
            };
        }

        case `${GET_MOVIE_VIDEOS}_FULFILLED`: {
            const trailer = action.payload.data.results.filter(video => video.site === 'YouTube')[0];
            return {
                ...state,
                loading: false,
                videos: action.payload.data.results,
                trailer: trailer
            };
        }

        case `${GET_MOVIE_REVIEWS}_PENDING`: {
            return {
                ...state,
                loading: true,
            };
        }

        case `${GET_MOVIE_REVIEWS}_FULFILLED`: {
            return {
                ...state,
                loading: false,
                reviews: action.payload.data.results,
            }
        }

        case `${GET_RELATED_MOVIES}_PENDING`: {
            return {
                ...state,
                loading: true,
            };
        }

        case `${GET_RELATED_MOVIES}_FULFILLED`: {
            return {
                ...state,
                loading: false,
                relatedMovies: action.payload.data.results,
            }
        }


        case `${GET_MOVIE_ACTORS}_PENDING`: {
            return {
                ...state,
                loading: true,
            }
        }

        case `${GET_MOVIE_ACTORS}_FULFILLED`: {
            return {
                ...state,
                loading: false,
                actors: action.payload.data.cast.splice(0, 10)
            }
        }

        case CLEAN_MOVIE_STATE: {
            return {
                ...state,
                loading: false,
                movie: {},
                genres: [],
                productionCompanies: [],
                videos: [],
                trailer: {},
                reviews: [],
                relatedMovies: [],
                actors: [],
            }
        }

        default: {
            return state;
        }
    }
}