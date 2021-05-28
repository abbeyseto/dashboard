import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import CurrentDate from "../components/CurrentDate/date";

function Dashboard() {
  const { sidebarState, setIsSidebarOpened } = useContext(AppContext);
  return (
    <div className={sidebarState ? "dashboard" : "dashboard closed"}>
      <div className={"header"}>
        <p >Dashboard</p>
        <CurrentDate/>
      </div>
    </div>
  );
}

export default Dashboard;
