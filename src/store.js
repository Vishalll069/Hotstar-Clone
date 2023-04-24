import { combineReducers, legacy_createStore as createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { Moviereducer } from "./reducers/Moviereducer";
import {SearchReducer} from './reducers/searchPage/searchReducer'
import { LoginReducer } from "./reducers/loginReducer";

let cb = combineReducers({Moviereducer, SearchReducer, LoginReducer})
const store = createStore(cb,applyMiddleware(thunk))
export {store};