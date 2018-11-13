import React from 'react';
import {Movie} from './Movie';
import './SlideMovies.css';

export default class SlideMovies extends React.Component {
  
  render() {
    const {className, title, path, toggleMovieDetails, data} = this.props;
    return(
      <div className={className}>
        <h3>{title}</h3>
        <Link to={path}>More</Link>
        <Movie data={data} toggleMovieDetails={toggleMovieDetails} />
      </div>
    );
  }
}