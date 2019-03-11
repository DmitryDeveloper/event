import { combineReducers } from 'redux';
import commonReducer from './common';
import authReducer from './auth';

export default combineReducers({
    common: commonReducer,
    auth: authReducer,
});
