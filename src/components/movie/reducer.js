import {
    ADD_MOVIE,
    SEARCH_MOVIE,
    SEARCH_MOVIE_DONE,
    START_MOVIE_POOLING,
    MOVIE_POOLING_DONE,
    SHOW_MOVIE_DETAILS,
    CLOSE_MOVIE_DETAILS
} from "./actions";

let initialState = {
    movies: [],
    selectedMovie: null,
    isSearching: false,
    isPooling: false,
}

export function moviesReducer(state = initialState, action) {
    const existingMovies = state.movies;
    switch (action.type) {
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...existingMovies, action.movie]
            };
        case SEARCH_MOVIE:
            return {
                ...state,
                movies: [],
                isSearching: true
            };
        case SEARCH_MOVIE_DONE:
            return {
                ...state,
                isSearching: false,
            };
        case START_MOVIE_POOLING:
            return {
                ...state,
                isPooling: true
            };
        case MOVIE_POOLING_DONE:
            return {
                ...state,
                isPooling: false
            };
        case SHOW_MOVIE_DETAILS:
            return {
                ...state,
                selectedMovie: action.movie
            };
        case CLOSE_MOVIE_DETAILS:
            return {
                ...state,
                selectedMovie: null
            };
        default:
            return state
    }
}