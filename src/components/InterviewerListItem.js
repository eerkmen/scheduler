import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const { name, avatar, selected, setInterviewer } = props;
  const InterviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected,
  });

  return ()
}