import React from "react";

/**
 * Component for displaying the header of an appointment.
 * @param {Object} props - The props that are passed to the component.
 * @param {string} props.time - The time value to be displayed in the header.
 * @returns {JSX.Element} - Rendered component.
 */
export default function Header(props) {
  // Destructure props for better readability
  const { time } = props;

  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{time}</h4>
      <hr className="appointment__separator" />
    </header>
  );
};
