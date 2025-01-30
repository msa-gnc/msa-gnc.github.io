import { combineReducers, legacy_createStore } from "redux";
import counterReducer from "./reducers/counterReducer";

const reducers = combineReducers({
    counterReducer:counterReducer
})

export const store = legacy_createStore(reducers)