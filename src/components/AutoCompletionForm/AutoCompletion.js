import React from 'react';
import './AutoCompletion.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSearchTerm, emptyAutoCompletion } from '../../actionCreators/actionCreators';

const AutoCompletion = props => {
  const { setSearchTerm, autoCompletionMovies, emptyAutoCompletion } = props;
  return (
    <ul className="auto-completion">
      {autoCompletionMovies.slice(0, 5).map(movie => (
        <li
          onClick={() => {
            setSearchTerm(movie.title);
            emptyAutoCompletion();
          }}
          key={movie.id}
        >
          {movie.title}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  autoCompletionMovies: state.autoCompletion
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setSearchTerm: setSearchTerm,
      emptyAutoCompletion: emptyAutoCompletion
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoCompletion);
