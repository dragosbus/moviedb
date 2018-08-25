import React, { Component } from 'react';
import { Movie } from './MovieList';

class Favorites extends Component {
  render() {
    return (
      <div className="favorites-movies">
        <ul>
          {this.props.favorites.map(movie => (
            <Movie />
          ))}
        </ul>
      </div>
    );
  }
}

export default Favorites;
