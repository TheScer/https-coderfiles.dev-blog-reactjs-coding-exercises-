import React from "react";

export default function ClickButton(props) {
  return <button onClick={props.onClick}>{props.children}</button>;
}
