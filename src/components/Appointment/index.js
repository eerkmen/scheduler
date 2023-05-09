import React from 'react';
import "./styles.scss";
import Header from './Header';
import Empty from "./Empty";
import Show from "./Show";

import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';


export default function Appointment(props) {
  return (
    <article className="appointment" data-testid="appointment">
      {/* <Header time={props.time} /> */}
    </article>
  )
}