import React from "react";

const index = () => {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Placeholder"
              id="first_name"
              type="text"
              className="validate"
            />
            <label className="active" htmlFor="first_name">
              First Name
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default index;
