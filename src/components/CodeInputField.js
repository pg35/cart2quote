import { useField } from "formik";
import CodeEditor from "./CodeEditor";

export default function CodeInputField(props) {
  const [field, meta, helpers] = useField(props.name);
  const { onChange, value: unuse, ...fieldProps } = field;
  return (
    <CodeEditor
      code={field.value}
      onChange={(code) => helpers.setValue(code)}
      {...fieldProps}
    />
  );
}
