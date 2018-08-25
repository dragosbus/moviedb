import React from 'react';
import { FaStar } from 'react-icons/fa';

export const Movie = props => {
  let colorScore =
    props.rating * 10 >= 75 ? 'rgb(61, 199, 61)' : props.rating * 10 >= 50 ? 'rgb(236, 132, 13)' : 'rgb(243, 30, 58)';

  let bgImage = `https://image.tmdb.org/t/p/w500${props.cover}`;
  let stylesBg = {
      backgroundImage: 'linear-gradient(180deg, rgba(2,2,2,0.55) 65%, rgba(255,255,255,0.45)), url(' + bgImage + ')',
  }

  return (
    <li className="movie">
      <div className="img" style={stylesBg} />
      <FaStar className="favorite" onClick={props.addToFavorite}/>
      <div className="infos">
        <div className="main-infos">
          <div className="rating">
            <span style={{ borderColor: colorScore }} className="score">
              {props.rating * 10}%
            </span>
          </div>
          <h3 className="title" onClick={props.showDetails}>
            {props.title}
          </h3>
          <h4 className="release">{props.date}</h4>
        </div>
        <p className="overview">
          {props.overview.slice(0, 120)}
          ...
        </p>
      </div>
    </li>
  );
};
