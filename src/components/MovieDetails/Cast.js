import React from 'react';

const CastList = props => {
  return (
    <ul className="cast-list">
      {props.cast &&
        props.cast.slice(0, props.castLength).map((actor, i) => (
          <li key={actor.credit_id} style={{ left: `${i * 120}px` }}>
            <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`} alt="actor"/>
            <p>{actor.name}</p>
          </li>
        ))}
    </ul>
  );
};

export default CastList;