import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS
} from '../actions/types'

const initialState = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('accessToken') ? true : false
};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
                isAuthenticated: false,
                user: action.creds
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: true,
                errorMessage: ''
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isFetching: true,
                isAuthenticated: false
            };
        default:
            return state
    }
}
