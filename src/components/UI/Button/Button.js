import React from 'react';

import './Button.css';

const Button = props => {
  console.log(props.isValidBtn)
  return (
    <button type={props.type} className={`button ${props.isValidBtn ? "" : "invalid"}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
