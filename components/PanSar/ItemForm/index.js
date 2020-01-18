import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Input from "components/App/Input";

import "./styles.scss";

const ItemSchema = Yup.object({
  itemName: Yup.string().required("Required."),
  quantity: Yup.number().positive("Cannot be negative value.")
});

const index = () => {
  return (
    <section>
      <Formik
        initialValues={{ itemName: "", quantity: "", price: 0 }}
        onSubmit={value => {
          console.log(value);
        }}
        validationSchema={ItemSchema}
      >
        {({ values, errors, touched, handleChange }) => {
          console.log("TCL: index -> errors", errors);
          return (
            <Form className="itemForm__container">
              <Input
                id="itemName"
                value={values.itemName}
                label="Item Name"
                onChange={handleChange}
                error={errors.itemName}
                touched={touched.itemName}
              />
              <Input
                id="quantity"
                value={values.quantity}
                label="Quantity"
                onChange={handleChange}
                error={errors.quantity}
                touched={touched.quantity}
                type="number"
              />
              <button className="app-btn" type="submit">
                Add
              </button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default index;
