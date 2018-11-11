import React from 'react';
import './AutoCompletion.css';
import {connect} from 'react-redux';

const AutoCompletion = props => {
  return (
    <ul className="auto-completion">
      {props.autoCompletionMovies.slice(0, 5).map((movie, i) => (
        <li key={movie.title}>{movie.title}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  autoCompletionMovies: state.autoCompletion,
});

export default connect(mapStateToProps, null)(AutoCompletion);
