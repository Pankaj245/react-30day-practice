import React from "react";
import "./Button.css";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  ...rest
}) => {
  const classes = `btn ${variant} ${size} ${className}`;

  return (
    <button className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
