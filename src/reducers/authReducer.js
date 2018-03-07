import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS
} from "../actions/types";

const auth = (state = [], action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      const { user: { uid: userId } } = action;
      return { ...state, loggedIn: false, userId };
    case LOGIN_USER_FAIL:
      const { error } = action;
      return { ...state, loggedIn: false, error };
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
