import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Trending.css';
import { Movie } from './Movie';

class WeekTrending extends React.Component {
  render() {
    return (
      <div className="trending">
        <h3>Week Trending</h3>
        <Link to="/week-trending">More</Link>
        <Movie weekTrending={this.props.weekTrending} toggleMovieDetails={this.props.toggleMovieDetails} />
      </div>
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
