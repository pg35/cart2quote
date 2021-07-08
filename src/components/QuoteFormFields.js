import FieldLayout from "./FieldLayout";
import InputField from "./InputField";
import CodeInputField from "./CodeInputField";
import Tooltip from "./Tooltip";

export default function QuoteFormFields(props) {
  return (
    <>
      <FieldLayout
        label={<label htmlFor="formMarkup">Form Markup</label>}
        input={<CodeInputField name="formMarkup" />}
        tooltip={<Tooltip name="disableAck">This is readonly.</Tooltip>}
      />
      <FieldLayout
        label={
          <label htmlFor="clearCart">Empty Cart After Quote Inquiry</label>
        }
        input={<InputField name="clearCart" type="checkbox" />}
        tooltip={
          <Tooltip name="clearCart">
            Enabling it will empty Cart after quote inquiry form is submitted.
          </Tooltip>
        }
      />
      <FieldLayout
        label={
          <label htmlFor="disableAck">Disable Acknowledgement Email</label>
        }
        input={<InputField name="disableAck" type="checkbox" />}
        tooltip={
          <Tooltip name="disableAck">
            Disable Quote Inquiry Acknowledgement email. This email is sent to
            customer on quote inquiry. This setting has precedence over Emails
            tabs of WC->Settings page.
          </Tooltip>
        }
      />
    </>
  );
}
