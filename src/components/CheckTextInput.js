import { useFormikContext } from "formik";
import FieldLayout from "./FieldLayout";
import InputField from "./InputField";
import Tooltip from "./Tooltip";

export default function CheckTextInput(props) {
  const { values } = useFormikContext();
  const {
    checkLabel,
    checkName,
    checkTooltip,
    textLabel,
    textName,
    textTooltip
  } = props;
  return (
    <>
      <FieldLayout
        label={<label htmlFor={checkName}>{checkLabel}</label>}
        input={<InputField name={checkName} type="checkbox" />}
        tooltip={<Tooltip id={checkName}>{checkTooltip} </Tooltip>}
      />

      <FieldLayout
        label={<label htmlFor={textName}>{textLabel}</label>}
        input={<InputField name={textName} disabled={!values[checkName]} />}
        tooltip={<Tooltip id={textName}>{textTooltip}</Tooltip>}
      />
    </>
  );
}
