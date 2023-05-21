import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";


export default function DayListItem(props) {
  const { name, selected, spots, setDay } = props;
  const dayClass = classNames(
    "day-list__item",
    { "day-list__item--selected": selected },
    { "day-list__item--full": !props.spots}
  );

  function formatSpots(spots) {
    if(spots > 1 ) 
          return `${spots} spots remaining`;
   else if (spots === 1)
          return `1 spot remaining`;
   else
         return `no spots remaining`;
}


  return (
    <li data-testid="day" onClick={() => setDay(name)} className={dayClass}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">
        {formatSpots(spots)}
      </h3>
    </li>
  );
}