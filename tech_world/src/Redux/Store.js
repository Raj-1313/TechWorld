
import {reducer as CartReducer} from "./CartRedux/reducer"
import {reducer as ReduceItemReducer} from "./ReduceItemCart/reducer"
import {reducer as AddItemReducer} from "./AddItemCart/reducer"
import {reducer as DeleteItemReducer} from "./DeleteItemCart/reducer"
import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Auth_reducer } from "./AuthRedux/Auth_Reduce";
import { Admin_reducer } from "./AdminRedux/Admin_Reducer";
import searhReducer from "./SearchRedux/Search.Reducer";

const rootReducer = combineReducers({
  Auth_reducer,
  Admin_reducer,
  search: searhReducer,
  CartReducer,
  ReduceItemReducer,
  AddItemReducer,
  DeleteItemReducer
});


const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
