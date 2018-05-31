import React from "react";
import ModalDialog from "../../common/modalDialog";
import { Card, Paper, Grid } from "@material-ui/core/"
import StarRatingComponent from "react-star-rating-component";
import * as CONFIG from "../../../configs/constants";
const styles = {
    poster: {
        maxWidth: "100%",
        maxHeight: "auto",
    },
    field: {
        padding: "5px",
        width: "100%"
    }
}

const MovieDetails = (props) => {
    let modal = null;
    const movie = props.movie;
    const poster = (movie && movie.poster_path && movie.full_poster_path) || CONFIG.DEFAULT_POSTER;
    const title = movie && movie.title;
    return (
        <ModalDialog isOpen={!(!movie)} title={title} onClose={props.onClose}>
            {
                movie &&
                (
                    <Grid container>
                        <Grid item lg={5}>
                            <img src={poster} alt={movie.title} style={styles.poster} />
                        </Grid>
                        <Grid item lg={6}>
                            <div style={styles.field}>
                                <h2>{movie.title}</h2>
                                <div style={styles.field}>
                                    <h4>Ratings</h4>
                                    <StarRatingComponent
                                        name="movieRating"
                                        starCount={10}
                                        value={movie.vote_average}
                                    />
                                    ( {movie.vote_count} votes)
                                            </div>
                                <div style={styles.field}>
                                    <h4>Released On</h4>
                                    {movie.release_date}
                                </div>
                                <div style={styles.field}>
                                    <h4>Language</h4>
                                    <label>{movie.original_language.toUpperCase()}</label>
                                </div>
                                <div style={styles.field}>
                                    <h4>Synopsis</h4>
                                    <label>{movie.overview}</label>
                                </div>
                            </div>

                        </Grid>
                    </Grid>
                )
            }
        </ModalDialog>
    );
}

export default MovieDetails;