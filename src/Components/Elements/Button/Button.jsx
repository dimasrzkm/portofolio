import React from "react";

export default function Button(props) {
  const {
    classname,
    children,
    type = "button",
    onClick = () => {},
    ...rest
  } = props;

  return (
    <button
      className={`${classname}`}
      type="button"
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
