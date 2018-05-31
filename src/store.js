import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from "redux";
import thunkMiddlware from "redux-thunk";
import rootReducer from "./reducer";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
        applyMiddleware(
            thunkMiddlware
        )
    )
);

export default store;