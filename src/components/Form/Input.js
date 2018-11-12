import React from 'react';

export const Input = ({ type, placeholder, value, onChangeHandler, style }) => {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChangeHandler} style={style} />;
};

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
