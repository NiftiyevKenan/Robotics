import React from "react";
import style from "./Button.module.scss";

const Button = ({ text, onclick }) => {
  return <button onClick={onclick}>{text}</button>;
};

export default Button;
