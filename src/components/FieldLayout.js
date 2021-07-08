export default function FieldLayout(props) {
  return (
    <div>
      <div>{props.label}</div>
      <div>{props.input}</div>
      {props.tooltip}
    </div>
  );
}
