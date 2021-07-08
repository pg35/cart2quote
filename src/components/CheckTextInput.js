import { Field, useFormikContext } from "formik";

export default function CheckTextInput(props) {
  const { values } = useFormikContext();
  const { checkLabel, checkName, textLabel, textName } = props;
  return (
    <>
      <div>
        <label htmlFor={checkName}>{checkLabel}</label>
        <Field name={checkName} type="checkbox" />
      </div>

      <div>
        <label htmlFor={textName}>{textLabel}</label>
        <Field name={textName} disabled={!values[checkName]} />
      </div>
    </>
  );
}
