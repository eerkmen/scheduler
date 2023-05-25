import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  // Destructure the props for easier access
  const { name, avatar, selected, setInterviewer } = props;

  // Use classNames library to conditionally apply CSS classes
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected,
  });

  // Render the InterviewerListItem component
  return (
    <li className={interviewerClass} onClick={setInterviewer}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}
