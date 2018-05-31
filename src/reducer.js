import {
    combineReducers
} from "redux";
import {
    moviesReducer
} from "./components/movie/reducer";

const rootReducer = combineReducers({
    moviesReducer,
})

export default rootReducer;