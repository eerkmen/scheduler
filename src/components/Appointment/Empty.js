import React from "react";
export default function Empty(props) {
    // Destructure props for better readability
    const { onAdd } = props;
  return (
    <main className="appointment__add">
     <img
      className="appointment__add-button"
      src="images/add.png"
      alt="Add"
      onClick={onAdd}
      />
    </main>
  );
}