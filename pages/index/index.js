import React, { useState } from "react";

import Layout from "components/App/Layout";
import ShopForm from "components/PanSar/ShopForm";
import ItemForm from "components/PanSar/ItemForm";
import "./styles.scss";

const index = () => {
  const [shopFormValues, setShopForm] = useState({ name: "", note: "" });

  return (
    <Layout>
      <section>
        <ShopForm shopFormValues={shopFormValues} setShopForm={setShopForm} />
        <ItemForm />
      </section>
    </Layout>
  );
};

export default index;
