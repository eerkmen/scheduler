import React from "react";
import DayList from "./DayList";
import "components/Application.scss";
import Appointment from "./Appointment";
import { getInterviewersForDay, getAppointmentsForDay, getInterview } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";

/**
 * The main component of the application.
 * @param {Object} props - The props that are passed to the component.
 * @returns {JSX.Element} - Rendered component.
 */
export default function Application(props) {
  // Custom hook to manage application data state and functions
  const { state, setDay, bookInterview, cancelInterview } = useApplicationData();

  // Retrieve interviewers for the selected day
  const interviewer = getInterviewersForDay(state, state.day);

  // Generate the schedule by mapping through appointments for the selected day
  const schedule = getAppointmentsForDay(state, state.day).map(appointment => {
    const interview = getInterview(state, appointment.interview);
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewer}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          {/* Render the DayList component */}
          <DayList days={state.days} value={state.day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {/* Render the schedule of appointments */}
        {schedule}

        {/* Render the last appointment for 5pm */}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}