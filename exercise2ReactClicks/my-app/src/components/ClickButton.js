import React from "react";

export default function ClickButton(props) {
  const alertStr = "you clicked " + props.name;
  function clickHandler() {
    alert(alertStr);
  }
  return (
    <button text="alert" onClick={clickHandler}>
      {props.children}
    </button>
  );
}
