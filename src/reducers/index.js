import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading-bar';

import MoviesReducer from './movies-reducers';

const reducers = {
    loadingBar: loadingBarReducer,
    moviesStore: MoviesReducer,
}

const rootReducer = combineReducers(reducers);

export default rootReducer;