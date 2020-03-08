import React from "react";
import Input from "components/App/Input";

import "./styles.scss";

const ShopForm = ({ setShop, shop }) => {
  const handleChange = (e, tag) => {
    const { value } = e.target;
    setShop({ ...shop, [tag]: value });
  };

  return (
    <section className="shopForm">
      <Input
        onChange={e => handleChange(e, "shop")}
        value={shop.shop}
        error={!shop.shop && "Required."}
        id="shop"
        label="Shop Name"
        autofocus
      />
      <Input
        onChange={e => handleChange(e, "city")}
        value={shop.city}
        error={!shop.city && "Required."}
        id="city"
        label="City Name"
      />
      <Input
        onChange={e => handleChange(e, "date")}
        value={shop.date}
        error={!shop.date && "Required."}
        id="date"
        label="Date"
        type="date"
      />
      <Input
        onChange={e => handleChange(e, "carNo")}
        value={shop.carNo}
        error={!shop.carNo && "Required."}
        id="carNo"
        label="Car No."
      />
      <Input
        className="shopForm__note"
        onChange={e => handleChange(e, "note")}
        value={shop.note}
        id="note"
        label="Note"
      />
    </section>
  );
};

export default ShopForm;
