import React from "react";
import "./Button.scss";
type buttonProp = {
  title: string;
  customStyle: string;
  onClick: () => void;
};
const Button = ({ title, customStyle, onClick }: buttonProp) => {
  return (
    <button onClick={onClick} className={`Button h-[3.125rem] ${customStyle}`}>
      {title}
    </button>
  );
};

export default Button;
