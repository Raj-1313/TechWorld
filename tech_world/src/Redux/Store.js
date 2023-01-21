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
import {reducer as AppReducer} from "./AppReducer/reducer";
import {reducer as CartReducer} from "./CartRedux/reducer"
import {reducer as ReduceItemReducer} from "./ReduceItemCart/reducer"
import {reducer as AddItemReducer} from "./AddItemCart/reducer"
import {reducer as DeleteItemReducer} from "./DeleteItemCart/reducer"

const rootReducer = combineReducers({
  signup: signupReducer,
  login: LoginReducer,
  AppReducer,
  Admin_reducer,
  search: searhReducer,
  CartReducer,
  ReduceItemReducer,
  AddItemReducer,
  DeleteItemReducer
});

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  rootReducer,
  composerEnhancer(applyMiddleware(thunk))
);

export { store };