import { Field } from "formik";
import FieldLayout from "./FieldLayout";
import Tooltip from "./Tooltip";

export default function CheckboxField(props) {
  const { name, label, tooltip, ...others } = props;
  return (
    <FieldLayout
      label={<label htmlFor={name}>{label}</label>}
      input={<Field name={name} id={name} {...others} type="checkbox" />}
      tooltip={<Tooltip id={name}>{tooltip}</Tooltip>}
    />
  );
}
