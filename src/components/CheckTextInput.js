import { useFormikContext } from "formik";
import FieldLayout from "./FieldLayout";
import InputField from "./InputField";
import Tooltip from "./Tooltip";

export default function CheckTextInput(props) {
  const { values } = useFormikContext();
  const {
    id,
    checkLabel,
    checkName,
    checkTooltip,
    textLabel,
    textName,
    textTooltip
  } = props;
  const fullCheckName = `${id}.${checkName}`;
  const fullTextName = `${id}.${textName}`;

  return (
    <>
      <FieldLayout
        label={<label htmlFor={fullCheckName}>{checkLabel}</label>}
        input={<InputField name={fullCheckName} type="checkbox" />}
        tooltip={<Tooltip id={fullCheckName}>{checkTooltip} </Tooltip>}
      />

      <FieldLayout
        label={<label htmlFor={fullTextName}>{textLabel}</label>}
        input={
          <InputField name={fullTextName} disabled={!values[id][checkName]} />
        }
        tooltip={<Tooltip id={fullTextName}>{textTooltip}</Tooltip>}
      />
    </>
  );
}
