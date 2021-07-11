import { useContext } from "react";
import { Field } from "formik";
import { GlobalContext } from "./GlobalForm";

export default function InputField(props) {
  const { enable } = useContext(GlobalContext);

  return <Field id={props.name} disabled={!enable} {...props} />;
}
