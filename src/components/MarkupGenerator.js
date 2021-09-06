import React from "react";
import { Formik } from "formik";
import InputField from "./InputField";

export default function MarkupGenerator(props) {
  return (
    <Formik
      initialValues={{ formType: "" }}
      onSubmit={(values, { setSubmitting }) => {}}
    >
      {({ handleSubmit, values, isSubmitting, submitForm }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlForm="formType">Form Type</label>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <InputField
                  type="radio"
                  name="formType"
                  value="contact_form_7"
                />
                Contact Form 7
              </label>
              <label>
                <InputField
                  type="radio"
                  name="formType"
                  value="gravity_forms"
                />
                Gravity Forms
              </label>
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </Formik>
  );
}
