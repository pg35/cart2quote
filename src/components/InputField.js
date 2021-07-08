import { Field } from "formik";

export default function InputField(props) {
  return <Field id={props.name} {...props} />;
}
