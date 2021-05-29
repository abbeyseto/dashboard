import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import TableWrapper from "../components/TableWrapper";
import Header from "../components/Header/header";
function Dashboard() {
  const { sidebarState } = useContext(AppContext);
  return (
    <div className={"container"}>
    <div className={sidebarState ? "dashboard" : "dashboard closed"}>
      <Header heading='Dashboard'/>
      <div>
        <TableWrapper />
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
