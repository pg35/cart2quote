import React from "react";
import { useState, useEffect, useRef } from "react";

export default function CodeEditor(props) {
  const [editMode, setEditMode] = useState({
    active: false,
    codeBackup: ""
  });
  const inputElem = useRef(null);
  const [code, setCode] = useState(props.code);
  useEffect(() => {
    if (editMode.active) {
      inputElem.current.focus();
      console.log(`setting focus. edit mode = ${editMode.active}`);
    }
  }, [inputElem, editMode.active]);

  return (
    <div>
      <div>
        <textarea
          value={code}
          readOnly={!editMode.active}
          onChange={(e) => {
            setCode(e.target.value);
          }}
          ref={inputElem}
          {...props.fieldProps}
        />
      </div>
      <div>
        {editMode.active ? (
          <>
            <button
              type="button"
              onClick={() => {
                setEditMode({ active: false, codeBackup: "" });
                props.onChange && props.onChange(code);
              }}
            >
              Ok
            </button>
            <button
              type="button"
              onClick={() => {
                setCode(editMode.codeBackup);
                setEditMode({ active: false, codeBackup: "" });
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => setEditMode({ active: true, codeBackup: code })}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}
