import { Formik, Form, Field } from "formik";
import ProductFields from "./ProductFields";

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
        <ProductFields />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
