import React from "react";

/**
 * Component for displaying an empty spot with an add button.
 * @param {Object} props - The props that are passed to the component.
 * @param {function} props.onAdd - The function to be called when the add button is clicked.
 * @returns {JSX.Element} - Rendered component.
 */
export default function Empty(props) {
  // Destructure props for better readability
  const { onAdd } = props;

  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={onAdd}
      />
    </main>
  );
};
