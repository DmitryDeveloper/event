import request, { setToken, unsetToken } from '../../utils/request';
import axios from 'axios';
import appConfig from '../../config';
import { ERROR,
    SET_CURRENT_USER,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS } from './types';

export const example = (user, history) => dispatch =>
    request
        .post('/api/users/register', user)
        .then(() => history.push('/login'))
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err.response.data
            });
        });

export const setCurrentUser = decodedUser => {
    localStorage.setItem('roleCurrentUser', decodedUser.role);
    localStorage.setItem('userId', decodedUser.id);
    return {
        type: SET_CURRENT_USER,
        payload: decodedUser
    };
};

// Login user

export function loginUser(history, data) {

    const endpoint = 'api/login';

    return dispatch => {
        dispatch(requestLogin(data));
        return axios({
            method: 'post',
            url: `${appConfig.apiUrl}/${endpoint}`,
            data
        })
            .then(res => {
                const {token} = res.data;
                setToken(token);
                dispatch(receiveLogin(token));
                history.push('/');
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: ERROR,
                    payload: err.response.data
                });
            });
    }
}

function requestLogin(creds) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    }
}

function receiveLogin(token) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: token
    }
}

//Logout user

export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout());
        unsetToken();
        localStorage.removeItem('roleCurrentUser');
        localStorage.removeItem('userId');
        dispatch(receiveLogout());
    }
}

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}

//Registration

export function register(data, history) {

    const endpoint = 'api/register';

    return dispatch => {
        return axios({
            method: 'post',
            url: `${appConfig.apiUrl}/${endpoint}`,
            data
        })
            .then(res => {
                const {token} = res.data;
                setToken(token);
                dispatch(receiveLogin(token));
                history.push('/home');
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: ERROR,
                    payload: err.response.data
                });
            });
    }
}