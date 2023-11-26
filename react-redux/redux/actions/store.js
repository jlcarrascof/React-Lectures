import { createStore, compose } from "redux";
import reducer from "./reducer";

const composeDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeDevTools());


