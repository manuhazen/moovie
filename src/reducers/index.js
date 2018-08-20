import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading-bar';

import MoviesReducer from './movies-reducers';
import MovieReducer from './movie-reducers';
import ActorReducer from './actor-reducers';

const reducers = {
    loadingBar: loadingBarReducer,
    moviesStore: MoviesReducer,
    movieStore: MovieReducer,
    actorStore: ActorReducer,
}

const rootReducer = combineReducers(reducers);

export default rootReducer;