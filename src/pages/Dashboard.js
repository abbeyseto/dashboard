import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Header from "../components/Header/header";
import NotAvailable from "../components/NotAvailable";
function Dashboard() {
  const { sidebarState } = useContext(AppContext);
  return (
    <div className={"container"}>
      <div className={sidebarState ? "dashboard" : "dashboard closed"}>
        <Header heading="Dashboard" />
        <NotAvailable />
      </div>
    </div>
  );
}

export default Dashboard;
