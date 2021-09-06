import React from "react";
import ReactTooltip from "react-tooltip";

export default function Tooltip(props) {
  return (
    <>
      <span data-tip data-for={props.id}>
        <span className="dashicons dashicons-editor-help"></span>
      </span>
      <ReactTooltip
        id={props.id}
        overridePosition={(
          { left, top },
          currentEvent,
          currentTarget,
          node
        ) => {
          const d = document.documentElement;
          left = Math.min(d.clientWidth - node.clientWidth, left);
          top = Math.min(d.clientHeight - node.clientHeight, top);
          left = Math.max(0, left);
          top = Math.max(0, top);
          return { top, left };
        }}
        effect="solid"
      >
        {props.children}
      </ReactTooltip>
    </>
  );
}
