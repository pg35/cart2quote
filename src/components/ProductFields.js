import { Field } from "formik";
import CheckTextInput from "./CheckTextInput";
import Tooltip from "./Tooltip";

export default function ProductFields(props) {
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
        <Tooltip id="add2cartText">This is add to cqrt button text.</Tooltip>
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
