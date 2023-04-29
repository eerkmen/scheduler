import React from "react";
import propTypes from "prop-types";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

const InterviewerList = props => {
  const { interviewers, onChange, value } = props;
  

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