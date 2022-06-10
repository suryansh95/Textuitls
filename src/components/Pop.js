import React from "react";

function Pop(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.textt && (
      <div
        className={`alert alert-${props.textt.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.textt.type)}</strong> : {props.textt.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}
export default Pop;
