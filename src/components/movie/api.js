import fetchWrapper from "../../core/asynchCallHelper";
import * as CONFIG from "../../configs/constants";

export function fetchMovies(query) {
    if (!query) {
        throw "Search Query Is Missing!!";
    }

    let queryURL = `${CONFIG.BASE_API_URL}/api/v1/movies?query=${query}`;

    return fetchWrapper.Get({
        url: queryURL
    });
}