import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Header from "../components/Header/header";
function Analytics() {
  const { sidebarState } = useContext(AppContext);
  return (
    <div className={"container"}>
      <div className={sidebarState ? "analytics" : "analytics closed"}>
        <Header heading="Analytics" />
      </div>
    </div>
  );
}

export default Analytics;
