import React from "react";
import classNames from "classnames";
import "components/Button.scss";

/**
 * Component for rendering a button.
 * @param {Object} props - The props that are passed to the component.
 * @param {boolean} props.confirm - Indicates whether the button is a confirm button.
 * @param {boolean} props.danger - Indicates whether the button is a danger button.
 * @param {function} props.onClick - Function to handle the button click event.
 * @param {boolean} props.disabled - Indicates whether the button is disabled.
 * @param {ReactNode} props.children - The content of the button (child elements).
 * @returns {JSX.Element} - Rendered component.
 */
export default function Button(props) {
  const buttonClass = classNames(
    "button",
    { "button--confirm": props.confirm },
    { "button--danger": props.danger }
  );

  return (
    <button className={buttonClass} onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </button>
  );
}
