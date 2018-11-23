import React from 'react';
import './Style.css';

export const ChangePosBtns = props => {
  return(
    <div className="change-pos">
      <button onClick={props.toLeft}>
        Prev
      </button>
      <button onClick={props.toRight}>
        Next
      </button>
    </div>
  );
}