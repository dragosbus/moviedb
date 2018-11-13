import React from 'react';
import { connect } from 'react-redux';
import SlideMovies from '../SlideMovies/SlideMovies';

class WeekTrending extends React.Component {
  render() {
    return (
      <SlideMovies
        title="Week Trending"
        path="/week-trending"
        data={this.props.weekTrending}
        toggleMovieDetails={this.props.toggleMovieDetails}
      />
    );
  }
}

const mapStateToProps = state => ({
  weekTrending: state.weekTrending
});

export default connect(
  mapStateToProps,
  null
)(WeekTrending);
