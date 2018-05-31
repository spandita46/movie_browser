import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from "@material-ui/core/Grid";
import { searchMovieAsynch, showMovieDetails, closeMovieDetails } from "./actions";
import SearchBar from "../common/searchBar";
import MovieList from "./components/movieList";
import MovieDetails from "./components/movieDetails";

class MovieBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selectedMovie !== prevState.selectedMovie) {
      return {
        selectedMovie: nextProps.selectedMovie,
      };
    }

    return null;
  }

  handleSearch = (value) => {
    if (value) {
      this.props.searchMovie(value, this.recievedNewMovie);
    }
  }

  handleShowMovieDetails = (movie) => {
    this.props.showMovieDetails(movie);
  }

  handleCloseMovieDetails = (movie) => {
    this.props.closeMovieDetails();
  }

  render() {
    return (
      <Grid container direction={"column"}>
        <Grid item lg={12}>
          <SearchBar onSearch={this.handleSearch} label="Search for your favourite movie" isLoading={this.props.isSearching || this.props.isPooling} />
        </Grid>
        <Grid item lg={12}>
          <MovieDetails movie={this.state.selectedMovie} onClose={this.handleCloseMovieDetails} />
        </Grid>
        <Grid item lg={12}>
          <MovieList movies={this.props.movies} onClick={this.handleShowMovieDetails} />
        </Grid>
      </Grid>
    )
  }
};

function mapStateToProps(state) {
  return {
    movies: state.moviesReducer.movies,
    selectedMovie: state.moviesReducer.selectedMovie,
    isSearching: state.moviesReducer.isSearching,
    isPooling: state.moviesReducer.isPooling,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchMovie: bindActionCreators(searchMovieAsynch, dispatch),
    showMovieDetails: bindActionCreators(showMovieDetails, dispatch),
    closeMovieDetails: bindActionCreators(closeMovieDetails, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieBrowser);