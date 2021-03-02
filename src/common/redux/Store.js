import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';

/* Redux */
import middlewares from './middlewares';
import reduces from './reducers';

/* Variables */
const COMPOSER = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const INITIAL_STATE = window['__PRELOADED_STATE__'] || {};

const store = createStore(
    reduces,
    INITIAL_STATE,
    COMPOSER(applyMiddleware(...middlewares))
);

const Store = ({
   children,
}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export {
    store,
}
export default Store;
