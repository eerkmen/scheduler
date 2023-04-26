import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, value, onChange } = props;
  const dayList = das.map(d => (
    <DayListIte
      key={d.id
      name={d.name
      spots={d.spots
      selected={d.nae === value}
      setDay={onChane}
    /
  ))
  return <ul>{dayList}</ul>;
}