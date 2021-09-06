import React from "react";
import { spinnerUrl } from "../utility";

export default function Button(props) {
  const { isProcessing, result, ...others } = props;
  const msgClassName = result instanceof Error ? "mwqc_error" : "mwqc_success";
  return (
    <>
      <button disabled={isProcessing} {...others}>
        {props.children}
        {isProcessing && <img src={spinnerUrl} alt="spinner" />}
      </button>{" "}
      {!isProcessing && result && (
        <span className={msgClassName}>{result.message}</span>
      )}
    </>
  );
}
