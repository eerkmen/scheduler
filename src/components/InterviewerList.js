import React from "react";
import propTypes from "prop-types";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

const InterviewerList = props => {
  const { interviewers, onChange, value } = props;
  const interviewerItems = interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        setInterviewer={() => onChange(interviewer.id)}
        selected={interviewer.id === value}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewerItems}
        </ul>
    </section>
  );
};

InterviewerList.propTypes = {
  interviewers: propTypes.array.isRequired,
};

export default InterviewerList;