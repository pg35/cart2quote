import { Field } from "formik";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductFields from "./ProductFields";
import QuoteFormFields from "./QuoteFormFields";
import CartFields from "./CartFields";
import FieldLayout from "./FieldLayout";
import Tooltip from "./Tooltip";
import InputField from "./InputField";

import "react-tabs/style/react-tabs.css";

export default function GlobalFormFields(props) {
  const { context: GlobalContext, customerOn, guestOn } = props;
  return (
    <Tabs>
      <TabList>
        <Tab>Registered Customers</Tab>
        <Tab>Guest Customers</Tab>
      </TabList>

      <TabPanel>
        <CustomerMainField />
        <GlobalContext.Provider value={{ enable: customerOn }}>
          <h2>Products</h2>
          <ProductFields id="r" />
          <h2>Quote Form</h2>
          <QuoteFormFields id="r" />
          <h2>Cart</h2>
          <CartFields id="r" />
        </GlobalContext.Provider>
      </TabPanel>

      <TabPanel>
        <GuestMainField />
        <GlobalContext.Provider value={{ enable: guestOn }}>
          <h2>Products</h2>
          <ProductFields id="g" />
          <h2>Quote Form</h2>
          <QuoteFormFields id="g" />
          <h2>Cart</h2>
          <CartFields id="g" />
        </GlobalContext.Provider>
      </TabPanel>
    </Tabs>
  );
}
function CustomerMainField(props) {
  return (
    <FieldLayout
      label={<label htmlFor="r.enable">{`On for reOned cusotmers`}</label>}
      input={<Field name="r.enable" type="checkbox" />}
      tooltip={
        <Tooltip id="r.enaable">
          Turn the plugin on/off for registered customers. Turning the plugin
          off will make all other settings for registered customers ineffective.
        </Tooltip>
      }
    />
  );
}

function GuestMainField(props) {
  return (
    <FieldLayout
      label={<label htmlFor="g.enable">{`Enable for guest cusotmers`}</label>}
      input={<Field name="g.enable" type="checkbox" />}
      tooltip={
        <Tooltip id="g.enaable">
          Turn the plugin on/off for guest customers. Turning the plugin off
          will make all other settings for guest customers ineffective.
        </Tooltip>
      }
    />
  );
}
