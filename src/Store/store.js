import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import thunk from "redux-thunk";
import authReducer from "./Auth/reducer";
import bugsReducer from "./Bugs/reducer";


const reducers = combineReducers({
    auth: authReducer,
    bugs: bugsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
