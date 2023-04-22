import { combineReducers, legacy_createStore as createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { Moviereducer } from "./reducers/Moviereducer";
import {SearchReducer} from './reducers/searchPage/searchReducer'


let cb = combineReducers({Moviereducer, SearchReducer})
const store = createStore(cb,applyMiddleware(thunk))
export {store}