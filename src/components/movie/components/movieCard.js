import React from "react";
import { Card, CardTitle, CardMedia, CardContent, Typography } from "@material-ui/core";
import * as CONFIG from "../../../configs/constants";
const styles = {
  cardTypography: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    margin: 0
  },
  cardContent: {
    overflow: "hidden",
    padding: 0
  },
  card: {
    cursor: "pointer",
    height: 400,
    overflow: "hidden",
    padding: 0
  },
  bgImage: {
    width: "100%",
    height: "330px",
  }
};

const MovieCard = (props) => {
  const movie = props.movie;
  const poster = (movie && movie.poster_path && movie.full_poster_path) || CONFIG.DEFAULT_POSTER;
  const handleClick = () =>{
    props.onClick(movie);
  }

  return (
    <Card style={styles.card} onClick={handleClick}>
      <CardContent style={styles.cardContent}>
        <img src={poster} alt={movie.title} style={styles.bgImage} />
        <h3 style={styles.cardTypography}>
          {movie.title}
        </h3>
        <p style={styles.cardTypography}>
          {movie.overview}
        </p>
      </CardContent>
    </Card>
  );
}

export default MovieCard;