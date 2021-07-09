export default function FieldLayout(props) {
  return (
    <div className="mwqc_field">
      <div className="mwqc_labelwrap">{props.label}</div>
      <div>{props.input}</div>
      {props.tooltip}
    </div>
  );
}
