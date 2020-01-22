import React from "react";

const index = ({ onChange, checked, label }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked && "checked"}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};

export default index;
