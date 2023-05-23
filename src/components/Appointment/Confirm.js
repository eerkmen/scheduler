import React from "react";
import Button from "components/Button";

export default function Confirm(props) {
  // Destructure props for better readability
  const { message, onConfirm, onCancel } = props;

  return (
    <main className="appointment__card appointment__card--confirm">
      {/* Display the confirmation message */}
      <h1 className="text--semi-bold">{message}</h1>
      <section className="appointment__actions">
        {/* Cancel button */}
        <Button danger onClick={onCancel}>
          Cancel
        </Button>
        {/* Confirm button */}
        <Button danger onClick={onConfirm}>
          Confirm
        </Button>
      </section>
    </main>
  );
};
