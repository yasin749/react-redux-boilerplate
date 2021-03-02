import {combineReducers} from 'redux';

/* Reducers */
import postReducer from './posts/postReducer';

function reducers() {
    const reducers = {
        postState: postReducer,
    };

    return combineReducers(reducers)
}

export default reducers();
