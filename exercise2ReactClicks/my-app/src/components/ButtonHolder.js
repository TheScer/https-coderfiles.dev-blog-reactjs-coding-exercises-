import React from "react";
import ClickButton from "./ClickButton";

export const ButtonHolder = (props) => {
  function clickHandler() {
    const alertStr = "you clicked " + props.name;
    alert(alertStr);
  }

  return <ClickButton onClick={clickHandler} children={props.children} />;
};
