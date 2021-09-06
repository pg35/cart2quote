import React from "react";
import FieldLayout from "./FieldLayout";
import InputField from "./InputField";
import CheckTextFields from "./CheckTextFields";
import Tooltip from "./Tooltip";

export default function ProductFields(props) {
  const { id } = props;
  return (
    <>
      <CheckTextFields
        id={id}
        checkLabel="Hide Price"
        checkName="hidePrice"
        checkTooltip="Enabling it will hide price and (sub)total."
        textLabel="Show As Price"
        textName="priceText"
        textTooltip="If Hide Price is enabled, this text will be shown as price. Leave it blank (not recommended) to only hide price and (sub)total."
      />
      <FieldLayout
        label={
          <label htmlFor={`${id}.add2cartText`}>Add To Cart Button Text</label>
        }
        input={<InputField name={`${id}.add2cartText`} />}
        tooltip={
          <Tooltip id={`${id}.add2cartText`}>
            If blank, this input field will be ignored.
          </Tooltip>
        }
      />
      <FieldLayout
        label={
          <label htmlFor={`${id}.revokeCheckout`}>Revoke Checkout Access</label>
        }
        input={<InputField name={`${id}.revokeCheckout`} type="checkbox" />}
        tooltip={
          <Tooltip id={`${id}.revokeCheckout`}>
            Enabling it will make Checkout page inaccessible and hide buttons
            (Checkout and Pay buttons on Cart page, Checkout button on
            Storefront theme's Minicart). Direct access of Checkout page will
            redirect to Cart page.
          </Tooltip>
        }
      />
      <FieldLayout
        label={
          <label htmlFor={`${id}.allowInquiry`}>Allow Quote Inquiry</label>
        }
        input={<InputField name={`${id}.allowInquiry`} type="checkbox" />}
        tooltip={
          <Tooltip id={`${id}.allowInquiry`}>
            Enabling it will show selected quote inquiry form.
          </Tooltip>
        }
      />
    </>
  );
}
