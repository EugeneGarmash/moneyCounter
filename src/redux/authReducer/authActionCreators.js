
import testaxios from '../../utils/testaxios';
import axios from 'axios';
import {
  SET_PERSONAL_DATA,

  AUTH_FETCHING,
  AUTH_SUCCESS,
  AUTH_ERROR,

  AUTH_LOGOUT,

  SAVE_USER_SALARY,
} from './authActionTypes';
import { toggleAppSpinner } from '../appReducer/appReducer';
import { closeModal, AUTH_MODAL } from '../modalReducer/modalReducer';
import {saveUserToStorage} from '../../utils/saveUserToStorage';


const key = 'AIzaSyA9xEWlTDvAfOlaBojNIUvUS9zTctNfnUk'

export const setPersonalData = payload => {
  return {
      type: SET_PERSONAL_DATA,
      payload,
  }
}

// export const getSalaries = token => (dispatch, getState) => {
//   const userId = getState().auth.success.localId; // !!!
//   if (!userId) {
//     return;
//   }
//   testaxios.get(`/salaries/${userId}.json`)
//       .then(response => {
//           // console.log("getPersonalData -> response", response.data);
//           return dispatch(setPersonalData(response.data));
//       });
// }

export const setAuthFetching = () => ({ type: AUTH_FETCHING });
export const setAuthSuccess = payload => ({ type: AUTH_SUCCESS, payload, }); // refreshToken
export const setAuthError = payload => ({ type: AUTH_ERROR, payload, });

export const saveUserSalary = userSalaryData => (dispatch, getState) => {
// console.log("🚀 ~ file: authActionCreators.js ~ line 46 ~ userSalaryData", userSalaryData);

  const userEmail = getState().auth.success.email;
  const localId = getState().auth.success.localId;
  // console.log('object', getState().auth.success);
  // console.log("🚀 ~ file: authActionCreators.js ~ line 49 ~ saveUserSalary ~ localId", localId)

  fetch(`https://eugene-s-project-72ed7.firebaseio.com/salaries/${localId}.json`,
    {
      method: 'POST',
      body: JSON.stringify({
        secondsPassed: userSalaryData.secondsPassed,
        salaryValue: userSalaryData.salaryValue,
        counterValue: userSalaryData.counterValue,
      }),
    }
  )
    .then(response => {
      // console.log("🚀 ~ file: authActionCreators.js ~ line 49 ~ response", response);
    })
    .catch(error => {
      // console.log("🚀 ~ file: authActionCreators.js ~ line 52 ~ error", error);
    })
}

export const logout = () => {
  localStorage.removeItem('userData')
  return {
    type: AUTH_LOGOUT,
  }
};

export const getNewToken = () => {
  // success.
}

export const checkUserAuth = () => dispatch => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  // console.log("-------->", userData);
  if (!userData || !userData.token || !userData.expirationDate) {
    // console.log('!!!!!!!!!!!!!!!');
    dispatch(logout());
  } else {
    // console.log('hey');
    const expirationDate = new Date(userData.expirationDate);
    if ( expirationDate > new Date()) {
      dispatch(setAuthSuccess(userData)); // structure!
      // dispatch(checkAuthTimeout(expirationDate.getSeconds() - new Date().getSeconds())); // this is not correct
    } else {
      // get new token!
      // dispatch(logout());
    }
  }
  // return
}

export const checkAuthTimeout = expirationTime => (dispatch) => {
  // console.log("🚀 ~ file: authActionCreators.js ~ line 96 ~ expirationTime", expirationTime);
  setTimeout(() => {
    dispatch(logout());
  }, expirationTime * 1000)
}

export const postPersonalData = (mode, userData) => dispatch => {
  const modeIsSignUp = mode === 'signup';
  const authData = {
    email: userData.email,
    password: userData.password,
    returnSecureToken: true,
  }

  dispatch(toggleAppSpinner());

  const baseURL = modeIsSignUp
    ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`
    : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`

  axios.post(baseURL, authData)
    .then(response => {
      const {
        idToken,
        expiresIn,
        email,
        localId,
      } = response.data;

      // console.log("🚀 ~ file: authActionCreators.js ~ line 134 ~ response.data", response.data)
      // console.log("🚀 ~ file: authActionCreators.js ~ line 133 ~ localId", localId)

      dispatch(setAuthSuccess({ idToken, email, expiresIn, localId }))
      // console.log('??????/')
      dispatch(checkAuthTimeout(expiresIn)); // ?
      dispatch(toggleAppSpinner());
      dispatch(closeModal(AUTH_MODAL));
      const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
      saveUserToStorage({
        token: response.data.idToken,
        expirationDate,
        email,
        localId,
      });
    })
    .catch(error => {
      dispatch(setAuthError(error.response.data.error));
      dispatch(toggleAppSpinner());
    });
  ;
}