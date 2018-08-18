import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading-bar';

const reducers = {
    loadingBar: loadingBarReducer,
}

const rootReducer = combineReducers(reducers);

export default rootReducer;