import { Formik, Form, Field } from "formik";
import ProductFields from "./ProductFields";
import QuoteFormFields from "./QuoteFormFields";

export default function GlobalSettings(props) {
  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={(values, { setSubmitting }) =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        })
      }
    >
      <Form>
        <h2>Products</h2>
        <ProductFields />
        <h2>Quote Form</h2>
        <QuoteFormFields />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
