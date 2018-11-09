import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Trending.css';
import { bindActionCreators } from 'redux';
import { getMovieDetails } from '../../actionCreators/actionCreators';
import { Movie } from './Movie';

class WeekTrending extends React.Component {
  state = {
    left: 0,
  };

  getMovieDetails = movie => {
    this.props.getMovieDetails(movie);
  };

  render() {
    return (
      <div className="trending">
        <h3>Week Trending</h3>
        <Link to="/week-trending">More</Link>
        <Movie 
          weekTrending={this.props.weekTrending} 
          toggleMovieDetails={this.props.toggleMovieDetails}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weekTrending: state.weekTrending
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovieDetails
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeekTrending);
