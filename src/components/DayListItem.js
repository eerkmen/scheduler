import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

/**
 * Component for rendering a single day in the DayList component.
 * @param {Object} props - The props that are passed to the component.
 * @param {string} props.name - The name of the day.
 * @param {boolean} props.selected - Indicates whether the day is selected.
 * @param {number} props.spots - The number of spots available.
 * @param {function} props.setDay - Function to set the selected day.
 * @returns {JSX.Element} - Rendered component.
 */
export default function DayListItem(props) {
  // Destructure the props for easier access
  const { name, selected, spots, setDay } = props;

  // Set the CSS classes for the day item based on its state
  const dayClass = classNames(
    "day-list__item",
    { "day-list__item--selected": selected },
    { "day-list__item--full": !spots }
  );

  /**
   * Format the number of spots to display the correct text.
   * @param {number} spots - The number of spots available.
   * @returns {string} - Formatted text for the number of spots.
   */
  function formatSpots(spots) {
    if (spots === 0) {
      return "no spots remaining"
    }
    if (spots > 1) {
      return `${spots} spots remaining`
    }
    if (spots === 1) {
    return "1 spot remaining" 
    }

  }


  return (
    <li data-testid="day" onClick={() => setDay(name)} className={dayClass}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
}