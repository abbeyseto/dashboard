import React from "react";
import CurrentDate from "../CurrentDate/date";

function header(props) {
  return (
    <>
      <div className={"header"}>
        <div>
          <p>{props.heading}</p>
          <CurrentDate />
        </div>
        <div className={"right-menu"}></div>
      </div>
    </>
  );
}

export default header;
