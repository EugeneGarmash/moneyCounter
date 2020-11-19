
import testaxios from '../../utils/testaxios';
import axios from 'axios';
import {
  SET_PERSONAL_DATA,

  AUTH_FETCHING,
  AUTH_SUCCESS,
  AUTH_ERROR,

  AUTH_LOGOUT,
} from './authActionTypes';
import { toggleAppSpinner } from '../appReducer/appReducer';
import { closeModal, AUTH_MODAL } from '../modalReducer/modalReducer';


const key = 'AIzaSyA9xEWlTDvAfOlaBojNIUvUS9zTctNfnUk'

export const setPersonalData = payload => {
  return {
      type: SET_PERSONAL_DATA,
      payload,
  }
}

export const getSalaries = token => (dispatch, getState) => {
  const userId = getState().auth.success.localId;
  if (!userId) {
    return;
  }
  testaxios.get(`/salaries/${userId}.json`)
      .then(response => {
          // console.log("getPersonalData -> response", response.data);
          return dispatch(setPersonalData(response.data));
      });
}

export const setAuthFetching = () => ({
  type: AUTH_FETCHING,
});

export const setAuthSuccess = payload => ({
  type: AUTH_SUCCESS,
  payload,
});

export const setAuthError = payload => ({
  type: AUTH_ERROR,
  payload,
});

export const logout = () => ({
  type: AUTH_LOGOUT,
});

export const checkAuthTimeout = expirationTime => (dispatch) => {
  setTimeout(() => {
    dispatch(logout());
  }, expirationTime * 1000)
}

export const postPersonalData = (mode, data) => dispatch => {
  const modeIsSignUp = mode === 'signup';
  const authData = {
    email: data.email,
    password: data.password,
    returnSecureToken: true,
  }

  dispatch(toggleAppSpinner());

  const baseURL = modeIsSignUp
    ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`
    : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`

  axios.post(baseURL, authData)
    .then(response => {
      dispatch(setAuthSuccess(response.data))
      dispatch(checkAuthTimeout(response.data.expiresIn));
      dispatch(toggleAppSpinner());
      dispatch(closeModal(AUTH_MODAL));
    })
    .catch(error => {
      dispatch(setAuthError(error.response.data.error));
      dispatch(toggleAppSpinner());
    });
  ;
}