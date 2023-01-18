import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Auth_reducer } from "./AuthRedux/Auth_Reduce";
import { Admin_reducer } from "./AdminRedux/Admin_Reducer";

const rootReducer = combineReducers({
  Auth_reducer,
  Admin_reducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
