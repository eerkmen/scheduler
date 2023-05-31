import React from "react";

/**
 * Component for displaying an error message.
 * @param {Object} props - The props that are passed to the component.
 * @param {string} props.message - The error message to be displayed.
 * @param {function} props.onClose - The function to be called when the error message is closed.
 * @returns {JSX.Element} - Rendered component.
 */
export default function Error(props) {
  // Destructure props for better readability
  const { message, onClose } = props;

  return (
    <main className="appointment__card appointment__card--error">
      <section className="appointment__error-message">
        <h1 className="text--semi-bold">Error</h1>
        <h3 className="text--light">{message}</h3>
      </section>
      <img
        className="appointment__error-close"
        src="images/close.png"
        alt="Close"
        onClick={onClose}
      />
    </main>
  );
};
