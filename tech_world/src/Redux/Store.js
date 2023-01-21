import {
  combineReducers,
  legacy_createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { Admin_reducer } from "./AdminRedux/Admin_Reducer";
import LoginReducer from "./LoginRedux/Login.Reducer";
import searhReducer from "./SearchRedux/Search.Reducer";
import signupReducer from "./SignupRedux/Signup.Reducer";

const rootReducer = combineReducers({
  Admin_reducer,
  search: searhReducer,
  signup: signupReducer,
  login: LoginReducer,
});

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  rootReducer,
  composerEnhancer(applyMiddleware(thunk))
);

export { store };