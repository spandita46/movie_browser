import * as CONFIG from "../../configs/constants";
import openSocket from "socket.io-client";
import {
    fetchMovies
} from "./api";

// Action Types
export const ADD_MOVIE = "ADD_MOVIE";
export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const SEARCH_MOVIE_DONE = "SEARCH_MOVIE_DONE";
export const START_MOVIE_POOLING = "START_MOVIE_POOLING";
export const MOVIE_POOLING_DONE = "MOVIE_POOLING_DONE";
export const SHOW_MOVIE_DETAILS = "SHOW_MOVIE_DETAILS";
export const CLOSE_MOVIE_DETAILS = "CLOSE_MOVIE_DETAILS";

// Actions
function addMovie(movie) {
    return {
        type: ADD_MOVIE,
        movie
    };
}

function searchMovie() {
    return {
        type: SEARCH_MOVIE,
    };
}

function searchMovieDone(movie) {
    return {
        type: SEARCH_MOVIE_DONE
    };
}

function startMoviePooling() {
    return {
        type: START_MOVIE_POOLING
    };
}

function moviePoolingDone() {
    return {
        type: MOVIE_POOLING_DONE
    };
}

export function showMovieDetails(movie) {
    return {
        type: SHOW_MOVIE_DETAILS,
        movie
    };
}

export function closeMovieDetails() {
    return {
        type: CLOSE_MOVIE_DETAILS,
    };
}

// Thunks
export function searchMovieAsynch(movieName) {
    return (dispatch) => {
        dispatch(searchMovie());
        return fetchMovies(movieName)
            .then(movie => {
                dispatch(searchMovieDone());
                // Check if returned result is correct result
                // Or not just a object with only socket key on it
                if (movie.id) {
                    // Add this Movie
                    dispatch(addMovie(movie));
                    // Pool For Other Movies
                    dispatch(startMoviePooling(movie));
                    var socket = openSocket(CONFIG.BASE_API_URL);
                    socket.on(`movies.${movie.listening_token}`, movieItem => {
                        // socket event returns string
                        const movie = JSON.parse(movieItem);
                        if (movie.status.toLowerCase() === "active") {
                            dispatch(addMovie(movie));
                        }
                        if (movie.status.toLowerCase() === "terminated") {
                            dispatch(moviePoolingDone());
                        }
                    });
                    socket.on("disconnect", () => {
                        dispatch(moviePoolingDone());
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
}