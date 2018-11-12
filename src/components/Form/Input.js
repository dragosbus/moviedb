import React from 'react';

export const InputRef = React.forwardRef((props, ref) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChangeHandler}
      style={props.style}
      ref={ref}
    />
  );
});
