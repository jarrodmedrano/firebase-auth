import {
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS
} from "./types";

import firebase from "firebase";

export const loginUser = () => async dispatch => {
  const res = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
    });
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

const auth = (state = [], action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      const { user: { uid: userId } } = action;
      return { ...state, loggedIn: true, userId };
    case CREATE_USER_FAIL:
      const { error } = action;
      return { ...state, loggedIn: false, error };
    default:
      return state;
  }
};
