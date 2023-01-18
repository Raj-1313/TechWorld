import {combineReducers,legacy_createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { Auth_reducer } from './AuthRedux/Auth_Reduce'
import { reducer as AppReducer} from "./AppReducer/reducer"

const rootReducer= combineReducers({
    Auth_reducer,AppReducer
    })

const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export { store };