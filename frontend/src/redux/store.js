import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { init as initRequest } from './../utils/request';
import { apiStartLoading, apiEndLoading, throwError } from './actions/common';
import rootReducer from './reducers';

const inititalState = {};

const store = createStore(
    rootReducer,
    inititalState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const requestInitOptions = {
    reduxStore: store,
    initRequestCallback: apiStartLoading,
    finishRequestCallback: apiEndLoading,
    throwError
};

initRequest(requestInitOptions);

export default store;
