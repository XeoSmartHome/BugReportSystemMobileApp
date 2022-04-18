import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import thunk from "redux-thunk";
import authReducer from "./Auth/reducer";


const reducers = combineReducers({
    auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
