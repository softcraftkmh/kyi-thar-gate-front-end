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
  touched
}) => {
  console.log("TCL: error", error);
  return (
    <div className="input-field">
      <input
        placeholder={placeHolder}
        id={id}
        type={type}
        className="validate"
        onChange={onChange}
        value={value}
      />
      <label className={value && "active"} htmlFor={id}>
        {label}
      </label>
      <span className="helper-text red-text">{touched && error}</span>
    </div>
  );
};

export default index;
