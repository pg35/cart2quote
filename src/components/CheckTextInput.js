import { useFormikContext } from "formik";
import InputField from "./InputField";

export default function CheckTextInput(props) {
  const { values } = useFormikContext();
  const { checkLabel, checkName, textLabel, textName } = props;
  return (
    <>
      <div>
        <label htmlFor={checkName}>{checkLabel}</label>
        <InputField name={checkName} type="checkbox" />
      </div>

      <div>
        <label htmlFor={textName}>{textLabel}</label>
        <InputField name={textName} disabled={!values[checkName]} />
      </div>
    </>
  );
}
