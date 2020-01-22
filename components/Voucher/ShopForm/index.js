import React, { useState } from "react";
import Input from "components/App/Input";

import "./styles.scss";

const ShopForm = ({ setShopForm, shopFormValues }) => {
  const handleShopFormChange = (e, tag) => {
    const { value } = e.target;
    setShopForm({ ...shopFormValues, [tag]: value });
  };

  return (
    <form className="shopForm">
      <Input
        onChange={e => handleShopFormChange(e, "shopName")}
        value={shopFormValues.shopName}
        id="shopName"
        label="Shop Name"
      />
      <Input
        onChange={e => handleShopFormChange(e, "city")}
        value={shopFormValues.city}
        id="city"
        label="City Name"
      />
      <Input
        onChange={e => handleShopFormChange(e, "date")}
        value={shopFormValues.date}
        id="date"
        label="Date"
        type="date"
      />
      <Input
        onChange={e => handleShopFormChange(e, "carNo")}
        value={shopFormValues.carNo}
        id="carNo"
        label="Car No."
      />
      <Input
        className="shopForm__note"
        onChange={e => handleShopFormChange(e, "note")}
        value={shopFormValues.note}
        id="note"
        label="Note"
      />
    </form>
  );
};

export default ShopForm;
