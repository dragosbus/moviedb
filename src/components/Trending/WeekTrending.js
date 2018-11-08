import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Trending.css';

class WeekTrending extends React.Component {
  state = {
    left: 0
  }
  render() {
    return (
      <div className="trending">
        <h3>Week Trending</h3>
        <Link to="/week-trending">More</Link>
        <ul>
          {this.props.weekTrending.slice(0,10).map((movie, i) => {
            return (
              <li style={{left: `${i * 120}px`}}>
                <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} />
              </li>
            );
          })}
        </ul>
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
