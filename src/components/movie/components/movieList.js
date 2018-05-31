import React from "react";
import Grid from "@material-ui/core/Grid";
import MovieCard from "./movieCard"

const MovieList = (props) => {
  const movies = props.movies;
  const movieColumns = movies && movies.length ? movies.map(movie =>
    <Grid item xs={3} key={movie.id.toString()}>
      <MovieCard movie={movie} onClick={props.onClick}/>
    </Grid>
  ) : null;

  return (
    <Grid container spacing={8} alignItems="center" direction="row" justify="flex-start">
      {movieColumns}
    </Grid>
  );
}

export default MovieList;
