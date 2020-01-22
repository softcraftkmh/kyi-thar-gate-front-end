import React from "react";

import "./styles.scss";

const index = ({
  placeHolder,
  id,
  value,
  label,
  onChange,
  type = "text",
  error,
  touched,
  className
}) => {
  return (
    <div className={`input-field ${className}`}>
      <input
        placeholder={placeHolder}
        id={id}
        type={type}
        className="validate"
        onChange={onChange}
        value={value}
        autoComplete="on"
      />
      <label className={value && "active"} htmlFor={id}>
        {label}
      </label>
      <span className="helper-text red-text">{touched && error}</span>
    </div>
  );
};

export default index;
