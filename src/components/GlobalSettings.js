import { useState, createContext } from "react";
import { Formik } from "formik";
import GlobalFormFields from "./GlobalFormFields";
import Button from "./Button";
import { ajaxUrl, doAjax } from "../utility";

export const GlobalContext = createContext(true);

export default function GlobalSettings(props) {
  const [ajaxResult, setAjaxResult] = useState(null);
  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setAjaxResult(null);
        doAjax(ajaxUrl, { body: JSON.stringify(values) })
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
            context={GlobalContext}
            customerOn={values.r.enable}
            guestOn={values.g.enable}
            a={1}
          />
          <Button type="submit" isProcessing={isSubmitting} result={ajaxResult}>
            Update
          </Button>
        </form>
      )}
    </Formik>
  );
}
