import React from "react";
import _ from "lodash";

import Input from "components/App/Input";

import "./styles.scss";

const index = ({ setItem, item, items, setItems }) => {
  const resetItem = () => {
    setItem({ name: "", quantity: "", cost: "" });
  };

  const handleChange = (e, tag) => {
    const { value } = e.target;
    setItem({ ...item, [tag]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    setItems([...items, item]);
    resetItem();
  };

  const checkIsValid = () => {
    const { name, quantity, cost } = item;
    if (!name || !quantity || !cost) return false;
    else return true;
  };

  return (
    <form className="itemForm__container" onSubmit={onSubmit}>
      <Input
        value={item.name}
        onChange={e => handleChange(e, "name")}
        error={!item.city && "Required."}
        label="Item Name"
        id="itemName"
      />
      <Input
        value={item.quantity}
        onChange={e => handleChange(e, "quantity")}
        error={!item.quantity && "Required."}
        label="Quantity"
        id="quantity"
        type="number"
      />
      <Input
        value={item.cost}
        onChange={e => handleChange(e, "cost")}
        error={!item.cost && "Required."}
        label="cost"
        id="itemCost"
        type="number"
      />
      <button className="app-btn" type="submit" disabled={!checkIsValid()}>
        Add
      </button>
    </form>
  );
};

export default index;
