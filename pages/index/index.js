import React, { useState, useEffect } from "react";
import moment from "moment";
import _ from "lodash";

import Layout from "components/App/Layout";
import ShopForm from "components/Voucher/ShopForm";
import ItemForm from "components/Voucher/ItemForm";
import Information from "components/Voucher/Information";
import Table from "components/Voucher/Table";
import "./styles.scss";

const index = () => {
  // Items
  const [items, setItems] = useState([]);

  // Voucher
  const [voucher, setVoucher] = useState({
    isPaid: false,
    labourFee: "",
    touched: false
  });

  const [shopFormValues, setShopForm] = useState({
    shopName: "",
    city: "",
    date: moment().format("YYYY-MM-DD"),
    carNo: "",
    note: ""
  });

  return (
    <Layout>
      <section>
        <ShopForm shopFormValues={shopFormValues} setShopForm={setShopForm} />
        <ItemForm data={items} setData={setItems} />
        <Table data={items} setData={setItems} />
        <Information data={voucher} setData={setVoucher} />
      </section>
    </Layout>
  );
};

export default index;
