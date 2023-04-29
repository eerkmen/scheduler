import React from "react";
import propTypes from "prop-types";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

const InterviewerList = props => {
  const { interviewers, onChange, value } = props;
  const interviewerItems = interviewers.map(n => {
    return (
      <InterviewerListItem
        key={n.id}
        name={n.name}
        avatar={n.avatar}
        setInterviewer={() => onChange(n.id)}
        selected={n.id === value}
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
};

export default InterviewerList;