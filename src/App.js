import React, { Component } from 'react';
import { Movies } from './components/Movies';
import { MovieDetail } from './components/MovieDetail';
import WeekTrending from './components/Trending/WeekTrending';
import Favorites from './components/Favorites/Favorites';
import MovieDetails from './components/MovieDetails/MovieDetails';
import FilterMenu from './components/FilterMenu/Menu';
import './App.css';

import { connect } from 'react-redux';

import * as Actions from './actionCreators/actionCreators';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetailOn: false
    };
    this.showDetails = this.showDetails.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.getWeekTrending();
  }

  showDetails(index) {
    this.props.getTrailer(this.props.movies[index].id);
    this.setState({
      movieDetailOn: !this.state.movieDetailOn
    });
  }

  closeModal() {
    this.setState({
      movieDetailOn: !this.state.movieDetailOn
    });
  }

  render() {
    let { movies, trailer, addToFavorite} = this.props;
    return (
      <div className="App">
        {/* <Link to="/favorites">Favorites</Link> */}
        <FilterMenu/>
        <WeekTrending toggleMovieDetails={this.props.toggleMovieDetails} />
        <Favorites toggleMovieDetails={this.props.toggleMovieDetails}/>
        <Movies movies={movies} showDetails={this.showDetails} addToFavorite={addToFavorite} />
        <MovieDetail
          movieDetailOn={this.state.movieDetailOn}
          trailer={
            this.state.movieDetailOn
              ? `https://www.youtube.com/embed/${trailer}?autoplay=1&controls=0&loop=1&showinfo=0`
              : ''
          }
          closeModal={this.closeModal}
        />
        <MovieDetails />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  movies: state.data,
  weekTrending: state.weekTrending,
  trailer: state.trailer,
  movieDetails: state.movieDetails,
  autoCompletion: state.autoCompletion,
});

const mapDispatchToProps = dispatch => ({
  setSearchTerm(value) {
    dispatch(Actions.setSearchTerm(value));
  },
  fetchMovieSearched(term) {
    dispatch(Actions.fetchMovieSearched(term));
  },
  getTrailer(movieId) {
    dispatch(Actions.getTrailerMiddleware(movieId));
  },
  addToFavorite(movie) {
    dispatch(Actions.addToFavorite(movie));
  },
  getWeekTrending() {
    dispatch(Actions.fetchWeekTrending());
  },
  toggleMovieDetails(movieId) {
    dispatch(Actions.getMovieDetails(movieId));
  },
  hideMovieDetails() {
    dispatch(Actions.hideMovieDetails());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
