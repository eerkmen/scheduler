import React from "react";
import DayListItem from "./DayListItem";

/**
 * Component for rendering a list of days.
 * @param {Object} props - The props that are passed to the component.
 * @param {Array} props.days - An array of day objects containing information about each day.
 * @param {string} props.value - The currently selected day.
 * @param {function} props.onChange - Function to handle the change of selected day.
 * @returns {JSX.Element} - Rendered component.
 */
export default function DayList(props) {
  // Destructure the props for easier access
  const { days, value, onChange } = props;

  // Create a list of DayListItem components based on the days array
  const dayList = days.map(day => (
    <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === value}
      setDay={onChange}
    />
  ));

  return <ul>{dayList}</ul>;
}
