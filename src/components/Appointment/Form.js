import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");
  const { interviewers, onSave, onCancel } = props;
  const cancel = () => {
    reset();
    onCancel();
  };
  const reset = () => {
    setStudent("");
    setInterviewer(null);
    setError("");
  };

  const validating = () => {
    if (!student) {
      setError("Student name cannot be blank");
      return;
    }

 
};
