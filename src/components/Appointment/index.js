import React from 'react';
import "./styles.scss";
import useVisualMode from "hooks/useVisualMode";
import Header from './Header';
import Empty from "./Empty";
import Show from "./Show";
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';

const EMPTY = "EMPTY";
const CREATE = "CREATE";
const SAVING = "SAVING";
const SHOW = "SHOW";
const EDIT = "EDIT";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const ERROR_DELETE = "ERROR_DELETE";
const ERROR_SAVE = "ERROR-SAVE";

/**
 * Component representing an appointment.
 * @param {Object} props - The props that are passed to the component.
 * @param {number} props.id - The ID of the appointment.
 * @param {string} props.time - The time of the appointment.
 * @param {Object} props.interview - The interview data.
 * @param {function} props.cancelInterview - Function to cancel the appointment.
 * @param {Array} props.interviewers - The available interviewers.
 * @param {function} props.bookInterview - Function to book the appointment.
 * @returns {JSX.Element} - Rendered component.
 */

export default function Appointment(props) {
  const { id, time, interview, cancelInterview, interviewers, bookInterview} = props;
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);
  
  function deleteApp() {
    transition(DELETING);
    cancelInterview(id)
      .then(() => {
        // Transition to the empty mode after successfully deleting the appointment
        transition(EMPTY);
      })
      .catch(() => {
        // Transition to the error mode if there is an error while deleting
        transition(ERROR_DELETE, true);
      });
  }
  
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
   
    transition(SAVING);
    // Call the bookInterview function to save the appointment
    bookInterview(id, interview)
      .then(() => {
        // Transition to the show mode after successfully saving the appointment
        transition(SHOW);
      })
      .catch(() => {
        // Transition to the error mode if there is an error while saving
        transition(ERROR_SAVE, true);
      });
  }
  



  return (
    <article className="appointment" data-testid="appointment">
      <Header time={time} />
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CONFIRM && <Confirm message={"Are you sure you would like to delete this appointment?"} onCancel={back} onConfirm={() => deleteApp(props.id)}/>}
      {mode === CREATE && (
        <Form interviewers={interviewers} onSave={save} onCancel={() => deleteApp(id)} />
      )}
      {mode === EDIT && (
        <Form
          interviewer={interview.interviewer.id}
          student={interview.student}
          interviewers={interviewers}
          onCancel={back}
          onSave={save}
          mode={mode}
        />
      )}
     
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === DELETING && <Status message={"Deleting"} />}
      {mode === ERROR_SAVE && (
        <Error
          message={"Could not book the appointment"}
          onClose={back}
        />
      )}
      {mode === ERROR_DELETE && <Error onClose={transition(SHOW)} message={"Could not cancel the appointment."}/>}
    </article>
  );
};