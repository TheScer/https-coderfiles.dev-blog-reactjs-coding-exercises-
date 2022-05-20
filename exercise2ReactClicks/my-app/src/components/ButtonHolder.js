import React from "react";
import ClickButton from "./ClickButton";

export const ButtonHolder = ({ name, children }) => {
  function clickHandler() {
    const alertStr = "you clicked " + name;
    alert(alertStr);
  }

  return <ClickButton onClick={clickHandler} children={children} />;
};
