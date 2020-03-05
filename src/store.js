import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(rootReducer, composeWithDevTools())

window._store = store;
