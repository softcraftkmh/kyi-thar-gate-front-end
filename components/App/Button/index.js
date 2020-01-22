import React from "react";

const index = ({ children, ...props }) => {
  return (
    <button className="waves-effect waves-light btn" {...props}>
      {children}
    </button>
  );
};

export default index;
