import "./styles.css";
import CodeEditor from "./components/CodeEditor";
import { Formik, Form, Field, useFormikContext } from "formik";
import ReactTooltip from "react-tooltip";

function MyForm() {
  return (
    <Formik
      initialValues={{
        name: "",
        hidePrice: false,
        priceText: "",
        add2cartText: "",
        revokeCheckout: false,
        allowInquiry: true
      }}
      onSubmit={(values, { setSubmitting }) =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        })
      }
    >
      <Form>
        <label htmlFor="name" />
        <Field name="name" />
        <ProductFields />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

function ProductFields(props) {
  return (
    <>
      <CheckTextInput
        checkLabel="Hide Price"
        checkName="hidePrice"
        textLabel="Show As Price"
        textName="priceText"
      />
      <div>
        <label htmlFor="add2cartText">Add To Cart Button Text</label>
        <Field name="add2cartText" />
      </div>
      <div>
        <label htmlFor="revokeCheckout">Revoke Checkout</label>
        <Tooltip id="revokeCheckoutTT">
          Enabling it will make Checkout page inaccessible <br /> and hide
          buttons (Checkout and Pay buttons on Cart page, Checkout button on
          Storefront theme's Minicart). <br />
          Direct access of Checkout page will redirect to Cart page.
        </Tooltip>
        <Field name="revokeCheckout" type="checkbox" />
      </div>
      <div>
        <label htmlFor="allowInquiry">Allow Quote Inquiry</label>
        <Tooltip id="allowInquiryTT">aaaaaaaaaaaa nnnnnnnnnnnnnnnn</Tooltip>
        <Field name="allowInquiry" type="checkbox" />
      </div>
    </>
  );
}
function Tooltip(props) {
  console.log(props.id);
  return (
    <>
      <span
        className="dashicons dashicons-editor-help"
        data-tip
        data-for={props.id}
      >
        ??
      </span>
      <ReactTooltip
        id={props.id}
        overridePosition={(
          { left, top },
          currentEvent,
          currentTarget,
          node
        ) => {
          const d = document.documentElement;
          left = Math.min(d.clientWidth - node.clientWidth, left);
          top = Math.min(d.clientHeight - node.clientHeight, top);
          left = Math.max(0, left);
          top = Math.max(0, top);
          return { top, left };
        }}
        effect="solid"
      >
        {props.children}
      </ReactTooltip>
    </>
  );
}
function CheckTextInput(props) {
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

export default function App() {
  return (
    <div className="App">
      <CodeEditor code={"imran"} />
      <MyForm />
    </div>
  );
}
