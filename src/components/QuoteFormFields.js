import InputField from "./InputField";
import Tooltip from "./Tooltip";
import CodeInputField from "./CodeInputField";

export default function QuoteFormFields(props) {
  return (
    <>
      <div>
        <label htmlFor="formMarkup">Form Markup</label>
        <CodeInputField name="formMarkup" />
        <Tooltip id="formMarkup">This is readonly.</Tooltip>
      </div>
    </>
  );
}
