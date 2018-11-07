import React from 'react';


const Input = ({type, placeholder, value, onChangeHandler, style}) => {
  return(
    <input 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
      style={style}
    />
  );
};

export default Input;