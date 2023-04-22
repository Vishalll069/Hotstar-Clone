import { legacy_createStore as createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk"
import { Moviereducer } from "./reducers/Moviereducer";
import{searchReducer} from "./reducers/searchPage/searchReducer"

let cb = combineReducers({Moviereducer})
const store = createStore(cb,applyMiddleware(thunk))
export {store};