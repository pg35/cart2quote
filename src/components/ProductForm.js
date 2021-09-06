import React from "react";
import { useState } from "react";
import { Formik } from "formik";
import ProductFields from "./ProductFields";
import CheckboxField from "./CheckboxField";
import Button from "./Button";
import { ajaxUrl, doAjaxDummy as doAjax } from "../utility";

export default function ProductForm(props) {
  const [ajaxResult, setAjaxResult] = useState(null);
  const Context = props.context;
  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setAjaxResult(null);
        doAjax(ajaxUrl, {
          body: new URLSearchParams({
            action: "mwqt_save_settings",
            ...values
          })
        })
          .then(function (response) {
            setAjaxResult(response);
          })
          .catch(function (error) {
            setAjaxResult(error);
          })
          .finally(function () {
            setSubmitting(false);
          });
      }}
    >
      {({ handleSubmit, values, isSubmitting, submitForm }) => (
        <>
          <CheckboxField
            name="p.enable"
            label="Configure this product"
            tooltip="Override global configuration"
          />
          <Context.Provider value={{ enable: values.p.enable }}>
            <ProductFields id="p" />
          </Context.Provider>
          <Button
            type="submit"
            className="primary-button"
            isProcessing={isSubmitting}
            result={ajaxResult}
            onClick={submitForm}
          >
            Update
          </Button>
        </>
      )}
    </Formik>
  );
}
