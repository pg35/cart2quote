import FieldLayout from "./FieldLayout";
import InputField from "./InputField";
import CodeInputField from "./CodeInputField";
import Tooltip from "./Tooltip";

export default function QuoteFormFields(props) {
  const { id } = props;
  return (
    <>
      <FieldLayout
        label={
          <label htmlFor={`${id}.clearCart`}>
            Empty Cart After Quote Inquiry
          </label>
        }
        input={<InputField name={`${id}.clearCart`} type="checkbox" />}
        tooltip={
          <Tooltip id={`${id}.clearCart`}>
            Enabling it will empty Cart after quote inquiry form is submitted.
          </Tooltip>
        }
      />
      <FieldLayout
        label={
          <label htmlFor={`${id}.disableAck`}>
            Disable Acknowledgement Email
          </label>
        }
        input={<InputField name={`${id}.disableAck`} type="checkbox" />}
        tooltip={
          <Tooltip id={`${id}.disableAck`}>
            Disable Quote Inquiry Acknowledgement email. This email is sent to
            customer on quote inquiry. This setting has precedence over Emails
            tabs of WC->Settings page.
          </Tooltip>
        }
      />
    </>
  );
}
