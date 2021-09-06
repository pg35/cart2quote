import React from "react";
export default function FieldLayout(props) {
  return (
    <div className="mwqc_field form-field">
      <div className="mwqc_labelwrap">{props.label}</div>
      <div>{props.input}</div>
      {props.tooltip}
    </div>
  );
}
