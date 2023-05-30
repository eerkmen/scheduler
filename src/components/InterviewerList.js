import React from "react";
import PropTypes from "prop-types";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

const InterviewerList = (props) => {
  // Destructure the props for easier access
  const { interviewers, onChange, value } = props;

  // Create an array of InterviewerListItem components
  const interviewerItems = interviewers.map(interviewerInfo => {
    return (
      <InterviewerListItem
        key={interviewerInfo.id}
        name={interviewerInfo.name}
        avatar={interviewerInfo.avatar}
        setInterviewer={() => onChange(interviewerInfo.id)}
        selected={interviewerInfo.id === value}
      />
    );
  });

  // Render the InterviewerList component
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerItems}</ul>
    </section>
  );
};

// PropTypes validation for the interviewers prop
InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};

export default InterviewerList;
