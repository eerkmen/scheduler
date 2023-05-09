import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, value, onChange } = props;
  const dayList = days.map(g => (
    <DayListItem
      key={g.id}
      name={g.name}
      spots={g.spots}
      selected={g.name === value}
      setDay={onChange}
    />
  ));
  return <ul>{dayList}</ul>;
}