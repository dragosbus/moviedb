import React from 'react';
import './Style.css';

export const ChangePosBtn = props => {
  return (
    <button className="change-pos" onClick={props.toDirection}>
      {props.direction}
    </button>
  );
};
