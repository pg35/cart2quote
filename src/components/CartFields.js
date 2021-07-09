import FieldLayout from "./FieldLayout";
import InputField from "./InputField";
import Tooltip from "./Tooltip";

export default function CartFields(props) {
  const { id } = props;
  return (
    <>
      <FieldLayout
        label={<label htmlFor={`${id}.hideCoupan`}>Hide Coupan</label>}
        input={<InputField name={`${id}.hideCoupan`} type="checkbox" />}
        tooltip={
          <Tooltip id={`${id}.hideCoupan`}>
            Enabling it will hide coupan input and coupan section of Cart Totals
            on Cart page. Applied coupans will remain reflected in cart total.
          </Tooltip>
        }
      />
      <FieldLayout
        label={<label htmlFor={`${id}.hideShipping`}>Hide Shipping</label>}
        input={<InputField name={`${id}.hideShipping`} type="checkbox" />}
        tooltip={
          <Tooltip id={`${id}.hideShipping`}>
            Enabling it will hide shipping section of Cart Totals on Cart page.
            Added shipping costs will remain included in cart total.
          </Tooltip>
        }
      />
      <FieldLayout
        label={<label htmlFor={`${id}.hideFee`}>Hide Fee</label>}
        input={<InputField name={`${id}.hideFee`} type="checkbox" />}
        tooltip={
          <Tooltip id={`${id}.hideFee`}>
            Enabling it will hide fee section of Cart Totals on Cart page. Added
            fees will remain included in cart total.
          </Tooltip>
        }
      />
      <FieldLayout
        label={<label htmlFor={`${id}.hideTax`}>Hide Tax</label>}
        input={<InputField name={`${id}.hideTax`} type="checkbox" />}
        tooltip={
          <Tooltip id={`${id}.hideTax`}>
            Enabling it will hide tax section of Cart Totals on Cart page.
            Applied taxes will remain included in cart total.
          </Tooltip>
        }
      />
    </>
  );
}
