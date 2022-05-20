import React from "react";

export default function ClickButton({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
