import {
    GET_ACTOR,
    GET_ACTOR_MOVIES
} from '../actions/actionsType';

const initialState = {
    loading: false,
    actor: {},
    movies: []
};

export default (state=initialState, action = {} ) => {
    switch (action.type) {

        case `${GET_ACTOR}_PENDING`: {
            return {
                ...state,
                loading: true,
            }
        }

        case `${GET_ACTOR}_FULFILLED`: {
            return {
                ...state,
                actor: action.payload.data
            }
        }

        case `${GET_ACTOR_MOVIES}_PENDING`: {
            return {
                ...state,
                loading: true,
            }
        }

        case `${GET_ACTOR_MOVIES}_FULFILLED`: {
            return {
                ...state,
                movies: action.payload.data.cast
            }
        }

        default: {
            return state
        }
    }
};