import React, { useCallback, useEffect } from "react";

import Input from "components/App/Input";
import Checkbox from "components/App/Checkbox";
import Button from "components/App/Button";

import "./styles.scss";

const index = ({ data, setData }) => {
  const updatePaid = () => {
    setData({ ...data, isPaid: !data.isPaid });
  };

  const setLabourFee = value => {
    setData({ ...data, labourFee: value });
  };

  return (
    <section className="voucherInformation">
      <div className="voucherInformation__content">
        <Checkbox onChange={updatePaid} checked={data.isPaid} label="Is Paid" />
        <Input
          placeHolder=""
          label="Labour Fee"
          value={data.labourFee}
          onChange={e => setLabourFee(e.target.value)}
          error="Required."
          touched={data.touched}
        />
        <Button onClick={() => console.log("im clicked")}>Submit</Button>
      </div>
    </section>
  );
};

export default index;
