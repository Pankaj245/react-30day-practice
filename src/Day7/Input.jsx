import React from "react";
import "./Input.css";

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  className = "",
  ...rest
}) => {
  return (
    <div className={`input-group ${className}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
