import React, { Component } from 'react';
import { Movie } from './MovieList';
import {connect} from 'react-redux';

class Favorites extends Component {
  render() {
    let favoritesMovies = this.props.movies.filter(movie=>movie.favorite);
    return (
      <div className="favorites-movies">
        <ul className="favorites-list">
          {favoritesMovies.map((movie, i) => (
            <Movie
              key={i}
              cover={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              date={movie.release_date}
              overview={movie.overview}
              showDetails={() => this.props.showDetails(i)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    movies: state.data
});

export default connect(mapStateToProps)(Favorites);
