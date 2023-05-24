import React from "react";

export default function Show(props) {
  // Destructure the props for easier access
  const { student, interviewer, onEdit, onDelete } = props;

  // Render the component to show the booked interview details
  return (
    <main className="appointment__card appointment__card--show">
      <section className="appointment__card-left">
        {/* Display the student's name */}
        <h2 className="text--regular">{student}</h2>
        <section className="interviewer">
          <h4 className="text--light">Interviewer</h4>
          {/* Display the interviewer's name */}
          <h3 className="text--regular">{interviewer.name}</h3>
        </section>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          {/* Button to edit the appointment */}
          <img
            className="appointment__actions-button"
            src="images/edit.png"
            alt="Edit"
            onClick={onEdit}
          />

          {/* Button to delete the appointment */}
          <img
            className="appointment__actions-button"
            src="images/trash.png"
            alt="Delete"
            onClick={() => onDelete()}
          />
        </section>
      </section>
    </main>
  );
}
