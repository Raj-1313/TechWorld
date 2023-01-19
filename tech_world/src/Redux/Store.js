import {combineReducers,legacy_createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { Auth_reducer } from './AuthRedux/Auth_Reduce'
import {reducer as CartReducer} from "./CartRedux/reducer"
import {reducer as ReduceItemReducer} from "./ReduceItemCart/reducer"
import {reducer as AddItemReducer} from "./AddItemCart/reducer"
import {reducer as DeleteItemReducer} from "./DeleteItemCart/reducer"

const rootReducer= combineReducers({
    Auth_reducer,
    CartReducer,
    ReduceItemReducer,
    AddItemReducer,
    DeleteItemReducer
    })

const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export { store };