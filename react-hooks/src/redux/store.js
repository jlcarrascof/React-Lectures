import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
import ThunkMiddleware  from "redux-thunk";

const composeDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeDevTools(applyMiddleware(ThunkMiddleware)));

export default store;