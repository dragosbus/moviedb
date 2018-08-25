import React, { Component } from 'react';
import { Movie } from './MovieList';

class Favorites extends Component {
  render() {
    return (
      <div className="favorites-movies">
        <ul className="favorites-list">
          {this.props.favorites.map((movie, i) => (
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

export default Favorites;
