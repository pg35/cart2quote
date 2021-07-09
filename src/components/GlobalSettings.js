import { Formik, Form, Field } from "formik";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductFields from "./ProductFields";
import QuoteFormFields from "./QuoteFormFields";
import CartFields from "./CartFields";
import FieldLayout from "./FieldLayout";
import InputField from "./InputField";
import Tooltip from "./Tooltip";

import "react-tabs/style/react-tabs.css";

export default function GlobalSettings(props) {
  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={(values, { setSubmitting }) =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          console.log(values);
        })
      }
    >
      <Form className="mwqc_form">
        <Tabs>
          <TabList>
            <Tab>Registered Customers</Tab>
            <Tab>Guest Customers</Tab>
          </TabList>

          <TabPanel>
            <FieldLayout
              label={
                <label htmlFor="r.enable">{`Enable for registered cusotmers`}</label>
              }
              input={<InputField name="r.enable" type="checkbox" />}
              tooltip={
                <Tooltip id="r.enaable">
                  Turn the plugin on/off for registered customers. Turning the
                  plugin off will make all other settings for registered
                  customers ineffective.
                </Tooltip>
              }
            />
            <h2>Products</h2>
            <ProductFields id="r" />
            <h2>Quote Form</h2>
            <QuoteFormFields id="r" />
            <h2>Cart</h2>
            <CartFields id="r" />
          </TabPanel>

          <TabPanel>
            <FieldLayout
              label={
                <label htmlFor="g.enable">{`Enable for guest cusotmers`}</label>
              }
              input={<InputField name="g.enable" type="checkbox" />}
              tooltip={
                <Tooltip id="g.enaable">
                  Turn the plugin on/off for guest customers. Turning the plugin
                  off will make all other settings for guest customers
                  ineffective.
                </Tooltip>
              }
            />
            <h2>Products</h2>
            <ProductFields id="g" />
            <h2>Quote Form</h2>
            <QuoteFormFields id="g" />
            <h2>Cart</h2>
            <CartFields id="g" />
          </TabPanel>
        </Tabs>
        <button type="submit" className="mwqc_submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}
