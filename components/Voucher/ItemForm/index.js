import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Input from "components/App/Input";

import "./styles.scss";

const ItemSchema = Yup.object({
  name: Yup.string().required("Required."),
  quantity: Yup.number()
    .positive("Cannot be negative value.")
    .required("Required."),
  price: Yup.number()
    .positive("Cannot be negative value.")
    .required("Required.")
});

const index = ({ data, setData }) => {
  return (
    <section>
      <Formik
        initialValues={{ name: "", quantity: "", price: "" }}
        onSubmit={(value, { resetForm }) => {
          resetForm();
          setData([...data, value]);
        }}
        validationSchema={ItemSchema}
        autoComplete
      >
        {({ values, errors, touched, handleChange }) => {
          return (
            <Form className="itemForm__container">
              <Input
                id="name"
                value={values.name}
                label="Item Name"
                onChange={handleChange}
                error={errors.name}
                touched={touched.name}
                autoComplete
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
              <Input
                id="price"
                value={values.price}
                label="Price"
                onChange={handleChange}
                error={errors.price}
                touched={touched.price}
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
