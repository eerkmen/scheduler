import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  // State hooks for student, interviewer, and error
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  const { interviewers, onSave, onCancel } = props;

  // Function to cancel and reset the form
  const cancel = () => {
    reset();
    onCancel();
  };

  // Function to reset the form inputs
  const reset = () => {
    setStudent("");
    setInterviewer(null);
    setError("");
  };

  // Function to validate the form inputs
  function validate() {
    if (!student) {
      setError("Student name cannot be blank");
      return;
    }

    if (!interviewer) {
      setError("Please select an interviewer");
      return;
    }

    setError("");
    onSave(student, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        {/* Form for entering the student name */}
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder={"Enter Student Name"}
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            data-testid="student-name-input"
          />
        </form>
        {/* Error message for validation */}
        <div className="appointment__validation">{error}</div>
        {/* List of interviewers */}
        <InterviewerList
          interviewers={interviewers}
          onChange={setInterviewer}
          value={interviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          {/* Cancel button */}
          <Button danger onClick={cancel}>Cancel</Button>
          {/* Save button */}
          <Button confirm onClick={validate()}>Save</Button>
        </section>
      </section>
    </main>
  );
};
