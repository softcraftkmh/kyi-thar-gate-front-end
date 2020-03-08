import React, { useCallback, useEffect } from "react";
import _ from "lodash";
import { useDispatch } from "react-redux";

import Input from "components/App/Input";
import Checkbox from "components/App/Checkbox";
import Button from "components/App/Button";

import { formatMoney } from "utils/format";
import actions from "store/actions";

import "./styles.scss";

const index = ({ shop, voucher, setVoucher, items }) => {
  const dispatch = useDispatch();

  const getItemsTotal = () => {
    if (!_.isEmpty(items)) {
      return items
        .map(item => Number(item.cost))
        .reduce((acc, cost) => acc + cost);
    } else return 0;
  };

  const getNetTotal = () => {
    const { labourFee = 0 } = voucher;
    return getItemsTotal() + Number(labourFee);
  };

  const updatePaid = () => {
    setVoucher({ ...voucher, isPaid: !voucher.isPaid });
  };

  const setLabourFee = value => {
    setVoucher({ ...voucher, labourFee: value });
  };

  const onSubmit = () => {
    const payload = {
      ...voucher,
      ...shop,
      labourFee: Number(voucher.labourFee),
      items: items.map(item => ({
        name: item.name,
        quantity: Number(item.quantity),
        price: Number(item.price)
      })),
      itemTotal: getItemsTotal(),
      netTotal: getNetTotal()
    };
    dispatch(
      actions.postVoucher({
        ...voucher,
        ...shop,
        items,
        itemTotal: getItemsTotal(),
        netTotal: getNetTotal()
      })
    );
  };

  return (
    <section className="voucherInformation">
      <div className="voucherInformation__content">
        <ul className="collection">
          <li className="collection-item">
            <Checkbox
              onChange={updatePaid}
              checked={voucher.isPaid}
              label="Is Paid"
            />
          </li>
          <li className="collection-item">
            <Input
              placeHolder=""
              label="Labour Fee"
              value={voucher.labourFee}
              onChange={e => setLabourFee(e.target.value)}
              type="number"
            />
          </li>
          <li className="collection-item voucherInformation__collection-container">
            <span>Item Total</span>
            <span className="voucherInformation__collection-info">
              {formatMoney(getItemsTotal())}
            </span>
          </li>
          <li className="collection-item voucherInformation__collection-container">
            <span>Net Total (Item + Labour)</span>
            <span className="voucherInformation__collection-info">
              {formatMoney(getNetTotal())}
            </span>
          </li>
          <li className="collection-item">
            <Button onClick={onSubmit} disabled={_.isEmpty(items)}>
              Submit
            </Button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default index;
