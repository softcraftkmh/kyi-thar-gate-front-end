import React, { useState } from "react";
import Input from "components/App/Input";

import "./styles.scss";

const ShopForm = ({ setShopForm, shopFormValues: { name, note } }) => {
  const handleShopFormChange = (e, tag) => {
    const { value } = e.target;
    setShopForm({ name, note, [tag]: value });
  };

  return (
    <div className="shopForm">
      <Input
        onChange={e => handleShopFormChange(e, "name")}
        value={name}
        id="name"
        label="Shop Name"
      />
      <Input
        onChange={e => handleShopFormChange(e, "note")}
        value={note}
        id="note"
        label="Note"
      />
    </div>
  );
};

export default ShopForm;
