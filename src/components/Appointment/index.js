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

export default function Appointment(props) {
  return (
    <article className="appointment" data-testid="appointment">
      {/* <Header time={props.time} /> */}
    </article>
  )
}