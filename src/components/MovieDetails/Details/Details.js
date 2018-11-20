import React from 'react';
import './Details.css';
import CastList from '../Cast/Cast';

const Details = props => {
  const { release_date, genres, original_title, runtime, overview, vote_count, cast } = props.movie;

  return (
    <div className="details">
      <p>
        <span>{release_date}</span>
        <span>{genres ? genres[0].name : ''}</span>
      </p>
      <h4>{original_title}</h4>
      <p>{props.calcRuntime(runtime)}</p>
      <p className="movie-details--overview">{overview}</p>
      <p>{vote_count} rating</p>
      <div className="cast">
        <h4>Stars</h4>
        <CastList cast={cast} castLength={props.length} />
        <button className="see-more-cast">See More</button>
      </div>
    </div>
  );
};

export default Details;
