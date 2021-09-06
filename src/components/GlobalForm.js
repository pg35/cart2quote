import React from "react";
import { useState, createContext } from "react";
import { Formik } from "formik";
import GlobalFormFields from "./GlobalFormFields";
import Button from "./Button";
import { ajaxUrl, doAjax } from "../utility";

export const GlobalContext = createContext(true);

export default function GlobalForm(props) {
  const [ajaxResult, setAjaxResult] = useState(null);
  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setAjaxResult(null);
        doAjax(ajaxUrl, { body: new URLSearchParams(values) })
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
      {({ handleSubmit, values, isSubmitting }) => (
        <form className="mwqc_form" onSubmit={handleSubmit}>
          <GlobalFormFields
            context={props.context}
            customerOn={values.r.enable}
            guestOn={values.g.enable}
          />
          <Button
            type="submit"
            className="primary-button"
            isProcessing={isSubmitting}
            result={ajaxResult}
          >
            Update
          </Button>
        </form>
      )}
    </Formik>
  );
}
