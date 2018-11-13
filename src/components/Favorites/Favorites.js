import React from 'react';
import SlideMovies from '../SlideMovies/SlideMovies';
import {connect} from 'react-redux';

class Favorites extends React.Component {
  render() {
    return(
      <SlideMovies/>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(mapStateToProps, null)(Favorites);