import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  form: reduxForm,
  auth: authReducer
});

export default rootReducer;
