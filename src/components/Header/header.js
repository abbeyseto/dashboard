import React from "react";
import CurrentDate from "../CurrentDate/date";
import notification from "../../assets/images/notification.svg"
import user from "../../assets/images/user.svg"

function header(props) {
  return (
    <>
      <div className={"header"}>
        <div>
          <p>{props.heading}</p>
          <CurrentDate />
        </div>
        <div className={"right-menu"}>
        <img src={notification} alt="logo"/>
        <img src={user} alt="logo"/>
        </div>
      </div>
    </>
  );
}

export default header;
