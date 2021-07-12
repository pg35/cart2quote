import { useContext } from "react";
import { Field } from "formik";
import { FormContext } from "../App";

export default function InputField(props) {
  const { enable } = useContext(FormContext);
  return <Field id={props.name} disabled={!enable} {...props} />;
}
