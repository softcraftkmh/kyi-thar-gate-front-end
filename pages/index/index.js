import React, { useState, useEffect } from "react";
import moment from "moment";
import _ from "lodash";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

import Layout from "components/App/Layout";
import ShopForm from "components/Voucher/ShopForm";
import ItemForm from "components/Voucher/ItemForm";
import Information from "components/Voucher/Information";
import Table from "components/Voucher/Table";
import "./styles.scss";

// const voucherSelector = createSelector(state => state.voucher);

const index = () => {
  // const storeVoucher = useSelector(voucherSelector);
  // console.log("index -> storeVoucher", storeVoucher);

  // useEffect(() => {
  //   if (apiStatus === "SUCCESS") {
  //     setTimeout(() => {
  //       // TODO
  //     }, 1000);
  //   }
  // });

  // Item (Form)
  const [item, setItem] = useState({
    name: "",
    quantity: "",
    cost: ""
  });

  // Items
  const [items, setItems] = useState([]);

  // Voucher
  const [voucher, setVoucher] = useState({
    isPaid: false,
    labourFee: "",
    itemTotal: 0,
    netTotal: 0
  });

  // Shop
  const [shop, setShop] = useState({
    shop: "",
    city: "",
    date: moment().format("YYYY-MM-DD"),
    carNo: "",
    note: ""
  });

  return (
    <Layout>
      <section>
        <ShopForm shop={shop} setShop={setShop} />
        <ItemForm
          item={item}
          setItem={setItem}
          items={items}
          setItems={setItems}
        />
        <Table data={items} setData={setItems} />
        <Information
          shop={shop}
          items={items}
          voucher={voucher}
          setVoucher={setVoucher}
        />
      </section>
    </Layout>
  );
};

export default index;
