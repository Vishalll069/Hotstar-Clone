import { combineReducers, legacy_createStore as createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk"
import { Moviereducer } from "./reducers/Moviereducer";
let cb = combineReducers({Moviereducer})
const store = createStore(cb,applyMiddleware(thunk))
export {store}