import React from "react";
import { Field } from "formik";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductFields from "./ProductFields";
import QuoteFormFields from "./QuoteFormFields";
import CartFields from "./CartFields";
import CheckboxField from "./CheckboxField";

import "react-tabs/style/react-tabs.css";

export default function GlobalFormFields(props) {
  const { context: Context, customerOn, guestOn } = props;
  return (
    <Tabs>
      <TabList>
        <Tab>General</Tab>
        <Tab>Registered Customers</Tab>
        <Tab>Guest Customers</Tab>
      </TabList>
      <TabPanel>
        <>
          <CheckboxField
            name="r.enable"
            label="Enable plugin for registered customers"
            tooltip="Turn the plugin on/off for registered customers. Turning the plugin
            off will make all other settings for registered customers ineffective."
          />
          <CheckboxField
            name="g.enable"
            label="Enable plugin for guest customers"
            tooltip="Turn the plugin on/off for guest customers. Turning the plugin off
            will make all other settings for guest customers ineffective."
          />
        </>
      </TabPanel>
      <TabPanel>
        <CheckboxField
          name="r.enable"
          label="Configure for registered customers"
          tooltip="Turn the plugin on/off for registered customers. Turning the plugin
            off will make all other settings for registered customers ineffective."
        />
        <Context.Provider value={{ enable: customerOn }}>
          <h2>Products</h2>
          <ProductFields id="r" />
          <h2>Quote Form</h2>
          <QuoteFormFields id="r" />
          <h2>Cart</h2>
          <CartFields id="r" />
        </Context.Provider>
      </TabPanel>

      <TabPanel>
        <CheckboxField
          name="g.enable"
          label="Configure for guest customers"
          tooltip="Turn the plugin on/off for guest customers. Turning the plugin off
            will make all other settings for guest customers ineffective."
        />
        <Context.Provider value={{ enable: guestOn }}>
          <h2>Products</h2>
          <ProductFields id="g" />
          <h2>Quote Form</h2>
          <QuoteFormFields id="g" />
          <h2>Cart</h2>
          <CartFields id="g" />
        </Context.Provider>
      </TabPanel>
    </Tabs>
  );
}
