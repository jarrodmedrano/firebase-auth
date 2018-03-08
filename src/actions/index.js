import {
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS
} from "./types";

import firebase from "firebase";

export const loginUser = () => async dispatch => {
  console.log("test");
  const res = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data }))
    .catch(() => {
      dispatch({ type: LOGIN_USER_FAIL, payload: error });
    });
};

export const createUser = () => async dispatch => {
  const res = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(dispatch({ type: CREATE_USER_SUCCESS, payload: res.data }))
    .catch(dispatch({ type: CREATE_USER_FAIL, payload: error }));
};

export const loginSuccess = resp => {
  return {
    type: LOGIN_USER_SUCCESS,
    user: resp
  };
};

export const loginFail = error => {
  return {
    type: LOGIN_USER_FAIL,
    error
  };
};

export const createUserSuccess = resp => {
  return {
    type: CREATE_USER_SUCCESS,
    user: resp
  };
};

export const createUserFail = error => {
  return {
    type: CREATE_USER_FAIL,
    error
  };
};
