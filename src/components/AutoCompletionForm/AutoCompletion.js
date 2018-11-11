import React from 'react';
import './AutoCompletion.css';

const AutoCompletion = props => {
  return (
    <ul className="auto-completion">
      {props.movies.map((movie, i) => (
        <li key={movie.title}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default AutoCompletion;
